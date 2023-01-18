import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cn-asset-token')
export class CyanAssetToken extends CyanThemedElement {
  static styles = css`
    :host {
      position: relative;
      width: 122px;
      height: 122px;
      background-color: var(--chroma-primary-c);
      border-radius: 12px;
    }
    :host img.preview {
        width: 122px;
        height: 122px;
        object-fit: cover;
        border-radius: 12px;
    }
    :host .label {
      position: absolute;
      top: 16px;
      left: 8px;
      width: calc(100% - 16px);
      background: hsla(var(--chroma-secondary-a-hsl), 0.77);
      border-radius: 4px;
      line-height: 24px;
      height: 24px;
      padding: 0 8px;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    :host cyan-icon {
      position: absolute;
      top: 32px;
      left: 24px;
    }
    :host .preview+cyan-icon{
      position: absolute;
      top: auto;
      left: auto;
      bottom: 8px;
      right: 8px;
    }`

  @property({ type: String, reflect: true })
    type = ''
 
  @property({ type: String, reflect: true })
    label = ''

  @property({ type: String, reflect: true })
    preview = ''


  typeIcon (type:string) {
    if (type.startsWith('image/')) {
      return 'assets'
    }
    if (type.startsWith('video/')) {
      return 'youTube'
    }
    if (type === 'application/pdf') {
      return 'pdf'
    }   
    return 'page'
  }

  renderPreview (preview: string, label: string, icon: string) {
    if (preview) {
      return html`
        <img class="preview" src="${preview}" alt="${label}" />
        <cyan-icon noun="${icon}" x-small></cyan-icon>`
    }
    return html`<cyan-icon noun="${icon}" large></cyan-icon>`
  }

  render () {

    const typeIcon = this.typeIcon(this.type)
    const preview = this.renderPreview(this.preview, this.label, typeIcon)

    return html`
      ${preview}
      <span class="label">${this.label}</span>
    `
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cn-asset-token': CyanAssetToken
  }
}