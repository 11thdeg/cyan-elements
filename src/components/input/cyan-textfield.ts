import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cyanUIComponentStyles } from '../../styles/cyan-component-style'

@customElement('cyan-textfield')
export class CyanTextfield extends LitElement {

  static styles = css`
    ${cyanUIComponentStyles}
    :host {
      display: block;
      width: 100%;
      position: relative;
      height: 48px;
    }
    :host .cyan-textfield {
      height: 48px;
    }
    :host .cyan-textfield-input {
      position: absolute;
      top: 0;
      left: 0;
      background: none;
      background-color: var(--cyan-field-background-color);
      border: none;
      border-bottom: 1px solid var(--cyan-field-border-color);
      height: 28px;
      margin: 0;
      padding: 0 8px;
      padding-top: 12px;
      width: calc(100% - 16px);
      font-size: var(--cyan-field-font-size);
      line-height: var(--cyan-field-line-height);
      color: var(--cyan-field-color);
      border-radius: 0 12px 0 0;
    }
    :host .cyan-textfield-label-text {
        position: absolute;
        top: 2px;
        left: 8px;
        z-index: 1;
        width: 100%;
        font-size: var(--cyan-field-label-font-size);
        line-height: var(--cyan-field-label-line-height);
        color: var(--cyan-field-label-color);
        pointer-events: none;
    }
  `
  @property({ type: String })
    label = ''

  @property({ type: String })
    value = ''

  render () {
    return html`
      <label class="cyan-textfield">
        <input type="text" class="cyan-textfield-input" value="${this.value}"/>
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
