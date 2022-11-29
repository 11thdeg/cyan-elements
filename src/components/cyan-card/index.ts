export * from './theme.sass'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CyanThemedElement } from '../../cyan-themed-element'

@customElement('cyan-card')
export class CyanCard extends CyanThemedElement {

  static styles = css`
    :host {
      box-sizing: border-box;
      margin: 0;
      padding: 8px 12px;
      display: block;
      border-radius: 16px;
      position: relative;
    }
    :host([elevation="0"]) {
      padding: 7px 11px;
      border: var(--cyan-border-card-elevation-0);
    }
    :host([elevation="1"]) {
      background: var(--cyan-background-card-elevation-1);
      box-shadow: var(--cyan-box-shadow-card-elevation-1);
    }
    :host([elevation="2"]) {
      background: var(--cyan-background-card-elevation-2);
      box-shadow: var(--cyan-box-shadow-card-elevation-2);
    }
    :host([elevation="3"]) {
      background: var(--cyan-background-card-elevation-3);
      box-shadow: var(--cyan-box-shadow-card-elevation-3);
    }
    :host .cover {
      width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      height: 120px;
      object-fit: cover;
      border-radius: 16px 16px 0px 0px;
    }
    :host .cardHeader {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;
      gap: 8px;
      position: relative;
    }
    :host([cover]) .cardHeader {
      display: block;
      border-radius: 16px 16px 0 0;
      margin: -8px -12px 0 -12px;
      height: 120px;
    }
    :host([cover]) .cardHeader .avatar {
      position: absolute;
      bottom: -12px;
      left: 12px;
      z-index: 1;
    }
    :host([cover]) .cardHeader .title {
      position: absolute;
      bottom: 0px;
      right: 0px;
      background: var(--cyan-background-cardheader-title);
      padding-right: 12px;
      width: 100%;
      box-sizing: border-box;
      padding-left: 72px;
      text-align: right
    }`

  @property({ type: Number, reflect: true }) elevation = 0

  @property({ type: String, reflect: true }) cover = undefined

  get coverImageURL () {
    return this.cover || ''
  }

  render () {
    return html`
      <div class="cardHeader">
        ${this.cover ? html`<img src="${this.coverImageURL}" alt="" class="cover" />` : ''}
        <div class="avatar"><slot name="avatar"></slot></div>
        <div class="title"><slot name="title"></slot></div>
      </div>
      <div class="cardContent">
        <slot></slot>
      </div>`
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cyan-card': CyanCard
  }
}
