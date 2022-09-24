import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cyanUIComponentStyles } from '../../styles/cyan-component-style'

@customElement('cyan-asset-option')
export class CyanAssetOption extends LitElement {
  
  static styles = css`
    ${cyanUIComponentStyles}
    :host {
      display: block;
      overflow: hidden;
      border-radius: 4px;
      padding: 4px;
    }
    :host([selected]) {
      background-color: var(--chroma-secondary-g);
    }
    :host img {
      width: 72px;
      height: 72px;
      background-color: var(--chroma-secondary-h);
    }
    :host([round]) img{
      border-radius: 50%
    }
    :host p {
      margin: 0;
      padding: 0;
      text-align: center;
      overflow: hidden;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
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
  @property({type: Boolean, reflect: true})
    selected = false

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
