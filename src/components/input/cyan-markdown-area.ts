import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { CyanTextarea } from './cyan-textarea'

@customElement('cyan-markdown-area')
export class CyanMarkdownArea extends CyanTextarea {

  render () {
    const height = this.collapsed ? '24px' : this.rows * 24 + 'px'
    return html`
    <style>
        :host textarea {
          height: ${height};
        }
      </style>
      <label class="cyan-textfield">
        <textarea
          placeholder="${this.placeholder}" 
          @input="${this.onChange}"
          @change="${this.onChange}"
          @blur="${this.onBlur}">${this.value}</textarea>
        ${ this.label ? html`<span class="cyan-field-label">${this.hasAttribute('error') ? this.getAttribute('error') : this.label}</span>` : '' }
      </label>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-markdown-area': CyanMarkdownArea
  }
}
