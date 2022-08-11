import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('stylebook-toggles')
export class StylebookToggles extends LitElement {
  
  static styles = css`
    :host h2 {
      font-family: 'Overpass', sans-serif;
      font-weight: 300
    }
  `

  render () {
    return html`<cyan-column class="stylebook-column">
      <h2>Toggles</h2>
      <cyan-toggle></cyan-toggle>
    </cyan-column>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stylebook-toggles': StylebookToggles
  }
}
