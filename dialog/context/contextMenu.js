import { render } from 'lit';
import { media } from '@thepassle/app-tools/utils/media.js';
import { debounceAtFrame } from '@thepassle/app-tools/utils/async.js';
import { compute } from './positioning.js';
import { FOCUSABLE_ELEMENTS, KEYCODES } from './CONSTANTS.js';

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
  let target;

  return {
    opening: async ({dialog, parameters}) => {
      dialog.id = 'context';
      render(parameters.template(), dialog.form);
      
      target = parameters.target.path.find(e => e.localName === 'button') || parameters.target;
      target.setAttribute('aria-expanded', 'true');

      if (!media.MAX.XS()) {
        await compute(target, dialog);
      }

      function onMenuKeyDown(e) {
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
      
      dialog.addEventListener('keydown', onMenuKeyDown);
      window.addEventListener('resize', handleResize);
    },
    closing: () => {
      target.setAttribute('aria-expanded', 'false');
      index = 0;
      window.removeEventListener('resize', handleResize);
    }
  }
}