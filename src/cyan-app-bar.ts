import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('cyan-app-bar')
export class CyanAppBar extends LitElement {
  
  static styles = css`
    :host nav{
      display: flex;
      flex-direction: row;
      gap: 24px;
      margin: 0;
      padding: 0 var(--cn-padding);
      height: 47px;
      border-bottom: solid 1px #acc;
      align-items: center;
    }
  `
  render () {
    return html`<nav class="app-bar">
      <slot></slot>
    </nav>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-app-bar': CyanAppBar
  }
}
