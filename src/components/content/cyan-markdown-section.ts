import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { marked } from 'marked'
import {unsafeHTML} from 'lit/directives/unsafe-html.js'
import { cyanComponentStyle } from '../../styles/cyan-component-style'

@customElement('cyan-markdown-section')
export class CyanMarkdownSection extends LitElement {
  
  static styles = css`${cyanComponentStyle}`

  @property({ type: String })
    content = ''

  render () {
    const markup = marked(this.content)
    return html`
      <section class="cyan-markdown-section">
      ${unsafeHTML(markup)}
      </section>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-markdown-section': CyanMarkdownSection
  }
}
