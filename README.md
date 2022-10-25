# Cyan Elements

A Design System for the 11thDEG sites.

_Or_

A shared element library for Pelilauta,  Charna, and so.

# 0.17.7+

#### Components available

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
-- `<cyan-spacer>`
- `<cyan-select>`
- `<cyan-asset-select>` and `<cyan-asset-option>`
- `<cyan-tag [notification] label=[string] noun=[noun] prepend=[noun] [secondary]>`
- `<cyan-love-button>`
- `<cyan-loader [large|inline]>`
- `<cyan-fab [secondary] [small]>`
- `<cyan-nav-button [compact] [light|dark]>` and `<cyan-nav-section [folds] [open] label=[string] [light|dark]>`

Atomics available
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
- `.hideOnMobile`
- `.dontBreakOut`
- `.codeblock`
- `.card`
- `.rise-a`
- `.rise-b`
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


