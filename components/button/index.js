import { css } from 'lit';
import { 
  spacer8, 
  bg9, 
  spacer12, 
  main3,
  main4, 
  main5, 
  spacer20, 
  elevation4, 
  focus,

  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,

} from '../../style.js';

export const button = css`
  button[ui-button] {
    display: block;
    margin-top: ${spacer8};
    margin-bottom: ${spacer8};
    width: fit-content;
    border-radius: 4px;
    ${elevation4()};
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; 
    padding: ${spacer12} ${spacer20};
    border: none;
    border-radius: 4px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    transition: background 0.1s ease-in;
    justify-content: center;
  }

  /** Primary */
  button[ui-button][primary] {
    background: ${main5};
    color: ${bg9};
  }

  button[ui-button][primary]:not([disabled]):focus-visible {
    ${focus()}
  }

  button[ui-button][primary]:not([disabled]):hover {
    box-shadow: rgb(0 0 0 / 25%) 0px 0px 6px 0px, rgb(0 0 0 / 50%) 0px 6px 6px 0px;
  }

  button[ui-button][primary]:not([disabled]):hover,
  button[ui-button][primary]:not([disabled]):focus-visible {
    background: ${main4};
  }

  button[ui-button][primary]:not([disabled]):active {
    background: ${main3};
  }

  button[ui-button][primary][disabled] {
    background: ${bg3};
    color: ${bg6};
  }
  
  /** Secondary */
  button[ui-button][secondary] {
    background: ${bg6};
    color: ${main4};
    border: solid 1px ${main4};
  }

  button[ui-button][secondary]:not([disabled]):focus-visible {
    ${focus()}
  }

  button[ui-button][secondary]:not([disabled]):hover {
    box-shadow: rgb(0 0 0 / 25%) 0px 0px 6px 0px, rgb(0 0 0 / 50%) 0px 6px 6px 0px;
  }

  button[ui-button][secondary]:not([disabled]):hover,
  button[ui-button][secondary]:not([disabled]):focus-visible {
    background: ${bg5};
  }

  button[ui-button][secondary]:not([disabled]):active {
    background: ${bg4};
  }

  button[ui-button][secondary][disabled] {
    background: ${bg6};
    color: ${bg3};
    border: solid 1px ${bg3};
  }

  @media(max-width: 480px) {
    button[ui-button] {
      width: 100%
    }
  }
`;
