<script lang="ts" setup>

</script>

<template>
  <article class="Column">
    <h1>Floating Action Buttons</h1>
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