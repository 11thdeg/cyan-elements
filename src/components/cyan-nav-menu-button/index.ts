export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'
import { logDebug } from '../../utils/loghelpers'
import { resolveNounURI } from '../../utils/resolveNounURI'

@customElement('cyan-nav-menu-button')
export class CyanNavMenuButton extends CyanThemedElement {
  static styles = css`
    :host {
      display: block;
      width: 48px;
      height: 48px;
      position: relative;
    }
    :host button {
      width: 48px;
      height: 48px;
      background: none;
      border: none;
      margin: 0;
      padding: 0;
    }
    :host .state-box {
      display: block;
      margin: 2px;
      padding: 0px;
      height: 42px;
      width: 42px;
      background-color: var(--cyan-color-nav-menu-button-background);
      border-radius: 50%;
      position: relative;
      transition: background-color 0.2s ease-in-out; 
    }
    :host .state-box:hover {
      background-color: var(--cyan-color-nav-menu-button-background-hover);
    }
    :host .state-box:active {
      background-color: var(--cyan-color-nav-menu-button-background-active);
    }
    :host([open]) .state-box {
      background: var(--cyan-background-nav-menu-button-open);
    }
    :host .state-indicator {
      display: block;
      position: absolute;
      top: 10px;
      left: 10px;
      height: 24px;
      width: 24px;
    }
    .state-indicator::before, .state-indicator::after {
      content: "";
      display: block;
      position: absolute;
      background-color: var(--cyan-color-nav-menu-button-indicator);
      width: 24px;
      height: 4px;
      border-radius: 2px;
      transition: transform 0.2s ease-in-out;
    }
    .state-indicator::before {
      top: 5px;
    }
    .state-indicator::after {
      bottom: 5px;
    }
    :host([open]) .state-indicator::before  {
      transform: translate3d(0, 5px, 0) rotate(45deg);
      background: var(--cyan-background-nav-menu-button-open-indicator);
    }
    :host([open]) .state-indicator::after {
      transform: translate3d(0, -5px, 0) rotate(-45deg);
      background: var(--cyan-background-nav-menu-button-open-indicator);
    }
    :host button:focus {
      outline: none;
    }
    :host img {
      pointer-events: none;
      width: 52px;
      position: absolute;
      top: -2px;
      left: -2px;
      opacity: 0.17;
      z-index: 3;
    }
    :host([open]) img {
      opacity: 0.22;
    }
  `

  @property({ type: Boolean, reflect: true })
    open = false

  @property({ type: String, reflect: true })
    noun = 'fox'

  @property({ type: String, reflect: true })
    ariaLabel = 'Menu'

  @property({ type: String, reflect: true })
    ariaControls = ''

  toggleOpen () {
    logDebug('cyan-nav-menu-button', 'toggleOpen', this.open)
    this.open = !this.open
    this.dispatchEvent(new CustomEvent('change', { detail: this.open }))
  }

  render () {
    const dark = this.mode === 'dark' ? !this.open : false
    const iconPath = resolveNounURI(this.noun, dark)
    return html`<img src="${iconPath}" alt="${this.noun}" aria-disabled="true" />
    <button type="button" aria-label="${this.ariaLabel}" aria-controls=${this.ariaControls} @click="${this.toggleOpen}">
      <span class="state-box">
        <span class="state-indicator"></span>
      </span>
    </button>`
  }
}
declare global {
    interface HTMLElementTagNameMap {
      'cyan-nav-menu-button': CyanNavMenuButton
    }
  }