import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cyanFieldComponentStyles } from '../../styles/cyan-component-style'

@customElement('cyan-textarea')
export class CyanTextarea extends LitElement {

  static styles = css`
    ${cyanFieldComponentStyles}
    :host {
      transition: none;
    }
    :host textarea {
      resize: none;
      position: absolute;
      top: 0;
      left: 0;
      background: none;
      border: none;
      height: 28px;
      margin: 0;
      padding: 0 8px;
      padding-top: 16px;
      width: calc(100% - 16px);
      color: var(--cyan-textfield-color);
      transition: none;
      font-family: var(--cyan-monospace-font-family);
    }
    :host textarea:focus {
      outline: none;
    }
  `
  @property({ type: String })
    label = ''

  @property({ type: String, reflect: true })
    value = ''

  @property({ type: String })
    placeholder = ''

  @property({ type: Number, reflect: true })
    cols = 5

  @property({ type: Boolean, reflect: true })
    disabled = false

  @property({ type: Boolean, reflect: true })
    fixed = false

  @property({ type: Boolean, reflect: true })
    collapsed = false
  
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
    if (this.collapsed) return
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
    return html`
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
    'cyan-textarea': CyanTextarea
  }
}
