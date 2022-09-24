<script lang="ts" setup>
import { ref } from 'vue'

const styleTest = ref('TypeBody1')
const typeStyles = [
  { label: "TypeHeadline3", value: "TypeHeadline3"},
  { label: "TypeHeadline4", value: "TypeHeadline4"},
  { label: "TypeHeadline5", value: "TypeHeadline5"},
  { label: "TypeHeadline6", value: "TypeHeadline6"},
  { label: "TypeBody1", value: "TypeBody1"},
  { label: "TypeBody2", value: "TypeBody2"},
  { label: "TypeButton", value: "TypeButton"},
  { label: "TypeCaption", value: "TypeCaption"},
]
</script>

<template>
  <article class="Column double-cut">
    <h1>Typography</h1>
    <section>
      <h3>Tester</h3>
      <cyan-select :value="styleTest" :options="typeStyles" @change="styleTest = $event.target.value"/>
      <p :class="styleTest">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
    </section>


    <p class="lowEmphasis">
      This text has a <cyan-code>lowEmphasis</cyan-code> class active.
    </p>
    <p class="highEmphasis">
      This text has a <cyan-code>highEmphasis</cyan-code> class active.
    </p>
    <p class="TypeBody2">
      This text has a <cyan-code>TypeBody2</cyan-code> class active.
    </p>
    <p>Do note that all <cyan-colde>.Column</cyan-colde>s have an atomic css 
      <cyan-code>.dontBreakOut</cyan-code> applied to them. Effectively forcing a word-break
    on long links like this one: <br>
    <a href="https://firebasestorage.googleapis.com/v0/b/skaldbase.appspot.com/o/assetuploads%2FYN8dQz3H8OMsb0L4jImAlROPQpo1%2FPXL_20211101_195631737.NIGHT_exported_1300~2.jpg?alt=media&token=27bb6463-a934-4ecf-a756-477047516d5e">https://firebasestorage.googleapis.com/v0/b/skaldbase.appspot.com/o/assetuploads%2FYN8dQz3H8OMsb0L4jImAlROPQpo1%2FPXL_20211101_195631737.NIGHT_exported_1300~2.jpg?alt=media&token=27bb6463-a934-4ecf-a756-477047516d5e</a></p>
  </article>
</template>