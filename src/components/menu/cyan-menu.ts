import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cyanUIComponentStyles } from '../../styles/cyan-component-style'

@customElement('cyan-menu')
export class CyanMenu extends LitElement {
  
  static styles = css`
    ${cyanUIComponentStyles}
    :host([open]) {
      pointer-events: all;
      position: relative;
      height: 0px;
      width: 0px;
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
    :host([open]) .overlay {
      position:fixed;
      top:0;
      left:0;
      width: 100vw;
      height: 100vh;
    }
    :host([open]) ul.popup-menu {
      position: absolute;
      background-color: var(--cyan-menu-background-color);
      box-shadow: var(--cyan-menu-shadow);
      border-radius: 8px;
      padding: 4px;
      margin: 0;
      width: min(280px, 96vw);
      z-index: 10;
      transform: scaleY(1);
      transition: transform 0.2s ease-in-out;
    }
    :host ul.popup-menu {
      transform: scaleY(0) translateY(-100%);
    }
    :host() {
      pointer-events: none;
      opacity: 0;
    }
  `

  @property({type: Boolean, reflect: true})
    open = false

  handleClose (e: Event) {
    if (e.target !== this) {
      this.open = false
      this.dispatchEvent(new Event('close', {bubbles: true, composed: true}))
    }
  }

  render () {
    return html`
    <div class="overlay" @click="${this.handleClose}"></div>
    <ul class="popup-menu">
      <slot></slot>
    </ul>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-menu': CyanMenu
  }
}
