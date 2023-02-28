import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cyan-navigation-rail')
export class CyanNavigationRail extends CyanThemedElement {
  
  static styles = css`
    :host {
      display: block;
    }
    :host nav {
      width: var(--cn-width-rail, 80px);
      height: 100vh;
      height: 100dvh;
      position: fixed;
      top: 0;
      left: 0;
      margin: 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
      padding-top: 4px;
      padding-bottom: 16px;
      z-index: var(--cyan-z-index-rail, 1000);
    }
    @media (max-width: 600px) {
      :host {
        display: none;
      }
    }`

  render () {
    return html`
      <nav>
        <slot></slot>
      </nav>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-navigation-rail': CyanNavigationRail
  }
}
