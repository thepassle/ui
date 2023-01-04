import { LitElement, html, css } from 'lit';
import { 
  main3, main4, main5, main6, main7,
  spacer16,
  bg1, bg2, bg3, bg4, bg5, bg6, bg7,
  focus,
  neutral
} from '../../style.js';
import { KEYCODES } from '@thepassle/app-tools/utils/keycodes.js';

class ToggleEvent extends Event {
  constructor(checked) {
    super('checked-changed');
    this.checked = checked;
  }
}

export class UiSwitch extends LitElement {
  static properties = {
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
  }

  static styles = css`
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
      --ui-switch-size: 22px;
      padding: 16px 8px;
      border-bottom: solid 1px ${bg4};
    }

    :host(:not([disabled]):focus-within),
    :host(:not([disabled]):hover) {
      border-radius: 8px;
      background: ${bg5};
    }

    label {
      font-size: 16px;
      font-weight: 700;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none; 
    }

    .button {
      position: relative;
      height: var(--ui-switch-size);
      width: calc(var(--ui-switch-size) * 2);
      display: flex;
      background: ${bg4};
      border-radius: calc(var(--ui-switch-size) / 2);
      transition: background .1s ease-out;
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
    }
    
    .thumb {
      position: absolute;
      width: calc(var(--ui-switch-size) - 4px);
      height: calc(var(--ui-switch-size) - 4px);
      border-radius: 50%;
      background: ${bg2};
      border: solid ${bg4} 2px;
      left: 0;
      transition: background .1s ease-out,left .1s ease-out;
    }

    :host([checked]) .button {
      background: ${main4};
    }

    :host([checked]) .thumb {
      left: var(--ui-switch-size);
      border: solid ${main4} 2px;
      background: ${bg6};
    }
    
    .thumb:focus-visible {
      ${focus()}
      transition: background .1s ease-out,left .1s ease-out;
      border-radius: 50%;
    }
    
    :host(:hover) .thumb {
      background: ${bg1};
    }

    :host([checked]:hover) .thumb {
      background: ${bg5};
    }

    .thumb:focus-visible {
      background: ${bg1};
    }

    :host([checked]) .thumb:focus-visible {
      background: ${bg5};
    }

    :host([disabled]) label { 
      color: ${bg3};
    }

    :host([checked][disabled]) .thumb,
    :host([disabled]) .thumb { 
      background: ${bg6};
      border: solid 2px ${bg7};
    }
    
    :host([disabled]) .button {
      background: ${bg7};
    }
  `;

  static id = 0;

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
  }

  __onClick = () => {
    if(!this.disabled) {
      this.checked = !this.checked;
    }
  }

  __onKeydown = (e) => {
    switch (e.keyCode) {
      case KEYCODES.SPACE:
      case KEYCODES.ENTER:
        this.checked = !this.checked
        e.preventDefault();
        break;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    UiSwitch.id++;
    this.addEventListener('click', this.__onClick);
    this.addEventListener('keydown', this.__onKeydown);
    this.checked = this.hasAttribute('checked');
    this.disabled = this.hasAttribute('disabled');
  }

  updated(changedProperties) {
    if(
      changedProperties.has('checked') && 
      typeof changedProperties.get('checked') !== 'undefined'
    ) {
      this.dispatchEvent(new ToggleEvent(this.checked));
    }
  }

  render() {
    return html`
      <label id="label-${UiSwitch.id}" part="label">
        <slot></slot>
      </label>

      <div 
        role="switch" 
        aria-checked=${String(this.checked)}
        aria-disabled=${String(this.disabled)}
        aria-labelledby=${`label-${UiSwitch.id}`}
        aria-describedby=${`label-${UiSwitch.id}`}
        part="button" 
        class="button"
      >
        <div part="thumb" class="thumb" tabindex=${this.disabled ? '-1' : '0'}></div>
      </div>
    `
  }
}