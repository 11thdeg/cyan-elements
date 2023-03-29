export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cyan-navigation-button')
export class CyanNavigationButton extends CyanThemedElement {

  static styles = css`
  :host {
    display: block;
  }
  :host button {
    position: relative;
    margin: 0;
    padding: 0;
    height: 56px;
    width: 56px;
    
    border: none;
    font-family: var(--cn-font-family-ui);
    font-size: var(--cyan-font-size-caption);
    font-weight: var(--cyan-font-weight-caption);
    letter-spacing: var(--cyan-letter-spacing-caption);
    overflow: visible;

    // background: hsla(37, 100%, 50%, 0.4);
    background: none;

    color: var(--cyan-color-navigation-button);
  }
  :host button:hover {
    color: var(--cyan-color-navigation-button-hover);
  }
  :host button:active {
    color: var(--cyan-color-navigation-button-active);
  }
  :host button .iconContainer {
    display: block;
    
    height: 36px;
    width: 36px;
    margin: 0 10px;
    line-height: 24px;

    border-radius: 50%;
    transition: background-color 0.2s ease-in-out;

    background: var(--cyan-background-navigation-button-icon);
    // background: hsla(37, 100%, 50%, 0.4);
  }
  :host button .iconContainer.withoutLabel {
    width: 48px;
    height: 48px;
    margin: 4px;
  }
  :host button .iconContainer cyan-icon {
    margin-top: 0px;
  }
  :host(:hover) button .iconContainer {
    background: var(--cyan-background-navigation-button-icon-hover);
  }
  :host(:active) button .iconContainer {
    background: var(--cyan-background-navigation-button-icon-active);
  }
  :host([active]) button .iconContainer {
    background: var(--cyan-background-navigation-button-icon-active);
  }
  :host button .labelContainer {
    display: block;
    text-align: center;
    width: 80px;
    margin-left: -12px;
    margin-top: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 16px;
  }
  :host([notification]) button .notification {
    position: absolute;
    bottom: 6px;
    right: 8px;
    height: 16px;
    max-width: 48px;
    min-width: 8px;
    padding: 0 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    text-align: center;

    color: var(--cyan-color-navigation-button-notification);
    background: var(--cyan-background-navigation-button-notification);

    border-radius: 8px;
    // opacity: 0.88;
  }
  :host([label]) button .notification {
    bottom: 17px
  }
  `

  @property({ type: Boolean, reflect: true }) active = false 

  @property({ type: String, reflect: true }) noun = 'fox' 

  @property({ type: String, reflect: true }) label = ''

  @property({ type: String, reflect: true }) notification = ''

  render () {
    const ntf = this.notification ? html`<span class="notification">${this.notification}</span>` : html``

    if (this.label) {
      return html`<button>
        <span class="iconContainer">
          <cyan-icon small noun="${this.noun}"></cyan-icon>
        </span>
        <span class="labelContainer">${this.label}</span>
        ${ntf}
      </button>`
    }
    return html`<button>
      <span class="iconContainer withoutLabel">
          <cyan-icon noun="${this.noun}"></cyan-icon>
        </span>
        ${ntf}
    </button>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cyan-navigation-button': CyanNavigationButton
  }
}
