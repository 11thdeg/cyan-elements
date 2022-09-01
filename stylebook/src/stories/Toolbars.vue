<script lang="ts" setup>

</script>

<template>
    <article class="Column">
      <h2>Toolbars</h2>
      <p>We provide the flex-box wrapper <cyan-code>{{ '<cyan-toolbar>' }}</cyan-code>, 
        which works well with the spacer element <cyan-code>{{ '<cyan-spacer>'}}</cyan-code></p>
      <section>
        <h3>Basic example</h3>
        <cyan-toolbar>
            <cyan-icon noun="adventurer" small/>
            <cyan-spacer />
            <cyan-button label="button"/>
        </cyan-toolbar>
      </section>
    </article>
</template>