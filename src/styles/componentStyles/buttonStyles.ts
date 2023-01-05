
import { css } from 'lit'

export const buttonStyles = css`
  :host button {
    color: var(--cyan-button-color);
    background: var(--cyan-background-button);
    border: none;
    box-shadow: 1px 1px 10px -1px var(--cyan-button-shadow-color);
    font-family: var(--cyan-ui-font-family);
    font-size: var(--cyan-ui-font-size);
    letter-spacing: var(--cyan-ui-letter-spacing);
    font-weight: var(--cyan-ui-font-weight);
    transition: 0.2s all ease-in-out;
  }
  :host button:disabled,
  :host([secondary]) button:disabled {
    color: var(--cyan-button-color-disabled);
    background: var(--cyan-background-button-disabled);
    box-shadow: none;
  }
  :host button:disabled:hover {
    color: var(--cyan-button-color-disabled);
    background: var(--cyan-background-button-disabled);
    box-shadow: none;
  }
  :host([text]) button {
    box-shadow: none;
    color: var(--cyan-button-text-color);
    background: var(--cyan-background-button-text);
  }
  :host([text]) button:hover {
    box-shadow: none;
    background: var(--cyan-background-button-text-hover);
  }
  :host([text]) button:active {
    box-shadow: none;
    background: var(--cyan-button-text-background-color-active);
  }
  :host([text]) button:disabled {
    color: var(--cyan-button-text-color-disabled);
    background: var(--cyan-button-text-background-color-disabled);
  }
  :host button:focus {
    outline: none;
  }
  :host button:hover {
    box-shadow: 1px 1px 10px -1px var(--cyan-button-shadow-color-hover);
    background: var(--cyan-background-button-hover);
  }
  :host button:active {
    box-shadow: 1px 1px 10px -1px var(--cyan-button-shadow-color-active);
    background: var(--cyan-background-button-active);
  }
  @media screen and (max-width: 600px) {
    :host button .hideOnMobile {
      display: none !important;
    }
  }`