import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { marked } from 'marked'
import { CyanToggle } from '../cyan-toggle'


@customElement('stylebook-markdown')
export class StylebookMarkdown extends LitElement {

  static markdown = `### An example of Markdown

See 'src/stylebook/stylebook-markdown.ts' for the source.`

  @property({ type: Boolean })
    showRaw = false

  render() {
    const content = marked(StylebookMarkdown.markdown)
    return html`
        <cyan-column>
          <h1>Markdown</h1>
          <p>The following is an example of a <span class="code">${"<cyan-markdown-section>"}</span> rendered Markdown:</p>
          <cyan-toggle label="Raw content" ?checked="${this.showRaw}" @change="${(e:Event) => { this.showRaw = (e.target as CyanToggle).checked}}"></cyan-toggle>
          ${ this.showRaw ? html`<section>
            <pre>${StylebookMarkdown.markdown}</pre>
          </section>` : html`<cyan-markdown-section content="${content}"></cyan-markdown-section>` }
        </cyan-column>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'stylebook-markdown': StylebookMarkdown
  }
}