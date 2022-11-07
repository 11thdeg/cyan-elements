import { css } from 'lit'

export const fieldStyles = css`
  :host {
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
    background: var(--cyan-background-field, red);
    border-bottom: 1px solid var(--cyan-border-color-field, blue);
  }
  :host(:hover) {
    background: var(--cyan-background-field-hover, red);
    border-bottom: 1px solid var(--cyan-border-color-field-hover, blue);
  }
  :host(:focus-within) {
    background: var(--cyan-background-field-active, red);
    border-bottom: 1px solid var(--cyan-border-color-field-active, blue);
  }
  :host([error]) {
    background: var(--cyan-background-field-error, red);
    border-bottom: 1px solid var(--cyan-border-color-field-error, blue);
  }
  :host([error]) .cyan-field-label {
    color: var(--cyan-border-color-field-error, red);
  }
  :host([disabled]) {
    opacity: 0.5;
  }`