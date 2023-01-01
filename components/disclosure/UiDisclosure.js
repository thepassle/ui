import { LitElement, html, css } from 'lit';
import {
  spacer4, 
  spacer8, 
  spacer16, 
  main5, 
  neutral, 
  bg4, 
  bg5, 
  bg6, 
  borderRadius,
  focus,
} from '../../style.js';
import { chevronRight } from '../../icons/chevron-right.svg';

class OpenedChangedEvent extends Event {
  constructor(detail) {
    super('opened-changed');
    this.detail = detail;
  }
}

export class UiDisclosure extends LitElement {
  static properties = {
    expanded: {type: Boolean, reflect: true }
  }

  constructor() {
    super();
    this.expanded = false;
  }

  static styles = css`
    :host {
      margin-top: ${spacer4};
      margin-bottom: ${spacer4};
      display: block;
      width: 100%;
      height: auto;
      border-bottom: lightgrey solid 1px;
      background-color: ${bg6};
    }
    :host([expanded]) {
      border-bottom: none;
    }

    :host slot[name="detail"] {
      display: none;
    }
    :host([expanded]) slot[name="detail"] {
      display: block;
      margin-top: ${spacer4};
    }

    button {
      text-align: left;
      width: 100%;
      border: none;
      margin: 0;
      padding-right: 0;
      overflow: visible;
      background: transparent;
      font-size: 16px;
      color: ${neutral};

      font-weight: 700;
      padding-top: ${spacer16};
      padding-bottom: ${spacer16};
      padding-left: ${spacer4};
      border-radius: ${borderRadius};
      display: flex;
      align-items: center;
    }

    button span {
      padding-left: ${spacer4};
    }

    button svg {
      transform: rotate(0deg);
      transition: all 0.2s ease-in-out;
    }

    :host([expanded]) svg {
      transition: all 0.2s ease-in-out;
      transform: rotate(90deg);
      color: ${main5};
    }

    :host([expanded]) span {
      color: ${neutral};
    }

    button:hover,
    button:focus-visible {
      background-color: ${bg5};
    }

    button:active {
      background-color: ${bg4};
    }

    button:focus-visible {
      ${focus()}
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    if(this.hasAttribute('expanded')) {
      this.__open(false);
    }
  }

  handleClick() {
    if (this.expanded) {
      this.expanded = false;
      this.__close();
    } else {
      this.expanded = true;
      this.__open(true);
    }
  }

  __open(dispatch) {
    if(dispatch) {
      this.dispatchEvent(new OpenedChangedEvent(true));
    }
  }

  __close() {
    this.dispatchEvent(new OpenedChangedEvent(false));
  }

  render() {
    return html`
      <button @click=${this.handleClick} aria-expanded=${this.expanded}>
        ${chevronRight}
        <span><slot name="label"></slot></span>
      </button>
      <slot name="toggle" class="toggle"></slot>
      <slot name="detail"></slot>
    `;
  }
}