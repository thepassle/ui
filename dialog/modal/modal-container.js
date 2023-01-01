import { css,  html, LitElement } from 'lit';
import { when } from '@thepassle/app-tools/utils/index.js';
import { cross } from '../../icons/cross.svg.js';
import { button } from '../../components/button/index.js';
import { error } from '../../components/error/index.js';
import { iconButton } from '../../components/icon-button/index.js';
import { main5 } from '../../style.js';
import '../../components/spinner/index.js';

class ModalContainer extends LitElement {
  static properties = {
    header: { type: String },
    state: { type: String },
    importPromise: {}
  }

  constructor() {
    super();
    this.state = 'pending';
  }

  static styles = [
    button, iconButton, error,
    css`
      button[ui-button][secondary] {
        width: 100%;
        margin-bottom: 0;
      }

      header {
        display: flex;
      }

      h1 {
        color: ${main5};
        margin: 0;
        margin-right: -40px;
        flex: 1;
        text-align: center;
      }
    `
  ];

  updated(changedProperties) {
    if (changedProperties.has('importPromise')) {
      this.importPromise
        .then(() => {
          this.state = 'success';
        }).catch(() => {
          this.state = 'error';
        })
    }
  }

  render() {
    return html`
      <header>
        ${when(this.header, () => html`<h1>${this.header}</h1>`)}
        <button @click=${this.dialog.close.bind(this.dialog)} ui-icon-button value="close">${cross}</button>
      </header>

      ${when(this.state === 'pending', () => html`<ui-spinner></ui-spinner>`)}
      ${when(this.state === 'success', () => this.template)}
      ${when(this.state === 'error', () => html`<div ui-error>Something went wrong.</div>`)}

      <button @click=${this.dialog.close.bind(this.dialog)} ui-button secondary value="close">close</button>
    `;
  }
}

customElements.define('modal-container', ModalContainer);
