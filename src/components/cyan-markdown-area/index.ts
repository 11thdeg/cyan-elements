import Europa from 'europa'
import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { logDebug } from '../../utils/loghelpers'
import { CyanTextarea } from '../cyan-textarea'

@customElement('cyan-markdown-area')
export class CyanMarkdownArea extends CyanTextarea {
  handlePaste (e: ClipboardEvent) {
    // We got this - no need to propagate
    e.preventDefault()
    e.stopPropagation()
    
    // Get the text representation of the clipboard
    const clipboardData = e.clipboardData
    if (!clipboardData) return

    let magic = ''

    // Do some magic here
    const html = clipboardData.getData('text/html')
    if (html) {
      const europa = new Europa()
      magic = europa.convert(html)
    }
    else {
      magic = clipboardData.getData('text/plain')
    }

    // Insert the data to the textarea
    const textarea = this.shadowRoot?.querySelector('textarea')
    if (!textarea) return // Should not happen

    const before = textarea.value.substring(0, textarea.selectionStart)
    const after = textarea.value.substring(textarea.selectionEnd, textarea.value.length)

    textarea.value = before + magic + after

    logDebug('cyan-markdown-area','Pasted', magic)
    this.onChange(e)
  }

  set inject (value: string) {
    const textarea = this.shadowRoot?.querySelector('textarea')
    if (!textarea) return // Should not happen

    const before = textarea.value.substring(0, textarea.selectionStart)
    const after = textarea.value.substring(textarea.selectionEnd, textarea.value.length)

    textarea.value = before + value + after

    logDebug('cyan-markdown-area','Injected', value)
    this._inject = value
    this.onChange(textarea.value)
  }

  @property({ type: String })
  get inject () {
    return this._inject
  }

  render () {
    const height = this.rows * 24 + 'px'
    return html`
    <style>
        :host textarea {
          height: ${height};
        }
      </style>
      <label class="cyan-textfield">
        <textarea
          @paste=${this.handlePaste}
          placeholder="${this.placeholder}" 
          @input="${this.onChange}"
          @change="${this.onChange}"
          .value="${this.value}"
          @blur="${this.onBlur}"></textarea>
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
