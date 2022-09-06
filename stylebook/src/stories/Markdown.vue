<script setup lang="ts">
const markdown = `# Markdown

and some text
* bullets
* bullets
* bullets

## Subtitle 2

and some text

### Subsubtitle 3

and some text

#### Subsubsubtitle 4
`
</script>

<template>
  <article class="Column Markdown">
    <cyan-markdown-section :content="markdown" />
  </article>
</template>