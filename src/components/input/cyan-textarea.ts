import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cyanFieldComponentStyles } from '../../styles/cyan-component-style'

@customElement('cyan-textarea')
export class CyanTextarea extends LitElement {

  static styles = css`
    ${cyanFieldComponentStyles}
    :host {
      position: relative;
      transition: none;
      display: block;
      height: auto;
    }
    :host textarea {
      resize: none;
      background: none;
      border: none;
      margin: 0;
      padding: 0 8px;
      padding-top: 16px;
      width: calc(100% - 16px);
      color: var(--cyan-textfield-color);
      transition: none;
      font-family: var(--cyan-monospace-font-family);
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
      transition: all ease-out 0.2s;
    }
    :host(:focus) span.cyan-field-label {
      opacity: 0;
    }
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
  
  onChange (e:Event) {
    this.onExpandableTextareaInput(e)
    this.value = (e.target as HTMLInputElement).value
    const event = new CustomEvent('change', { detail: this.value })
    this.dispatchEvent(event)
  }

  onBlur (e:Event) {
    this.value = (e.target as HTMLInputElement).value
    const event = new CustomEvent('blur', { detail: this.value })
    this.dispatchEvent(event)
  }

  onExpandableTextareaInput({ target: node }:Event) {
    if (this.collapse) return
    if ((node as Node).nodeName.toLowerCase() !== 'textarea') return
    const elm = node as HTMLTextAreaElement
    if (elm.scrollHeight > elm.clientHeight) {
      elm.style.height = `${elm.scrollHeight}px`
      this.style.height = `${elm.scrollHeight}px`
    } else if (elm.scrollHeight < elm.clientHeight) {
      elm.style.height = `${elm.scrollHeight}px`
      this.style.height = `${elm.scrollHeight}px`
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
