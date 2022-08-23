<script setup lang="ts">
import { ref } from 'vue';

const inputValue = ref('')
</script>
<template>
  <article class="column" id="Inputs">
    <section>
      <h1>Textfield</h1>
      <cyan-textfield
        :value="inputValue"
        @blur="inputValue = $event.target.value"
        label="Example label"
        placeholder="Example placeholder"></cyan-textfield>
      <br/>
      {{inputValue}}
      <cyan-textfield
        value="Example error-value"
        label="Example label"
        placeholder="Example placeholder"
        error="Example error message"></cyan-textfield>
    </section>
  </article>
</template>