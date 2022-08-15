import { html } from 'lit'

export function inCodeSpan(tag: string) {
  return html`<span class="code">${"<" + tag.toLowerCase() + ">"}</span>`
}