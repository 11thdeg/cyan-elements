import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
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

  @property({ type: String })
    noun = ''

  @property({ type: String })
    route = ''

  render () {
    const content = this.noun ? html`${this.noun}<slot></slot>` : html`<slot></slot>`
    return html`<li>
      ${ this.route ? html`<a href="${this.route}">${content}</a>` : content }
  </li>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-menu': CyanMenu
  }
}
