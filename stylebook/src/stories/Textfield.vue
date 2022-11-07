<script lang="ts" setup>
import { ref } from 'vue';

const fielda = ref('aa')
const disabled = ref(false)
const error = ref(false)
</script>

<template>
  <article class="Column">
    <h2>Textfield</h2>
    <p class="TypeBody2 lowEmphasis">Overrides default input type text with custom styling and field events for mobile keyboard</p>
    <cyan-toolbar>
      <cyan-toggle :checked="disabled" @change="disabled = $event.target.checked" label="Disabled"/>
      <cyan-toggle :checked="error" @change="error = $event.target.checked" label="Error"/>
    </cyan-toolbar>
    <cyan-textfield :value="fielda" label="Label" @change="fielda = $event.target.value" :disabled="disabled" 
      :error="error" />
    <p>{{ fielda }}</p>
    <section>
      <h3>In a toolbar</h3>
      <cyan-toolbar class="rise-a">
        <cyan-icon noun="mekanismi" />
        <cyan-textfield :value="fielda" label="Label" @change="fielda = $event.target.value" :disabled="disabled" 
          :error="error" style="flex-grow: 1; flex-shrink: 1;"/>
        <cyan-button style="flex-shrink: 0;" label="Clear" @click="fielda = ''"/> 
      </cyan-toolbar>
    </section>
    <section class="card rise-b" style="margin-top: var(--cyan-row-gap)">
      <h3>In a Card</h3>
      <cyan-textfield :value="fielda" label="Label" @change="fielda = $event.target.value" :disabled="disabled" 
      :error="error" />
    </section>
  </article>
</template>