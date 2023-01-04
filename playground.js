import { nothing, LitElement, css, html } from "lit";
import { Dialog } from '@thepassle/app-tools/dialog.js';
import { Api } from '@thepassle/app-tools/api.js';
import { delay, delayPlugin } from '@thepassle/app-tools/api/plugins/delay.js';
import { button } from './components/button/index.js';
import { inlay } from './components/inlay/index.js';
import { error } from './components/error/index.js';
import { buttonLink } from './components/button-link/index.js';
import { input } from './components/input/index.js';
import { iconButton } from './components/icon-button/index.js';
import { kebab, shop, compass, admin, location } from './icons/index.js';
import { contextMenu } from './dialog/context/contextMenu.js';
import { context } from './dialog/context/index.js';
import { modal } from './dialog/modal/index.js';

import './theme/theme.js';
import './components/disclosure/index.js';
import './components/spinner/index.js';
import './components/switch/index.js';
import './components/bottom-nav/index.js';
import './components/card/index.js';

function progress() {
  const div = document.createElement('div');
  div.id = 'progress';
  let progress;
  document.body.prepend(div);
  // progress = document.createElement('progress');
  // progress.setAttribute('indeterminate', '')
  // div.appendChild(progress);
  return {
    name: 'progress',
    beforeFetch: () => {
      progress = document.createElement('progress');
      div.appendChild(progress);
    },
    afterFetch: (r) => {
      progress.remove();
      return r;
    }
  }
}

const api = new Api({
  plugins: [
    delayPlugin(4000),
    progress()
  ]
});

const dialog = new Dialog({
  context: contextMenu(),
  foo: modal({
    title: 'Foo',
    // import: () => Promise.resolve,
    import: () => new Promise(r => setTimeout(r, 1000)),
    render: () => html`<p>hello foo</p>`
  }),
  login: modal({
    title: 'Login',
    import: () => import('./login.js'),
    render: () => html`<login-el></login-el>`
  }),
  bar: modal({
    title: 'bar',
    import: () => Promise.reject(),
    render: () => html`<p>hello bar</p>`
  })
});

window.d = dialog;

class Playground extends LitElement {
  static properties = {
    count: {type: Number}
  }

  constructor() {
    super();
    this.count = 0;
  }

  static styles = [
    button, buttonLink, iconButton, error, inlay, input,
    css`
      :host {
        display: block;
        padding-top: 40px;
        padding-bottom: 100px;
      }

      footer {
        padding-bottom: 160px;
      }

      ui-disclosure:last-of-type {
        margin-bottom: 40px;
      }
      
      footer > div {
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
      }

      main {
        max-width: 820px;
        margin-left: auto;
        margin-right: auto;
      }
    `
  ];

  render() {
    return html`
      <main>
        <ui-card label="hello">
          <p>foo</p>
          <p>foo</p>
        </ui-card>

        <ui-disclosure>
          <div slot="label">click</div>
          <div ui-inlay slot="detail">
            <button ui-button primary @click=${() => {api.get('https://pokeapi.co/api/v2/pokemon/')}}>api call</button>
            <p>foo</p>
            <p>foo</p>
            <p>foo</p>
          </div>
        </ui-disclosure>
        <ui-disclosure>
          <div slot="label">click</div>
          <div ui-inlay slot="detail">
            <p>foo</p>
            <p>foo</p>
            <p>foo</p>
          </div>
        </ui-disclosure>

        <ui-card label="hello">
          <button
            ${context(dialog, () => html`
              <button>1</button>
              <button>2</button>
              <button>3</button>
            `)} 
            slot="icon" 
            ui-icon-button
          >
            ${kebab}
          </button>
          <p>foo</p>
          <p>foo</p>
          <p>foo</p>
        </ui-card>
        <ui-switch>Enable foo function</ui-switch>
        <ui-switch checked>Enable bar functionality</ui-switch>
        <ui-switch @checked-changed=${({checked}) => console.log(checked)}>Toggle foo status</ui-switch>
        <ui-switch disabled>Undisable disabled state</ui-switch>
        <ui-switch checked disabled>Undisable disabled state</ui-switch>
        <div ui-inlay>sadfhaksjdfh</div>
        <button 
          slot="icon" 
          ui-icon-button
          ${context(dialog, () => html`
            <button>1</button>
            <button>2</button>
            <button>3</button>
          `)} 
        >
          ${kebab}
        </button>
        ${this.count}
        <button ui-button primary @click=${() => {this.count+=1;}}>inc</button>
        <button ui-button primary disabled>disabled</button>
        <button @click=${() => dialog.open({id: 'foo'})} ui-button primary>click</button>
        <button @click=${() => dialog.open({id: 'bar'})} ui-button secondary>click</button>
        <button ui-button secondary disabled>disabled</button>
        <a ui-button-link primary href="/">link</a>
        <a ui-button-link secondary href="/">link</a>
        <button disabled ui-icon-button>${kebab}</button>

        <button @click=${() => dialog.open({id: 'login'})} ui-button primary>login</button>

        <label ui-label>
          <input ui-input
            type="text"
            placeholder=""
          />
          <span>Default</span>
        </label>

        <label ui-label>
          <input ui-input
            type="text"
            placeholder=""
            pattern="[a-z]+"
            value="5"
          />
          <span>invalid</span>
        </label>

        <label ui-label>
          <input ui-input
            required
            type="text"
          />
          <span>required</span>
        </label>

        <label ui-label>
          <input ui-input
            type="text"
            placeholder=""
            ?disabled=${true}
          />
          <span>Disabled</span>
        </label>

        <!-- <div ui-error>Something went wrong.</div> -->

        <theme-creator initial="#fcb93c" kind="main"></theme-creator>
        <theme-creator initial="#3492EA" kind="secondary"></theme-creator>
        <theme-creator initial="#ea9eb1" kind="error"></theme-creator>
        <theme-creator initial="#6c707a" kind="bg"></theme-creator>
      </main>

      <footer>
        <div>
          <p>foo</p>
          <p>foo</p>
          <p>foo</p>
          <p>foo</p>
          <p>foo</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('playground-el', Playground);