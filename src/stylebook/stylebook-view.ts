import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('stylebook-view')
export class StylebookView extends LitElement {
  static styles = css`
    `
  render() {
    return html`
        <!--cyan-layout>
          <stylebook-intro></stylebook-intro>
          <stylebook-iconography></stylebook-iconography>
          <stylebook-markdown></stylebook-markdown>
        </cyan-layout-->
        <cyan-element-explorer></cyan-element-explorer>
        `
  }
}

declare global {
    interface HTMLElementTagNameMap {
      'stylebook-view': StylebookView
    }
  }