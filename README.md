# Cyan Elements

A Design System for the 11thDEG sites.

_Or_

A shared element library for Pelilauta,  Charna, and so.

# 0.22.0+

## Components available

`<tag-name [boolean attribute] another=[typed attribute] (boolean property) (yet-another=[typed property])>`

- `<cyan-toggle [checked]>`
- `<cyan-textfield [error]>`
- `<cyan-textarea [error] (inject=[added to cursor position]) >`
- `<cyan-markdown-area {extends cyan-textarea}>`
- `<cyan-icon>`
- `<cyan-save-interaction>`
- `<cyan-code>`
- `<cyan-button [text] noun=[noun]>`
- `<cyan-toolbar [small]>`
-- `<cyan-toolbar-header level=[1|2|3|4]>` creates a responsive header element inside a toolbar. 
-- `<cyan-spacer>` creates a spacer element inside a toolbar.
- `<cyan-select>`
- `<cyan-asset-select>` and `<cyan-asset-option>`
- `<cyan-tag [notification] label=[string] noun=[noun] prepend=[noun] [secondary]>`
- `<cyan-love-button>`
- `<cyan-loader [large|inline]>`
- `<cyan-fab noun=[noun] [secondary] [small]>[slot]</cyan-fab>`
- `<cyan-nav-button [compact] [light|dark]>` and `<cyan-nav-section [folds] [open] label=[string] [light|dark]>`

## App structure
- `<cyan-top-app-bar [sticky] [modal]>` provides a basic layout element for an app-bar. 

### Content tags
- `<cyan-heading [level=1|2|3|4] label="[heading text]></cyan-heading>` is a 24px ot 48px high heading, which automatically resizes to fit the content and slot.
- `<cyan-bubble [reply]>` for a speech bubble (left or right depending on the reply attribute)

#### Microinteractions available
- `<cyan-hamburger-button aria-label="[string]"" aria-controls="[string]" [active]>`

## Events
- `cyan-field-focus` and `cyan-field-blur` are fired when a field is focused or blurred.
- `cyan-mode-dark` and `cyan-mode-light` are fired when the user changes the mode.

## Atomics available
- `.oneLiner` keeps the text on a line
- `.TypeHeadline3`
- `.TypeHeadline4`
- `.TypeHeadline5`
- `.TypeHeadline6`
- `.TypeBody1`
- `.TypeBody2`
- `.TypeCaption`
- `.TypeUI`
- `.lowEmphasis`
- `.hideOnMobile` and `.onlyOnMobile` hide an element below or above 600px device width, respectively.
- `.dontBreakOut`
- `.codeblock`
- `.card`
- `.rise-a`, `.rise-b`, `.rise-c`, `.rise-d` add a _material style_ elevation to an element. These work well with cards.
- `.chroma-card-a`
- `.chroma-card-b`
- `.chroma-card-c`

#### Layout bases
- `<main class="singleColumnLayout">`
- `<main class="dashboardLayout">`
- `<main class="bookLayout">`

All of these expect the elements inside the layout to have the class `.Column`. Additional functionality can be added by adding the class `.double` or `.double-cut` to the element.


See stylebook for examples of use

Try `cd stylebook && npm run dev` to run the stylebook.

# Developer info

Init the project
```bash
git clone https://github.com/11thdeg/cyan-elements.git
git submodule unit
git submodule update

npm install
```
To develop, perhaps you want to run the stylebook (with vite)
```bash
npm run dev
```

Or build and deploy
```bash
npm run lint
npm run build
npm publish
```

## Using with Vite/Vue
```typescript
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.startsWith('cyan-') // (return true)
        }
      }
    }
  })]
})
```


