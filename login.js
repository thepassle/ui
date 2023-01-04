import { LitElement, css, html } from "lit";
import { button } from './components/button/index.js';
import { input } from './components/input/index.js';

class Login extends LitElement {
  static styles = [
    button, input,
    css`
      button[ui-button] {
        width: 100%;
      }

      .inputs {
        margin-top: 60px;
        margin-bottom: 60px;
      }
    `
  ];

  render() {
    return html`
      <div class="inputs">
        <label ui-label>
          <input ui-input
            type="text"
            placeholder=""
          />
          <span>Username</span>
        </label>
        
        <label ui-label>
          <input ui-input
            type="text"
            placeholder=""
          />
          <span>Password</span>
        </label>
      </div>

      <button ui-button primary>Login</button>
    `;
  }
}

customElements.define('login-el', Login);