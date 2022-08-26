# Cyan Elements

A shared element library for pelilauta. charna, and so.

# 0.5.0

Components available
- `<cyan-toggle>`
- `<cyan-textfield>`
- `<cyan-icon>`
- `<cyan-save-interaction>`
- `<cyan-code>`
- `<cyan-button>`

Atomics available
- `.TypeHeadline3`
- `.TypeHeadline4`
- `.TypeHeadline5`
- `.TypeHeadline6`
- `.hideOnMobile`

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


