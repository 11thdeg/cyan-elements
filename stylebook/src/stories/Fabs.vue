<script lang="ts" setup>

</script>

<template>
  <article class="Column">
    <h1>Floating Action Buttons</h1>
    <p class="TypeBody2">We follow roughly the material specs for FABs, with some opinionated design choices (like no text on mobile devices).</p>

    <section>
      <h2>Accessibility</h2>
      <p>The buttons change behaviour on the mobile/desktop 600px breakpoint.</p>
      <p>Buttons for in page</p>
      <cyan-fab noun="fox">Text and Icon</cyan-fab>
      <cyan-fab>No Icon</cyan-fab>
      <cyan-fab noun="fox"></cyan-fab>
      <p>Buttons inside a link (for navigation)</p>
      <a href="/">
        <cyan-fab noun="fox">Text and Icon</cyan-fab>
      </a>
      <a href="/">
        <cyan-fab>No Icon</cyan-fab>
      </a>
      <a href="/">
        <cyan-fab noun="fox"></cyan-fab>
      </a>
    </section>



    <section>
      <h4>Primary color scheme</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 12px">
        <cyan-fab>Test</cyan-fab>
        <a href="#"><cyan-fab noun="add"></cyan-fab></a>
        <a href="#"><cyan-fab noun="add" label="create"></cyan-fab></a>
        <cyan-fab label="create"></cyan-fab>
      </div>
    </section>

    <section>
      <h4>Secondary and small</h4>
      <cyan-toolbar>
        <cyan-fab small secondary noun="add"></cyan-fab>
        <cyan-fab small secondary noun="add" label="create"></cyan-fab>
        <cyan-fab small secondary label="create"></cyan-fab>
      </cyan-toolbar>
    </section>

  </article>
</template>