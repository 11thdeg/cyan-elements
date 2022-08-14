import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('stylebook-view')
export class StylebookView extends LitElement {
  static styles = css`
    `
  render() {
    return html`
        <cyan-layout>
          <stylebook-intro></stylebook-intro>
        </cyan-layout>
        `
  }
}

declare global {
    interface HTMLElementTagNameMap {
      'stylebook-view': StylebookView
    }
  }