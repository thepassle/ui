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

      function onKeyDown(e) {
        const focusableElements = dialog.querySelectorAll(FOCUSABLE_ELEMENTS);
        const START = 0;
        const END = focusableElements.length - 1;
    
        switch (e.keyCode) {
          case KEYCODES.UP:
            index--;
            break;
          case KEYCODES.DOWN:
            index++;
            break;
          case KEYCODES.HOME:
            index = START;
            break;
          case KEYCODES.END:
            index = END;
            break;
        }
    
        if (!e.shiftKey && e.keyCode === KEYCODES.TAB) {
          index++;
          e.preventDefault();
        }
    
        if (e.shiftKey && e.keyCode === KEYCODES.TAB) {
          index--;
          e.preventDefault();
        }
    
        if (index < START) {
          index = END;
        }
    
        if (index > END) {
          index = START;
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