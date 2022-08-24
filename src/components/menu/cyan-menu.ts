import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { cyanUIComponentStyles } from '../../styles/cyan-component-style'

@customElement('cyan-menu')
export class CyanMenu extends LitElement {
  
  static styles = css`
    ${cyanUIComponentStyles}
    :host {
      position: relative;
    }
    :host ul.popup-menu {
      position: absolute;
    }
  `
  render () {
    return html`<ul class="popup-menu">
      <slot></slot>
    </ul>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-menu': CyanMenu
  }
}
