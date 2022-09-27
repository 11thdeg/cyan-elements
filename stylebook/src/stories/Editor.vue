<script lang="ts" setup>
import { computed, ref } from 'vue'
import { marked } from 'marked'

const md = ref('')
const rendered = computed(() => marked(md.value))
</script>

<template>
  <article class="Column" id="Editor">
    <h1>Editor</h1>
    <cyan-markdown-area @change="md = $event.detail"/>
  </article>
  <article class="Column">
    <h1>Editor Data</h1>
    <section :innerHTML="rendered"></section>
  </article>
</template>