import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('cyan-toolbar')
export class CyanToolbar extends LitElement {
  
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
      box-sizing: border-box;
      height: calc(2 * var(--cn-page-grid));
      padding: 0;
      margin: 0;
      justify-content: flex-start;
      gap: var(--cn-gap-toolbar);
      max-width: 100%;
    }
    :host([small]) {
      height: var(--cn-page-grid)
    }
    ::slotted(cyan-icon) {
      margin: 0;
      margin-top: -4px;
      padding: 0;
      width: 36px;
      height: 36px;
    }
    ::slotted(cyan-icon[small]) {
      width: 24px;
      height: 24px;
      padding: 12px 0;
    }
    ::slotted(cyan-icon[xsmall]) {
      width: 16px;
      height: 16px;
    }
    ::slotted(cyan-tag) {
      margin: 0;
    }
    :host([small]) ::slotted(cyan-icon[small]) {
      padding: 0;
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
