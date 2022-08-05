import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('cyan-spacer')
export class CyanSpacer extends LitElement {
  
  static styles = css`
    :host {
      display: block;
      flex-grow: 1;
    }
  `

  render () {
    return html`<slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-spacer': CyanSpacer
  }
}
