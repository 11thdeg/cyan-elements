<script lang="ts" setup>
import { ref } from 'vue'

const disabled = ref(false)
const error = ref(false)
const value = ref('')
</script>

<template>
  <article class="Column double-cut">
    <h2>Textarea</h2>
    <p class="TypeBody2 lowEmphasis">
      Overrides default textarea styles and copy-paste behaviour. Supports events for mobile keyboard.
    </p>
    <p class="TypeBody2 lowEmphasis">Also should support pasting of images (as event passed on to container)</p>
    <section>
      <h3>In a column</h3>
      <cyan-toolbar>
        <cyan-toggle :checked="disabled" @change="disabled = $event.target.checked" label="Disabled"/>
        <cyan-toggle :checked="error" @change="error = $event.target.checked" label="Error"/>
      </cyan-toolbar>
      <cyan-textarea
        label="Label"
        placeholder="Placeholder"
        :disabled="disabled"
        :error="error"
        :value="value" 
        @change ="value = $event.target.value"/>
      <cyan-toolbar>
        <cyan-button label="Clear" @click="value = ''" noun="trashcan" text />
      </cyan-toolbar>
    </section>
  </article>
</template>