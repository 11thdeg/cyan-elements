import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import nounsFile from '../assets/proprietary/icons/nouns.json'

@customElement('stylebook-all-icons')
export class StylebookAllIcons extends LitElement {
  
  static styles = css`
    :host div.icons{
      display: flex;
      gap: var(--cyan-grid-gap);
      flex-wrap: wrap;
    }
    :host div.display{
      text-align: center;
    }
    :host div.display p{
      font-family: var(--cyan-ui-font-family);
      font-size: 11px;
      font-weight: var(--cyan-ui-font-weight);
      line-height: var(--cyan-ui-line-height);
      margin: 0;
      padding: 0;
      word-break: break-word;
      overflow: hidden;
      width: 58px;
    }
    :host h2 {
      font-family: Overpass,sans-serif;
    }
  `

  render () {
    const nouns = nounsFile as Record<string, string>
    const iconNames = Array.from(Object.keys(nouns))
    return html`<h2>All Icons with a noun</h2>
      <div class="icons">
        ${iconNames.map(iconName => html`<div class="display">
            <cyan-icon noun="${iconName}"></cyan-icon>
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
