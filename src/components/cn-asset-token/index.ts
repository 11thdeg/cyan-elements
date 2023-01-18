export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cn-asset-token')
export class CyanAssetToken extends CyanThemedElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 104px;
      height: 104px;
      background: var(--cn-background-asset-token);
      border-radius: 12px;
      margin: 0;
      padding: 0;
    }
    :host(:hover) {
      box-shadow: 0 0 10px -2px var(--chroma-primary-c);
      filter: brightness(1.1);
    }
    :host img.preview {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
    }
    :host .label {
      position: absolute;
      top: 6px;
      left: 6px;
      width: calc(100% - 12px);
      background: hsla(var(--chroma-secondary-a-hsl), 0.44);
      border-radius: 10px;
      line-height: 24px;
      height: 24px;
      padding: 0 8px;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: var(--cyan-text-font-family);
      font-size: var(--cyan-font-size-caption);
      font-weight: var(--cyan-font-weight-caption);
      letter-spacing: var(--cyan-letter-spacing-caption);
    }
    :host cyan-icon {
      position: absolute;
      top: 28px;
      left: 16px;
      filter: drop-shadow(0 0 8px hsla(var(--chroma-secondary-a-hsl), 0.44));
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