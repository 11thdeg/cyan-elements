import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('cyan-column')
export class CyanColumn extends LitElement {
  
  static styles = css`
    :host article {
      margin: var(--cyan-margin);
      padding: var(--cyan-padding);
    }
  `


  render () {
    return html`<article class="column">
      <slot></slot>
    </article>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-column': CyanColumn
  }
}
