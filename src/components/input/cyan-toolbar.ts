import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { cyanComponentStyle } from '../../styles/cyan-component-style'

@customElement('cyan-toolbar')
export class CyanToolbar extends LitElement {
  
  static styles = css`
    ${css`${cyanComponentStyle}`}
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 48px;
      padding: 4px 0;
      justify-content: flex-start;
      gap: var(--cyan-col-gap);
      max-width: 100%;
    }
    :host([small]) {
      height: 24px;
      padding: 4px 0;
      margin: 0;
      gap: calc(var(--cyan-col-gap) / 2);
    }
    ::slotted(cyan-icon) {
      margin: 0;
      padding: 0;
      width: 36px;
      height: 36px;
    }
    ::slotted(cyan-icon[small]) {
      width: 24px;
      height: 24px;
      padding: 12px;
    }
    ::slotted(cyan-icon[xsmall]) {
      width: 16px;
      height: 16px;
    }
    ::slotted(cyan-tag) {
      margin: 0;
    }
    :host([small]) ::slotted(cyan-icon[small]) {
      padding: 0;
    })`


  render () {
    return html`
      <slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-toolbar': CyanToolbar
  }
}
