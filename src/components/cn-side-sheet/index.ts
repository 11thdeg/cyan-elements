import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cn-side-sheet')
export class CyanSideSheet extends CyanThemedElement {
  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 64px;
      right: 0;
      width: 400px;
      height: calc(100% - 64px);
      border-left: 1px solid var(--cn-border-color, #ccc);
      margin: 0;
      padding: 24px;
      background-color: var(--cn-background-level-1, #eee);
      border-radius: 24px 0 0 0px;
    }`

  @property({ type: Boolean, reflect: true })
    open = true
  
  render () {
    return html`<slot></slot>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cn-side-sheet': CyanSideSheet
  }
}