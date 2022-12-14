import { css } from 'lit'

export const cyanComponentStyle = css`
  :host {
    font-family: var(--cyan-font-family);
    font-size: var(--cyan-font-size);
    line-height: var(--cyan-line-height);
    color: var(--cyan-color);
  }
  :host h1, :host h2, ::slotted(h1), ::slotted(h2) {
    color: var(--cyan-heading-color-a);
  }
  :host h1, ::slotted(h1) {
    font-size: var(--cyan-type-headline-3-font-size);
    letter-spacing: var(--cyan-type-headline-3-letter-spacing);
    line-height: var(--cyan-type-headline-3-line-height);
    margin: var(--cyan-type-headline-3-margin);
    padding: var(--cyan-type-headline-3-padding);
    font-weight: var(--cyan-type-headline-3-font-weight);
  }
  :host h2, ::slotted(h2) {
    font-size: var(--cyan-type-headline-4-font-size);
    letter-spacing: var(--cyan-type-headline-4-letter-spacing);
    line-height: var(--cyan-type-headline-4-line-height);
    margin: var(--cyan-type-headline-4-margin);
    padding: var(--cyan-type-headline-4-padding);
    font-weight: var(--cyan-type-headline-4-font-weight);
  }
  :host h3, ::slotted(h3) {
    font-size: var(--cyan-type-headline-5-font-size);
    letter-spacing: var(--cyan-type-headline-5-letter-spacing);
    line-height: var(--cyan-type-headline-5-line-height);
    margin: var(--cyan-type-headline-5-margin);
    padding: var(--cyan-type-headline-5-padding);
    font-weight: var(--cyan-type-headline-5-font-weight);
  }
  :host h4, ::slotted(h4) {
    font-size: var(--cyan-type-headline-6-font-size);
    letter-spacing: var(--cyan-type-headline-6-letter-spacing);
    line-height: var(--cyan-type-headline-6-line-height);
    margin: var(--cyan-type-headline-6-margin);
    padding: var(--cyan-type-headline-6-padding);
    font-weight: var(--cyan-type-headline-6-font-weight);
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
  :host, ::slotted(*) {
    font-family: var(--cyan-ui-font-family);
    font-size: var(--cyan-ui-font-size);
    letter-spacing: var(--cyan-ui-letter-spacing);
    line-height: var(--cyan-ui-line-height);
    font-weight: var(--cyan-ui-font-weight);
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
    transition: all 0.2s ease-in-out;
  }
  :host([error]) {
    border-bottom: 1px solid var(--cyan-field-error-border-color);
    background-color: var(--cyan-field-error-background-color);
  }
  :host([error]:focus) {
    border-bottom: 1px solid var(--cyan-field-error-border-color);
    background-color: var(--cyan-field-focus-background-color);
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
  :host(:hover) {
    background-color: var(--cyan-field-hover-background-color);
  }
  :host([error]) .cyan-field-label {
    color: var(--cyan-field-error-border-color);
  }
  :host([error]:focus) .cyan-field-label {
    color: var(--cyan-field-focus-border-color);
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
  :host([error]:focus) .cyan-field-input {
    color: var(--cyan-field-focus-color);
  }
  :host .cyan-field-input::placeholder {
    color: var(--cyan-field-placeholder-color);
  }
  :host(:focus), :host(:active) {
    border-bottom: 1px solid var(--cyan-field-focus-border-color);
    background-color: var(--cyan-field-focus-background-color);
  }
  :host(:focus) input, :host(:active) input {
    outline: none;
    border: none;
  }`