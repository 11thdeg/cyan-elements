import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cn-editor')
export class CyanEditor extends CyanThemedElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      outline: none;
    }
    :host(:focus) {
      outline: none;
    }
    textarea {
      width: 100%;
      height: 100%;
      background: var(--cn-background-field, #ccc);
      border: none;
      //border-top: 1px solid var(--cn-border-color, #ccc);
      border-bottom: 1px solid var(--cn-border-color, #ccc);
      resize: none;
      padding: calc(var(--cn-gap-column) / 2);
    }
    textarea:focus {
      outline: none;
      background: var(--cn-background-field-active, #fff);
    }
  `

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('tabindex', '0')
    this.setAttribute('role', 'textbox')
    this.addEventListener('focus', () => {
      console.log('focus')
      const textArea = this.shadowRoot?.querySelector('textarea')
      if (textArea) {
        textArea.focus()
      }
    })
    this.addEventListener('blur', () => {
      console.log('blur')
    })
  }

  render () {
    return html`<textarea></textarea>`
  }
  
}
declare global {
  interface HTMLElementTagNameMap {
    'cn-editor': CyanEditor
  }
}