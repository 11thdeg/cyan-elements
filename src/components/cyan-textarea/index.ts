import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { fieldStyles } from './fieldStyles'
import { logDebug } from '../../utils/loghelpers'
import { CyanFieldElement } from '../input/cyan-field-element'

@customElement('cyan-textarea')
export class CyanTextarea extends CyanFieldElement {

  static styles = css`
    ${fieldStyles}
    :host {
      position: relative;
      transition: none;
      display: block;
      height: auto;
      border-radius: 0 12px 0 0;
    }
    :host textarea {
      resize: none;
      background: none;
      border: none;
      margin: 0;
      padding: 0 8px;
      padding-top: 16px;
      width: calc(100% - 16px);
      transition: none;
      font-family: var(--cyan-font-family-field, sans-serif);
      font-size: var(--cyan-font-size-field, 14px);
      color: var(--cyan-color-field, black);
    }
    :host textarea::-webkit-scrollbar {
      display: none;
    }
    :host textarea:focus {
      outline: none;
    }
    :host textarea:focus::placeholder {
      opacity: 0;
    }
    :host span.cyan-field-label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0px 8px;
      font-family: var(--cyan-font-family-ui, sans-serif);
      font-size: var(--cyan-font-size-caption, 11px);
      color: var(--cyan-border-color-field, blue);
    }
    /*:host(:focus) span.cyan-field-label {
      opacity: 0;
    }*/
  `
  @property({ type: String })
    label = ''

  @property({ type: String, reflect: true })
    value = ''

  @property({ type: String })
    placeholder = ''

  @property({ type: Number, reflect: true })
    rows = 11

  @property({ type: Boolean, reflect: true })
    disabled = false

  @property({ type: Boolean, reflect: true })
    fixed = false

  @property({ type: Boolean, reflect: true })
    collapse = false
  
  @property({ type: Boolean, reflect: true })
    error = false

  protected _inject = ''

  @property({ type: String })
  get inject () {
    return this._inject
  }
  set inject (value:string) {
    if (value === this._inject) return
    this._inject = value

    // Insert the data to the textarea
    const textarea = this.shadowRoot?.querySelector('textarea')
    if (!textarea) return // Should not happen
 
    const before = textarea.value.substring(0, textarea.selectionStart)
    const after = textarea.value.substring(textarea.selectionEnd, textarea.value.length)
 
    textarea.value = before + this._inject + after
 
    logDebug('cyan-markdown-area','Injected', this._inject)
  }


  onChange (e:Event|string) {
    this.onExpandableTextareaInput()
    if (typeof e === 'string') this.value = e
    else this.value = (e.target as HTMLInputElement).value
    const event = new CustomEvent('change', { detail: this.value })
    this.dispatchEvent(event)
  }

  onBlur (e:Event) {
    this.value = (e.target as HTMLInputElement).value
    const event = new CustomEvent('blur', { detail: this.value })
    this.dispatchEvent(event)
  }

  onExpandableTextareaInput() {
    if (this.collapse) return
    const textarea = this.shadowRoot?.querySelector('textarea')
    if (!textarea) return // Should not happen
    if (textarea.scrollHeight > textarea.clientHeight) {
      textarea.style.height = `${textarea.scrollHeight}px`
      this.style.height = `${textarea.scrollHeight}px`
    } else if (textarea.scrollHeight < textarea.clientHeight) {
      textarea.style.height = `${textarea.scrollHeight}px`
      this.style.height = `${textarea.scrollHeight}px`
    }
  }

  render () {
    const height = this.rows * 24 + 'px'
    return html`
      <style>
        :host textarea {
          height: ${height};
        }
        :host([collapse]) textarea {
          height: 72px;
        }
      </style>
      <label>
        <textarea
          ?disabled=${this.disabled}
          rows="${this.rows}"
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
    'cyan-textarea': CyanTextarea
  }
}
