<script lang="ts" setup>
import { ref } from 'vue';

const fielda = ref('aa')
const disabled = ref(false)
const error = ref(false)
</script>

<template>
  <article class="Column">
    <h2>TextField</h2>
    <cyan-toolbar>
      <cyan-toggle :checked="disabled" @change="disabled = $event.target.checked" label="Disabled"/>
      <cyan-toggle :checked="error" @change="error = $event.target.checked" label="Error"/>
    </cyan-toolbar>
    <cyan-textfield :value="fielda" label="Label" @change="fielda = $event.target.value" :disabled="disabled" 
      :error="error" />
    <p>{{ fielda }}</p>
  </article>
</template>