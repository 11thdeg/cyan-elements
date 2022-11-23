import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('cyan-code')
export class CyanCode extends LitElement {
  
  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--cyan-monospace-font-family);
      font-size: var(--cyan-monospace-font-size);
      line-height: var(--cyan-monospace-line-height);
      color: var(--cyan-code-color);
      background-color: var( --cyan-code-background-color);
      padding: 0 4px;
      border-radius: 4px;
      word-break: break-all;
    }
  `
  render () {
    return html`
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-code': CyanCode
  }
}
