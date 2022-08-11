import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { mobileMediaQuery } from '../../styles/breakpoints'

@customElement('cyan-column')
export class CyanColumn extends LitElement {
  
  static styles = css`
    :host {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      display: block;
      width: 360px;
      flex-shrink: 0;
      flex-grow: 0;
    }
    :host(.cut) {
      width: 223px;
    }
    :host(.double) {
      width: 720px;
    }
    :host(.double-cut) {
      width: 445px
    }
    @media (max-width: 599px) {
      :host, :host(.double), :host(.double-cut), :host(.cut) {
        width: 100%;
      }
    }`


  render () {
    return html`
      <slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-column': CyanColumn
  }
}
