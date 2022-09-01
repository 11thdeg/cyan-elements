import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { cyanComponentStyle } from '../../styles/cyan-component-style'

@customElement('cyan-toolbar')
export class CyanToolbar extends LitElement {
  
  static styles = css`
    ${css`${cyanComponentStyle}`}
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 48px;
      padding: 4px 0;
      justify-content: flex-start;
    }`


  render () {
    return html`
      <slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-toolbar': CyanToolbar
  }
}
