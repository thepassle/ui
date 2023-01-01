import { css } from 'lit';
import { 
  spacer8, 
  bg9, 
  spacer12, 
  main3,
  main4, 
  main5, 
  spacer20, 
  spacer40, 
  elevation4, 
  focus ,
  bg4,
  bg5,
  bg6
} from '../../style.js';

export const buttonLink = css`
  a[ui-button-link] {
    margin-top: ${spacer8};
    margin-bottom: ${spacer8};
    width: fit-content;
    border-radius: 4px;
    display: flex;
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
    text-underline-offset: 1px;
  }

  /** Primary */
  a[ui-button-link][primary] {
    background: ${main5};
    color: ${bg9};
  }

  a[ui-button-link][primary]:focus-visible {
    ${focus()}
  }

  a[ui-button-link][primary]:hover {
    box-shadow: rgb(0 0 0 / 25%) 0px 0px 6px 0px, rgb(0 0 0 / 50%) 0px 6px 6px 0px;
  }

  a[ui-button-link][primary]:hover,
  a[ui-button-link][primary]:focus-visible {
    text-underline-offset: 3px;
    background: ${main4};
  }

  a[ui-button-link][primary]:active {
    background: ${main3};
  }

  /** Secondary */
  a[ui-button-link][secondary] {
    background: ${bg6};
    color: ${main4};
    border: solid 1px ${main4};
  }

  a[ui-button-link][secondary]:focus-visible {
    ${focus()}
  }

  a[ui-button-link][secondary]:hover {
    box-shadow: rgb(0 0 0 / 25%) 0px 0px 6px 0px, rgb(0 0 0 / 50%) 0px 6px 6px 0px;
  }

  a[ui-button-link][secondary]:hover,
  a[ui-button-link][secondary]:focus-visible {
    text-underline-offset: 3px;
    background: ${bg5};
  }

  a[ui-button-link][secondary]:active {
    background: ${bg4};
  }

  @media(max-width: 480px) {
    a[ui-button-link] {
      width: calc(100% - ${spacer40});
    }

    a[ui-button-link][secondary] {
      width: calc(calc(100% - ${spacer40}) - 2px);
    }
  }
`;
