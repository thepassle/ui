import { nothing } from 'lit';
import { KEYCODES } from './CONSTANTS.js';
import { Directive, directive } from 'lit/directive.js';

class Context extends Directive {
  constructor(partInfo){
    super(partInfo);

    const button = partInfo.element;
    button.addEventListener('click', (e) => {
      this.open(e);
    });

    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case KEYCODES.UP:
        case KEYCODES.DOWN:
          this.open(e);
          e.preventDefault();
          break;
      }
    });
  }

  open(e) {
    this.dialog.open({
      id: 'context',
      parameters: {
        target: e,
        template: this.template
      }
    });
  }

  render(dialog, template) {
    this.dialog = dialog;
    this.template = template;
    return nothing;
  }
}
export const context = directive(Context);
