
import { css } from 'lit'

export const buttonStyles = css`
  :host button {
    color: var(--cyan-button-color);
    background-color: var(--cyan-button-background-color);
    border: none;
    box-shadow: 1px 1px 10px -1px var(--cyan-button-shadow-color);
    font-family: var(--cyan-ui-font-family);
    font-size: var(--cyan-ui-font-size);
    letter-spacing: var(--cyan-ui-letter-spacing);
    font-weight: var(--cyan-ui-font-weight);
    transition: 0.2s all ease-in-out;
  }
  :host button:focus {
    outline: none;
  }
  :host button:active {
    box-shadow: 1px 1px 10px -1px var(--cyan-button-shadow-color-active);
  }
  :host button:hover {
    box-shadow: 1px 1px 10px -1px var(--cyan-button-shadow-color-hover);
  }`