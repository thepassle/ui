import { LitElement, html, css } from 'lit';
import {
  spacer8, 
  spacer4, 
  neutral, 
  bg3, 
  bg4, 
  focus
} from '../../style.js';

export class UiIconButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 40px;
      height: 40px;
    }

    ::slotted(button) {
      display: flex;
      padding: ${spacer8};
      border-radius: ${spacer4};
      background: none;
      border: none;
      fill: ${neutral};
    }


    ::slotted(button[disabled]) {
      fill: ${bg4};
    }
    
    ::slotted(button:hover:not([disabled])),
    ::slotted(button:not([disabled]):focus-visible) {
      background: ${bg4};
    }
    
    ::slotted(button:not([disabled]):active) {
      background: ${bg3};
    }

    ::slotted(button:not([disabled]):focus-visible) {
      ${focus()}
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}