import { computePosition } from "@floating-ui/dom";
import { render } from 'lit';
import { media } from '@thepassle/app-tools/utils/media.js';
import { debounceAtFrame } from '@thepassle/app-tools/utils/async.js';

const FOCUSABLE_ELEMENTS = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)';
const KEYCODES = {
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  ESC: 27,
  SPACE: 32,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

async function compute(target, dialog) {
  const { x, y } = await computePosition(target, dialog, { 
    placement: 'bottom-end',
  });
  Object.assign(dialog.style, {
    marginLeft: `${x}px`,
    marginTop: `${y}px`,
  });
}

/**
 * @param {{
 *  orientation?: 'horizontal' | 'vertical'
 * }} config
 */
export function contextMenu(config = {
  orientation: 'vertical'
}) {
  let handleResize;
  let index = 0;
  return {
    opening: async ({dialog, parameters}) => {
      dialog.id = 'context';
      render(parameters.template(), dialog.form);
      
      const target = parameters.target.path.find(e => e.localName === 'button') || parameters.target;

      if (!media.MAX.XS()) {
        await compute(target, dialog);
      }

      async function onKeyDown(e) {
        const focusableElements = [...dialog.querySelectorAll(FOCUSABLE_ELEMENTS)];
        const END = focusableElements.length - 1;
        const START = 0;
        const VERTICAL = config.orientation === 'vertical';
        index = focusableElements.findIndex(el => el === document.activeElement);

        switch(e.keyCode) {
          case VERTICAL ? KEYCODES.UP : KEYCODES.LEFT:
            if(index === START) {
              index = END;
            } else {
              index--;
            }
            break;
          case VERTICAL ? KEYCODES.DOWN : KEYCODES.RIGHT:
            if(index === END) {
              index = START;
            } else {
              index++;
            }
            break;
          case KEYCODES.HOME:
            index = START;
            break;
          case KEYCODES.END:
            index = END;
            break;
        }

        focusableElements[index].focus();
      }
      
      handleResize = debounceAtFrame(async () => {
        if(!media.MAX.XS()) {
          await compute(target, dialog);
        } else {
          Object.assign(dialog.style, {
            marginBottom: '0px',
            marginLeft: '0px',
            marginRight: '0px',
            marginTop: 'revert'
          });
        }
      });
      
      dialog.addEventListener('keydown', onKeyDown);
      window.addEventListener('resize', handleResize);
    },
    closing: () => {
      index = 0;
      window.removeEventListener('resize', handleResize);
    }
  }
}