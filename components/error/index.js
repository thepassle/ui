import { css } from 'lit';
import {
  neutral,
  borderRadius,
  error1,
  error2,
  error3,
  error4,
  error5,
  error6,
  error7,
  error8,
  error9,
  spacer16,
  spacer12
} from '../../style.js';

export const error = css`
  [ui-error] {
    color: ${error9};
    border: solid 2px ${error8};
    border-radius: ${borderRadius};
    background: ${error4};
    padding: ${spacer12} ${spacer16};
  }
`;