<script lang="ts" setup>
import { computed, ref } from 'vue'
import { marked } from 'marked'

const md = ref('')
const rendered = computed(() => marked(md.value))
</script>

<template>
  <article class="Column" id="Editor">
    <h1>Editor</h1>
    <cyan-markdown-area rows="7" label="A markdown editor" @change="md = $event.detail" placeholder="Supports copy-paste from html, and images"/>
  </article>
  <article class="Column">
    <h1>Rendered</h1>
    <section :innerHTML="rendered"></section>
  </article>
</template>