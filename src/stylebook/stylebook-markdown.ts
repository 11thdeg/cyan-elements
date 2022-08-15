import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { marked } from 'marked'
import { CyanToggle } from '../cyan-toggle'


@customElement('stylebook-markdown')
export class StylebookMarkdown extends LitElement {

  static markdown = `#### Markdown
  
  \`<cyan-markdown-section>\` is a component for displaying markdown.`

  @property({ type: Boolean })
    showRaw = false

  render() {
    const content = marked(StylebookMarkdown.markdown)
    return html`
        <cyan-column>
          <h1><span class="code">...</span></h1>
          <cyan-toggle label="Raw content" ?checked="${this.showRaw}" @change="${(e:Event) => { this.showRaw = (e.target as CyanToggle).checked}}"></cyan-toggle>
          ${ this.showRaw ?  html`<section><pre>${StylebookMarkdown.markdown}</pre></section>` : html`<cyan-markdown-section content="${content}"></cyan-markdown-section>` }
        </cyan-column>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'stylebook-markdown': StylebookMarkdown
  }
}