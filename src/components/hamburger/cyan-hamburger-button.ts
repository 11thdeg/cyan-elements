import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cyan-hamburger-button')
export class CyanHamburgerButton extends CyanThemedElement {

  @property({ type: Boolean, reflect: true })
    active = false

  @property({ type: String, reflect: true })
    ariaLabel = 'Menu'

  @property({ type: String, reflect: true })
    ariaControls = ''

  static styles = css`
    :host {
      cursor: pointer;
      height: 48px;
      width: 48px;
      margin: 4px;
      padding: 0;
      border-radius: 50%;
      background-color: var(--cyan-color-hamburger-background);
      position: relative;
      transition: background-color 0.3s ease-in-out;
    }
    :host(:hover) {
      background-color: var(--cyan-color-hamburger-background-hover);
    }
    :host([active]) {
      background-color: var(--cyan-color-hamburger-background-active);
    }
    :host([active]:hover) {
      background-color: var(--cyan-color-hamburger-background-active-hover);
    }

    :host button {
      transition-property: opacity, filter;
      transition-duration: 0.15s;
      transition-timing-function: linear;
      background-color: transparent;
      border: 0;
      margin: 0;
      height: 48px;
      width: 48px;
      padding: 0 4px
    }
    .hamburger-box {
      width: 40px;
      height: 24px;
      display: block;
      position: relative;
    }
    .hamburger-inner {
      display: block;
      margin-top: -2px;
      top: 0px;
      margin: 0
    }
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
      width: 40px;
      height: 4px;
      background-color: var(--cyan-color-hamburger);
      border-radius: 4px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }
    :host([active]) .hamburger-inner, :host([active]) .hamburger-inner::before, :host([active]) .hamburger-inner::after {
      background-color: var(--cyan-color-hamburger-active);
    }
    .hamburger-inner::before, .hamburger-inner::after {
      content: "";
      display: block;
    }
    .hamburger-inner::before {
      top: 10px;
      transition-property: transform, opacity;
      transition-timing-function: ease;
        transition-duration: 0.15s;
    }
    .hamburger-inner::after {
      top: 20px;
    }
    :host([active]) .hamburger-inner {
      transform: translate3d(0, 10px, 0) rotate(45deg);
    }
    :host([active]) .hamburger-inner::before {
      transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
      opacity: 0;
    }
    :host([active]) .hamburger-inner::after {
      transform: translate3d(0, -20px, 0) rotate(-90deg);
    }
  `

  toggleActive () {
    this.active = !this.active
    this.dispatchEvent(new CustomEvent('active', { detail: this.active }))
  }

  render () {
    return html`<button type="button" aria-label="${this.ariaLabel}" aria-controls=${this.ariaControls} @click="${this.toggleActive}">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>`
  }
}

declare global {
    interface HTMLElementTagNameMap {
      'cyan-hamburger-button': CyanHamburgerButton
    }
  }
  