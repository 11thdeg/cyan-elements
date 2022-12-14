import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cyanUIComponentStyles } from './styles/cyan-component-style'

@customElement('cyan-toggle')
export class CyanToggle extends LitElement {
  
  static styles = css`
    ${cyanUIComponentStyles}
    :host {
      position: relative;
      display: inline-block;
      min-width: 48px;
      height: 24px;
      cursor: pointer;
      top: 6px;
      user-select: none;
      -webkit-tap-highlight-color:transparent;
      margin: 0;
      padding: 0;
    }
    :host span.knob-label {
      display: inline-block;
      margin: 0;
      padding: 0;
      padding-right: 40px;
      line-height: 23px;
    }  
    :host input {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      opacity: 0;
      cursor: pointer;
      z-index: 3;
    }
    :host input + .knob {
      position: absolute;
      top: 2px;
      right: 24px;
      z-index: 2;
      transition: 0.3s ease all;
      height: 20px;
      width: 20px;
      border-radius: 10px;
      background-color: var(--cyan-toggle-knob-color-off);
    }
    :host input:checked + .knob {
      background-color: var(--cyan-toggle-knob-color-on);
      transform: translateX(22px);
    }
    :host input + .knob + .highlight {
      top: 0;
      right: 0;
      position: absolute;
      width: 48px;
      height: 24px;
      background-color: var(--cyan-toggle-knob-back-color-off);
      transition: 0.3s ease all;
      z-index: 1;
      border-radius: 12px;
    }
    :host input:checked + .knob + .highlight {
      background-color: var(--cyan-toggle-knob-back-color-on);
    }`

  @property({ type: Boolean })
    checked = false
  @property({ type: String })
    label = ''

  onChange () {
    this.checked = !this.checked
    this.dispatchEvent(new CustomEvent('change', { detail: this.checked }))
  }

  render () {
    return html`<label><span class="knob-label">${this.label}</span>
      <input type="checkbox" ?checked="${this.checked}" @change="${this.onChange}">
      <div class="knob"></div>
      <div class="highlight"></div>
    </label>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-toggle': CyanToggle
  }
}
