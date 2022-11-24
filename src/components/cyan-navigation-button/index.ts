export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'


@customElement('cyan-navigation-button')
export class CyanNavigationButton extends CyanThemedElement {

  static styles = css`
  :host button {
    height: 56px;
    width: 56px;
    background: none;
    border: none;
    font-family: var(--cyan-text-font-family);
    font-size: var(--cyan-font-size-caption);
    font-weight: var(--cyan-font-weight-caption);
    letter-spacing: var(--cyan-letter-spacing-caption);
    line-height: var(--cyan-line-height-caption);
    overflow: visible;
    margin: 0;
    padding: 0;
  }
  :host button .iconContainer {
    display: block;
    background: var(--cyan-background-navigation-button-icon);
    height: 32px;
    width: 56px;
    border-radius: 16px;
    transition: background-color 0.2s ease-in-out;
  }
  :host button .iconContainer cyan-icon {
    margin-top: -2px;
  }
  :host(:hover) button .iconContainer {
    background: var(--cyan-background-navigation-button-icon-hover);
  }
  :host(:active) button .iconContainer {
    background: var(--cyan-background-navigation-button-icon-active);
  }
  :host([active]) button .iconContainer {
    background: var(--cyan-background-navigation-button-icon-active);
  }
  :host button .labelContainer {
    display: block;
    text-align: center;
    width: 80px;
    margin-left: -12px;
    margin-top: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  `

  @property({ type: Boolean, reflect: true }) active = false 

  @property({ type: String, reflect: true }) noun = 'fox' 

  @property({ type: String, reflect: true }) label = '' 

  render () {
    return html`<button>
      <span class="iconContainer">
        <cyan-icon small noun="${this.noun}"></cyan-icon>
      </span>
      <span class="labelContainer">${this.label}</span>
    </button>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cyan-navigation-button': CyanNavigationButton
  }
}
