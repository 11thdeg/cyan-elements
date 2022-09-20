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
      gap: var(--cyan-col-gap);
    }
    ::slotted(cyan-icon) {
      margin: 0;
      padding: 0;
      width: 48px;
      height: 48px;
    }
    ::slotted(cyan-icon[small]) {
      width: 24px;
      height: 24px;
      padding: 12px;
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
