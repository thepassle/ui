import { LitElement, html, css } from 'lit';
import { when } from '@thepassle/app-tools/utils/index.js';
import { spacer4, bg3, bg4, bg5, neutral, main4, focus } from '../../style.js';

/**
 * [
 *  label: 'Home',
 *  icon: home,
 *  condition: () => true 
 * ]
 */

export class UiBottomNav extends LitElement {
  static properties = {
    menu: {type: Object}
  };

  static styles = css`
    :host {
      width: 100%;
      background-color: ${bg5};
      height: 60px;
      padding-bottom: env(safe-area-inset-bottom);
      position: fixed;
      top: auto;
      bottom: 0px; 
      z-index: 9;
      
      box-shadow: 0px -2px 8px 0px rgba(0,0,0,0.8);
    }
    
    
    .header {
      display: flex;
      justify-content: center;
      height: 100%;
      align-items: center;
      max-width: 960px;
      margin: 0px auto;
    }

    nav {
      display: block;
      flex: 1 1 0%;
      padding: ${spacer4};
    }

    nav li {
      margin: 0;
    }

    nav ul {
      flex: 1 1 0%;
      padding-left: 0px;
      margin-bottom: 0px;
      margin-top: 0px;
      display: flex;
      list-style: none;
    }

    nav ul li {
      flex: 1;
      display: flex;
      align-items: center;
    }

    nav ul li a {
      flex: 1;
      font-size: 20px;
      padding: 5px 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: ${neutral};
      position: relative;
    }

    .notification-dot {
      right: 24px;
      top: 4px;
    }
    
    nav ul li a:hover,
    nav ul li a:focus-visible {
      background-color: ${bg4};
      border-radius: 10px;
    }

    nav ul li a:active {
      background-color: ${bg3};
    }

    nav ul li a:focus-visible {
      border-radius: 10px;
      ${focus()}
    }

    span {
      font-size: 14px;
      font-weight: 300;
    }

    nav svg {
      fill: ${neutral};
      margin-bottom: 4px;
    }

    .active svg {
      fill:${main4};
    }

    .active span {
      fill: ${main4}!important;
      font-weight: 500;
    }
  `;

  render() {
    const activeLink = new URL(window.location.href).pathname;

    return html`
      <header>
        <div class="header">
          <nav>
            <ul>
              ${this.menu?.map((item) => html`
                ${when(item?.condition ? item.condition() : true, () => html`
                  <li>
                    <a
                      class="${activeLink === item.href ? 'active' : ''}"
                      href="${item.href}"
                      aria-label="${item.label}"
                    >
                      ${item.icon}
                      <span>${item.label}</span>
                    </a>
                  </li>
                `)}
              `)}
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}