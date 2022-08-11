import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('cyan-navigation-rail')
export class CyanNavigationRail extends LitElement {
  
  static styles = css`
    :host nav {
      display: flex;
      flex-direction: column;
      background-color: var(--cyan-color-navigation-rail-background);
      color: var(--cyan-color-navigation-rail-text);
      position: fixed;
      top: 0;
      left: 0;
      width: var(--cyan-navigation-rail-width);
      height: 100vh;
      margin: 0;
      padding: 0;
      z-index: var(--cyan-z-index-navigation-rail);
    }
    :host > a {
      color: var(--cyan-color-navigation-rail-text);
    }
    @media (max-width: 599px) {
      :host {
        display: none;
      }
    }
  `
  render () {
    return html`<nav id="navigation-rail" class="navigation-rail">
        <slot></slot>
      </nav>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-navigation-rail': CyanNavigationRail
  }
}
