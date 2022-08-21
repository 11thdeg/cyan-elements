import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('cyan-textfield')
export class CyanTextfield extends LitElement {

  static styles = css`
    
  `
  @property({ type: String })
    label = ''


  render () {
    return html`
      <label class="cyan-textfield-label">
        <input type="text" class="cyan-textfield-input" />
        ${ this.label ? html`<span class="cyan-textfield-label-text">${this.label}</span>` : '' }
      </label>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-textfield': CyanTextfield
  }
}
