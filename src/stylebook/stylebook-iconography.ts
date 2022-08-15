import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { inCodeSpan } from './stylebookHelpers'


@customElement('stylebook-iconography')
export class StylebookIconography extends LitElement {

  static markdown = `# Stylebook
  
  This is a stylebook for the Cyan UI.`

  render() {
    return html`
        <cyan-column>
          <h1>Iconography</h1>
          <p>These icons are available through the ${inCodeSpan('cyan-icon')} element.</p>
          <stylebook-all-icons></stylebook-all-icons>
        </cyan-column>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'stylebook-iconography': StylebookIconography
  }
}