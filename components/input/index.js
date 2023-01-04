import { css } from 'lit';
import {
  spacer4, 
  neutral,
  focus,
  main4,
  spacer8,
  bg6, bg5, bg4, bg3, bg2, bg1
} from '../../style.js';

export const input = css`
  label[ui-label] {
    margin-top: ${spacer8};
    margin-bottom: ${spacer8};
    font-weight: 700;
    display: flex;
    flex-direction: column-reverse;
    font-size: 16px;
  }

  input[ui-input] + * {
    margin-bottom: ${spacer4};
    color: ${neutral};
    transition: color 0.2s ease-in;
    font-size: 16px;
  }

  input[ui-input]:focus-visible + * {
    color: ${main4};
  }

  input[ui-input][disabled] + * {
    color: ${bg2};
  }

  input[ui-input]:required + *::after {
    content: '*';
    margin-left: ${spacer4};
  }

  input[ui-input]:invalid + *::after {
    content: '*';
    margin-left: ${spacer4};
  }

  input[ui-input]:invalid + * {
    color: var(--ui-error-5);
  }
  
  input[ui-input] { 
    font-weight: 500;
    margin-bottom: ${spacer4};
    margin-top: ${spacer4};
    outline: 0;
    padding: ${spacer8} ${spacer8};
    background: ${bg4};
    border-radius: ${spacer4};
    border: initial;
    transition: background 0.2s ease-in;
    caret-color: ${neutral};
    color: ${neutral};
    font-size: 16px;
  }

  input[ui-input]:active,
  input[ui-input]:focus-visible {
    -webkit-appearance: none;
  }
  
  input[ui-input]:focus-visible {
    ${focus()}
  }

  input[ui-input]::placeholder {
    color: ${bg2};
  }

  input[ui-input][disabled] {
    background-color: ${bg5};
  }

  input[ui-input]:not([disabled]):hover {
    background: ${bg3};
    transition: background 0.2s ease-in;
  }
`;