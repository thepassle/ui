import { LitElement, html, css } from 'lit';
import { createShades } from './calculate-colors.js';

class Theme extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .result {
      display: flex;
    }

    .item {
      margin: 5px;
      width: 20px;
      height: 20px;
    }
  `;

  constructor() {
    super();
    this.result = [];
  }

  static properties = {
    result: {},
    kind: {type: String},
    initial: {type: String},
  }

  firstUpdated() {
    this.result = createShades(this.initial);
    this.result.forEach((s, i) => {
      document.documentElement.style.setProperty(`--ui-${this.kind}-${i}`, `#${s}`);
    });
  }

  calculate(e) {
    this.result = createShades(e.target.value);
    this.result.forEach((s, i) => {
      document.documentElement.style.setProperty(`--ui-${this.kind}-${i}`, `#${s}`);
    });
  }
  
  render() {
    return html`
      <h2>${this.kind}</h2>
      <input @input=${this.calculate} type="color" id="main" name="main" value="${this.initial}">

      <div class="result">
        ${this.result.map((r, i) => html`<div theme="--ui-${this.kind}-${i}" class="item" style="background: #${r}"></div>`)}
      </div>
    `;
  }
}

customElements.define('theme-creator', Theme);