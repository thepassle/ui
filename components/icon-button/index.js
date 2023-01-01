import { css } from 'lit';
import {
  spacer8, 
  spacer4, 
  neutral, 
  bg4, 
  bg5, 
  focus
} from '../../style.js';

export const iconButton = css`
  button[ui-icon-button] {
    width: 40px;
    height: 40px;
    display: flex;
    padding: ${spacer8};
    border-radius: ${spacer4};
    background: none;
    border: none;
    fill: ${neutral};
  }


  button[ui-icon-button][disabled] {
    fill: ${bg5};
  }
  
  button[ui-icon-button]:not([disabled]):hover,
  button[ui-icon-button]:not([disabled]):focus-visible {
    background: ${bg5};
  }
  
  button[ui-icon-button]:not([disabled]):focus-visible {
    background: ${bg5};
    ${focus()}
  }
  
  button[ui-icon-button]:not([disabled]):active {
    background: ${bg4};
  }
`;