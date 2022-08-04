import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('charna-column')
export class CharnaColumn extends LitElement {
  
  static styles = css`
    :host article {
      margin: var(--charna-margin);
      padding: var(--charna-padding);
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
    'charna-column': CharnaColumn
  }
}