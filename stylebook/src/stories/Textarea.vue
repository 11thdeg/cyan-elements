<script lang="ts" setup>
import { ref } from 'vue'

const disabled = ref(false)
const error = ref(false)
</script>

<template>
  <article class="Column double-cut">
    <h2>Textarea</h2>
    <p class="TypeBody2 lowEmphasis">
      Overrides default textarea styles and copy-paste behaviour. Supports events for mobile keyboard.
    </p>
    <section>
      <h3>In a column</h3>
      <cyan-toolbar>
        <cyan-toggle :checked="disabled" @change="disabled = $event.target.checked" label="Disabled"/>
        <cyan-toggle :checked="error" @change="error = $event.target.checked" label="Error"/>
      </cyan-toolbar>
      <cyan-textarea label="Label" placeholder="Placeholder" :disabled="disabled" :error="error" />
    </section>
  </article>
</template>