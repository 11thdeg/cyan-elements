import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import nounsFile from '../assets/proprietary/icons/nouns.json'

@customElement('stylebook-all-icons')
export class StylebookAllIcons extends LitElement {
  
  static styles = css`
    :host div.icons{
      display: flex;
      gap: var(--charna-grid-gap);
    }
    :host div.display{
      text-align: center;
    }
    :host div.display p{
      margin: 0;
      padding: 0;
    }
  `

  render () {
    const nouns = nounsFile as Record<string, string>
    const iconNames = Array.from(Object.keys(nouns))
    return html`<h2>All Icons with a noun</h2>
      <div class="icons">
        ${iconNames.map(iconName => html`<div class="display">
            <charna-icon noun="${iconName}"></charna-icon>
            <p>${iconName}</p>
        </div>`)}
    </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stylebook-all-iconss': StylebookAllIcons
  }
}
