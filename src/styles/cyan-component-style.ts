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
export const cyanUIComponentStyles = css`
  ${cyanComponentStyle}
  :host {
    font-family: var(--cyan-ui-font-family);
    font-size: var(--cyan-ui-font-size);
    line-height: var(--cyan-ui-line-height);
    color: var(--cyan-ui-color);
  }
  :host(.hoverable:hover){
    filter: drop-shadow(0px 0px 8px var(--cyan-ui-hover-shadow-color));
  }
  :host(.clickable:active){
    filter: drop-shadow(0px 0px 8px var(--cyan-ui-active-shadow-color));
  }`

export const cyanFieldComponentStyles = css`
  ${cyanUIComponentStyles}
  :host {
    display: block;
    height: 40px;
    margin: 4px 0;
    background-color: var(--cyan-field-background-color);
    border-bottom: 1px solid var(--cyan-field-border-color);
    position: relative;
    border-radius: 0 12px 0 0;
  }
  :host([error]) {
    border-bottom: 1px solid var(--cyan-field-error-border-color);
    background-color: var(--cyan-field-error-background-color);
  }
  :host .cyan-field-label {
    position: absolute;
    top: 2px;
    left: 8px;
    z-index: 1;
    width: 100%;
    font-size: var(--cyan-field-label-font-size);
    line-height: var(--cyan-field-label-line-height);
    color: var(--cyan-field-label-color);
    pointer-events: none;
  }
  :host([error]) .cyan-field-label {
    color: var(--cyan-field-error-border-color);
  }
  :host .cyan-field-input {
    font-family: var(--cyan-field-font-family);
    font-size: var(--cyan-field-font-size);
    line-height: var(--cyan-field-line-height);
    color: var(--cyan-field-color);
  }
  :host([error]) .cyan-field-input {
    color: var(--cyan-field-error-color);
  }
  :host .cyan-field-input::placeholder {
    color: var(--cyan-field-placeholder-color);
  }`