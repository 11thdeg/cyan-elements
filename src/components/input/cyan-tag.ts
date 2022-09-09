import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cyanUIComponentStyles } from '../../styles/cyan-component-style'

@customElement('cyan-tag')
export class CyanTag extends LitElement {
  
  static styles = css`
    ${css`${cyanUIComponentStyles}`}
    :host {
      display: inline-block;
      background-color: var(--cyan-tag-background-color);
      height: 20px;
      padding: 2px 8px;
      vertical-align: middle;
      border-radius: 10px;
      line-height: 20px;
      color: var(--cyan-tag-color);
      margin: 0 4px;
      position: relative;
      text-decoration: none;
    }
    .action-noun{
      background-color: var(--cyan-tag-action-background-color);
      border-radius: 50%;
      height: 20px;
      width: 16px;
      padding: 0px 2px;
      margin: 0;
      margin-right: -5px;
      display: inline-block;
    }`

  @property({ type: String })
    label = ''
  @property({ type: String })
    noun = ''
  @property({ type: Boolean, reflect: true })
    selected = false
  @property({ type: Boolean, reflect: true })
    disabled = false
  @property({ type: String})
    action = ''

  render () {
    return html`
        ${this.noun ? html`<cyan-icon noun="${this.noun}" xsmall></cyan-icon>` : ''}
        <span class="TypeCaption">${this.label}</span>
        ${this.action ? html`<span class="action-noun"><cyan-icon noun="${this.action}" xsmall></cyan-icon></span>` : ''}
      `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-tag': CyanTag
  }
}
