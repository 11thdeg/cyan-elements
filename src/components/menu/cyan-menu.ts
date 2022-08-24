import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { cyanUIComponentStyles } from '../../styles/cyan-component-style'
import { logDebug } from '../../utils/loghelpers'

@customElement('cyan-menu')
export class CyanMenu extends LitElement {
  
  static styles = css`
    ${cyanUIComponentStyles}
    :host {
      position: relative;
      height: 0px;
      width: 0px;
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
    :host ul.popup-menu {
      position: absolute;
      background-color: var(--cyan-menu-background-color);
      box-shadow: var(--cyan-menu-shadow);
      border-radius: 8px;
      padding: 4px;
      margin: 0;
      width: min(280px, 96vw);
      z-index: 10;
      transform: scale(1);
      transition: transform 0.2s ease-in-out;
    }
    :host([disabled=true]) ul.popup-menu {
      transform: scale(0) translateX(100%) translateY(-100%);
    }
    :host([disabled=true]) {
      pointer-events: none;
      opacity: 0;
    }
  `

  setAttribute = (qualifiedName: string, value: string|boolean) => {
    super.setAttribute(qualifiedName, value+'')
    logDebug(`CyanMenu.setAttribute(${qualifiedName}, ${value}, typeof value: ${typeof value})`)
    if (qualifiedName === 'disabled' && value === false) {
      logDebug(`Add focus listener`)
      this.focus()
    }
    if (qualifiedName === 'disabled' && value === true) {
      logDebug(`Remove focus listener`)
      this.blur()
    }
  }

  onfocus = (ev: FocusEvent) => {
    logDebug('cyan-menu oonfocus', ev)
  }

  onblur = (ev:FocusEvent) => {
    logDebug('cyan-menu onblur', ev)
  }

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
