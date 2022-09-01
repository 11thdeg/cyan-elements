import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('cyan-asset-select')
export class CyanAssetSelect extends LitElement {
  
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: var(--chroma-secondary-i);
      border-radius: var(--cyan-border-radius);
      min-height: 48px;
      min-width: 48px;
      padding: 4px;
      gap: 4px
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
    'cyan-asset-select': CyanAssetSelect
  }
}
