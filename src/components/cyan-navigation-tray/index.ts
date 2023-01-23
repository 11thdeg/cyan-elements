export * from './theme.sass'
export * from './overrides.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cyan-navigation-tray')
export class CyanNavigationTray extends CyanThemedElement {
  
  static styles = css`
    :host nav {
      z-index: var(--cyan-z-index-tray);
      position: fixed;
      top: 8px;
      left: 0;
      height: calc(100vh - 16px);
      width: calc(100vw - 32px);
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      box-sizing: border-box;
      padding: 8px;
      background: var(--cyan-background-color-navigation-tray);
      border-radius: 0 24px 24px 0;
      box-sizing: border-box;
      transform: translateX(-100%);
      transition: transform 0.2s ease-in-out;
    }
    :host nav::-webkit-scrollbar {
      display: none;
    }
    :host([open]) nav {
      transform: translateX(0);
    }
    :host([open]) .overlay {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      background-color: red;
      width: 100vw;
      height: 100vh;
    }
    @media screen and (min-width: 840px) {
      :host nav {
        top: 72px;
        height: calc(100vh - 72px - 8px);
        width: 272px;
        transform: translateX(-260px);
      }
      :host([open]) .overlay {
        display: none;
      }
    }`

  @property({ type: Boolean, reflect: true }) open = false

  close() {
    this.open = false
  }

  render () {
    return html`
      <div class="overlay" @click="${this.close}" @keydown="${this.close}"></div>
      <nav>
        <slot></slot>
      </nav>`
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'cyan-navigation-tray': CyanNavigationTray
  }
}
