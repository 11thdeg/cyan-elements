import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { mobileMediaQuery } from '../../styles/breakpoints'

@customElement('cyan-layout')
export class CyanLayout extends LitElement {
  
  static styles = css`
    :host {
      margin: 0;
      padding: var(--cyan-grid-gap);
      display: flex;
      gap: var(--cyan-grid-gap);
      flex-direction: row;
      flex-wrap: wrap;
    }
    @media ${mobileMediaQuery} {
      :host {
        flex-direction: column;
          flex-wrap: nowrap;
      }
    }
  `
  render () {
    return html`
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-layout': CyanLayout
  }
}
