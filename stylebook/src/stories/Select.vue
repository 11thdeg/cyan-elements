<script setup lang="ts">
import { ref } from 'vue';

const inputValue = ref('')
const selected = ref('B')
const options = [
  { label: "value 1", value: "A"},
  { label: "value 2", value: "B"}
]
</script>
<template>
  <article class="Column">
    <h2>Select</h2>
    <cyan-select label="Select" :options="options" :value="selected" @change="selected = $event.target.value"/>
    <br>
    <cyan-toolbar>
      <cyan-icon noun="tools" />
      <cyan-select label="Select" :options="options" :value="selected" @change="selected = $event.target.value"/>
    </cyan-toolbar>
  </article>
</template>