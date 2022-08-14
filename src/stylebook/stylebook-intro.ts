import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { marked } from 'marked'
import { cyanComponentStyle } from '../styles/cyan-component-style'

@customElement('stylebook-intro')
export class StylebookIntro extends LitElement {
  static styles = css` ${cyanComponentStyle}`

  static markdown = `# Stylebook
  
  This is a stylebook for the Cyan UI.`

  render() {
    const content = marked(StylebookIntro.markdown)
    return html`
        <cyan-column>
          <cyan-markdown-section
            content="${content}"
          ></cyan-markdown-section>
        </cyan-column>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'stylebook-intro': StylebookIntro
  }
}