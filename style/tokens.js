import { css } from 'lit';

/** COLORS */ 
export const main0 = css`var(--ui-main-0)`;
export const main1 = css`var(--ui-main-1)`;
export const main2 = css`var(--ui-main-2)`;
export const main3 = css`var(--ui-main-3)`;
export const main4 = css`var(--ui-main-4)`;
export const main5 = css`var(--ui-main-5)`;
export const main6 = css`var(--ui-main-6)`;
export const main7 = css`var(--ui-main-7)`;
export const main8 = css`var(--ui-main-8)`;
export const main9 = css`var(--ui-main-9)`;

export const neutral = css`var(--ui-neutral)`;

/** BG COLORS */
export const bg0 = css`var(--ui-bg-0)`;
export const bg1 = css`var(--ui-bg-1)`;
export const bg2 = css`var(--ui-bg-2)`;
export const bg3 = css`var(--ui-bg-3)`;
export const bg4 = css`var(--ui-bg-4)`;
export const bg5 = css`var(--ui-bg-5)`;
export const bg6 = css`var(--ui-bg-6)`;
export const bg7 = css`var(--ui-bg-7)`;
export const bg8 = css`var(--ui-bg-8)`;
export const bg9 = css`var(--ui-bg-9)`;

/** SPACING */
export const spacer4 = css`4px`;
export const spacer8 = css`8px`;
export const spacer12 = css`12px`;
export const spacer16 = css`16px`;
export const spacer20 = css`20px`;
export const spacer24 = css`24px`;
export const spacer32 = css`32px`;
export const spacer40 = css`40px`;
export const spacer48 = css`48px`;
export const spacer52 = css`52px`;
export const spacer56 = css`56px`;
export const spacer64 = css`64px`;
export const spacer72 = css`72px`;
export const spacer80 = css`80px`;
export const spacer100 = css`100px`;

/** BORDER */
export const borderRadius = css`8px`;

/** ELEVATION */
export const elevation1 = () => css`box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);`;
export const elevation2 = () => css`box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);`;
export const elevation3 = () => css`box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 3px 3px 0 rgba(0, 0, 0, 0.24);`;
export const elevation4 = () => css`box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24);`;
export const elevation6 = () => css`box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.12), 0 6px 6px 0 rgba(0, 0, 0, 0.24);`;
export const elevation8 = () => css`box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);`;
export const elevation10 = () => css`box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.12), 0 10px 10px 0 rgba(0, 0, 0, 0.24);`;
export const elevation12 = () => css`box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12), 0 12px 12px 0 rgba(0, 0, 0, 0.24);`;
export const elevation16 = () => css`box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.12), 0 16px 16px 0 rgba(0, 0, 0, 0.24);`;
export const elevation24 = () => css`box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12), 0 24px 24px 0 rgba(0, 0, 0, 0.24);`;

/** FOCUS */
export const DEFAULT_FOCUS_COLOR = css`rgb(159 202 234)`;
export const focus = (color = css`var(--ui-main-4)`) => css`
  border-radius: 4px;
  box-shadow: ${color} 0px 0px 12px, ${color} 0px 0px 0px 1px;
  outline: 1px;
  transition: box-shadow 0.1s ease-in-out 0s;
`;