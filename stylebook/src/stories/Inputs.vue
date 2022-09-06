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
  <article class="Column double-cut" id="Inputs">
    <h1>Inputs</h1>
    <section>
      <h2>Select</h2>
      <cyan-select label="A Select element" @change="selected = $event.target.value" :value="selected" :options="options">
      </cyan-select>
      <p>Selected: {{ selected }}</p>
      <p>Array inititated with:</p>
      <div class="codeblock">
        <pre>const options = [
  { label: "value 1", value: "A"},
  { label: "value 2", value: "B"}
]</pre>
      </div>
    </section>
    <section>
      <h2>Textfield</h2>
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