import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('charna-app-bar')
export class CharnaAppBar extends LitElement {
  
  static styles = css`
    :host nav{
      display: flex;
      flex-direction: row;
      gap: var(--charna-bar-gap);
      margin: 0;
      padding: 0;
      padding-left: var(--charna-margin);
      padding-right: var(--charna-margin);
      height: 47px;
      border-bottom: solid 1px #acc;
      align-items: center;
    }
    ::slotted(h1) {
      font-size: var(--charna-font-size-button);
      line-height: var(--charna-line-height-button);
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
    'charna-app-bar': CharnaAppBar
  }
}
