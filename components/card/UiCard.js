import { LitElement, html, css } from 'lit';
import { when } from '@thepassle/app-tools/utils/index.js';
import {
  borderRadius,
  main5,
  spacer12,
  spacer40,
  elevation4,
  neutral,
  bg6,
  bg2
} from '../../style.js';

export class UiCard extends LitElement {
  static properties = {
    label: {type: String}
  }

  static styles = css`
    :host {
      display: block;
      background-color: ${bg6};
      border-radius: ${borderRadius};
      border: solid 1px ${bg2};
      margin-bottom: ${spacer40};
      color: ${neutral};
      ${elevation4()}
    }

    header {
      display: flex;
      align-items: center;
      border-bottom: solid 1px ${bg2};
    }

    h3 {
      flex: 1;
      font-weight: 700;
      color: ${main5};
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