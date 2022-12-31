import { LitElement, html, css } from 'lit';
import { when } from '@thepassle/app-tools/utils/index.js';
import {
  borderRadius,
  main4,
  spacer12,
  spacer40,
  elevation4,
  neutral,
  bg5,
  bg3
} from '../../style.js';

export class UiCard extends LitElement {
  static properties = {
    label: {type: String}
  }

  static styles = css`
    :host {
      display: block;
      background-color: ${bg5};
      border-radius: ${borderRadius};
      border: solid 1px ${bg3};
      margin-bottom: ${spacer40};
      color: ${neutral};
      ${elevation4()}
    }

    header {
      display: flex;
      align-items: center;
      border-bottom: solid 1px ${bg3};
    }

    h3 {
      flex: 1;
      font-weight: 500;
      color: ${main4};
      margin:0;
    }

    header, .body {
      padding: ${spacer12};
    }
  `;

  render() {
    return html`
      <article>
        ${when(this.label, () => html`
        <header>
          <h3>${this.label}</h3>
          <slot name="icon"></slot>
        </header>`)}
        <div class="body">
          <slot></slot>
        </div>
      </article>
    `
  }
}