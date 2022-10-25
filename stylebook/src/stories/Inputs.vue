<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const inputValue = ref('')
const selected = ref('B')
const options = [
  { label: "value 1", value: "A"},
  { label: "value 2", value: "B"}
]
const textAreaCollapse = ref(false)

const showErrors = ref(false)
const errorMessage = computed(() => showErrors.value ? 'This is an error message' : false)
const inject = ref('')
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
      <br>
      {{inputValue}}

      <cyan-toggle label="Toggle error message" :checked="showErrors" @change="showErrors = $event.detail" />
      <cyan-code>{{ showErrors }}</cyan-code>
      <cyan-textfield
        value="Example error-value"
        :label="showErrors ? 'Error here!' : 'A field that could have an error'"
        placeholder="Example placeholder"
        :error="showErrors"></cyan-textfield>
    </section>
    <section>
      <h2>Textarea</h2>
      <cyan-toggle label="collapse" :checked="textAreaCollapse" @change="textAreaCollapse = $event.detail"/> 
      <cyan-code>{{ textAreaCollapse }}</cyan-code>
      <cyan-button @click="inject += 'a'" label="Add more a's" text />
      <cyan-textarea
        :error="showErrors"
        rows="5"
        :collapse="textAreaCollapse"
        :value="inputValue"
        :inject="inject"
        @blur="inputValue = $event.target.value"
        :label="showErrors ? 'Error here!' : 'A field that could have an error'"
        placeholder="Example placeholder"></cyan-textarea>
      {{inputValue}}
    <cyan-code>{{ inject }}</cyan-code>
    </section>
  </article>
</template>