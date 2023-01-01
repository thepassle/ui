import { LitElement, html, css } from 'lit';
import { main5, spacer16 } from '../../style.js';
import '@generic-components/components/spinner.js';

export class UiSpinner extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    generic-spinner {
      --generic-spinner-color: ${main5};
    }
    .spinner {
      display:flex;
      justify-content: center;
      margin-bottom: ${spacer16};
      margin-top: ${spacer16};
    }
  `;

  render() {
    return html`<div class="spinner"><generic-spinner></generic-spinner></div>`
  }
}