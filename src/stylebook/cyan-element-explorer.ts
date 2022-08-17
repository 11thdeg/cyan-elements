import { html, LitElement, PropertyDeclaration } from 'lit'
import { customElement } from 'lit/decorators.js'
import { CyanIcon } from '../components/cyan-icon'
import { logDebug } from '../utils/loghelpers'

interface Explored {
  type: {
    name: string
  }
}

@customElement('cyan-element-explorer')
export class CyanElementExplorer extends LitElement {

  getControls () {
    const props = CyanIcon.elementProperties
    // logDebug(props.keys())
    const controls = new Map<string, string>()
    props.forEach((value, key) => {
      logDebug(key, (value as Explored).type.name)
      controls.set(key.toString(), (value as Explored).type.name)
    })
    return Array.from(controls)
  }

  propsMap:Record<string, string|boolean> = {
    xsmall: true,
  }

  elProps () {
    return `${ Object.keys(this.propsMap).map(key => {
      logDebug(key, this.propsMap[key])
      if (typeof this.propsMap[key] === 'boolean') {
        return `?${key}="true"`
      }
    })}`
      
  }

  render() {
    return html`<div class="preview">
      <cyan-icon ${ this.elProps() }></cyan-icon>
      ${this.getControls().map(control => { return html`${control[0]}, ${control[1]}` })}
    </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cyan-element-explorer': CyanElementExplorer
  }
}

/*if (typeof this.propsMap[key] === 'boolean') {
        return html`<cyan-toggle name="${key}" value="${this.propsMap[key]}" @change="${() => {this.propsMap[key]=!this.propsMap[key]}}"></cyan-toggle>`
      }
    } )` */