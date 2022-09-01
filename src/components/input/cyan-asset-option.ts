import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('cyan-asset-option')
export class CyanAssetOption extends LitElement {
  
  static styles = css`
    :host {
      display: block;
      overflow: hidden;
    }
    :host img {
      width: 48px;
      height: 48px;
      background-color: var(--chroma-secondary-h);
    }
    :host([round]) img{
      border-radius: 50%
    }
    :host p {
      margin: 0;
      padding: 0;
    }
  `

  @property({ type: String, reflect: true })
    asset = ''
  @property({type: String})
    url = ''
  @property({type: String})
    name = ''
  @property({type: Boolean, reflect: true})
    round = false

  onclick = () => {
    this.dispatchEvent(new CustomEvent('change', {detail: {
      name: this.name,
      url: this.url,
      key: this.asset
    }, bubbles: true}))
  }

  render () {
    return html`
      <img src="${this.url}" alt="${this.name}" />
      <p class="TypeCaption">${this.name}</p>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-asset-option': CyanAssetOption
  }
}
