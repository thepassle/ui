import { css } from 'lit';
import { 
  neutral,
  spacer8, 
  bg7,
  bg9, 
} from '../../style.js';

export const inlay = css`
  [ui-inlay] {
    border-radius: ${spacer8};
    padding: 20px 12px;
    background: ${bg7};
    color: ${neutral};
    border: solid 1px ${bg9};
  }
`;
