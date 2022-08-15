import { css } from 'lit'
export const cyanComponentStyle = css`
  :host {
    font-family: var(--cyan-font-family);
    font-size: var(--cyan-font-size);
    line-height: var(--cyan-line-height);
    color: var(--cyan-color);
    background-color: var(--cyan-background-color);
  }
  :host h1, host h2, ::slotted(h1), ::slotted(h2) {
    color: var(--cyan-heading-color);
  }
  :host h1, ::slotted(h1) {
    font-size: var(--cyan-h1-font-size);
    font-weight: var(--cyan-h1-font-weight);
    line-height: var(--cyan-h1-line-height);
  }
  :host p, ::slotted(p) {
    font-family: var(--cyan-text-font-family);
    font-size: var(--cyan-text-font-size);
    line-height: var(--cyan-text-line-height);
    font-weight: var(--cyan-text-font-weight);
    letter-spacing: var(--cyan-text-letter-spacing);
    color: var(--cyan-text-color);
  }
`