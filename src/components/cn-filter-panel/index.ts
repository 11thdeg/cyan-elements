import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('cn-filter-panel')
export class CyanFilterPanel extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'form')
  }

  render () {
    return html`<cyan-toolbar>
      <cyan-button text noun="filter"></cyan-button>
    </cyan-toolbar>
        <slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cn-filter-panel': CyanFilterPanel
  }
}
