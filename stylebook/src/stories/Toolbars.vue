<script lang="ts" setup>
import CodeSpan from '../components/CodeSpan.vue';

</script>

<template>
    <article class="Column double-cut">
      <h2>Toolbars</h2>
      <p>We provide a flex-box wrapper <cyan-code>{{ '<cyan-toolbar>' }}</cyan-code>, 
        which works well with the spacer element <cyan-code>{{ '<cyan-spacer>' }}</cyan-code></p>
      <p>Most cyan elements should have a styling to fit inside a <CodeSpan code="<cyan-toolbar>"/> neatly.</p>
      <section>
        <h3>Basic example</h3>
        <cyan-toolbar>
            <cyan-icon noun="adventurer" small/>
            <cyan-spacer />
            <cyan-button label="button"/>
        </cyan-toolbar>
      </section>
      <section>
        <h3>Complex examples</h3>
        <cyan-toolbar>
          <h1>A very long H1, which should be cut with three ellipsis when it no longer fits the toolbar.</h1>
          <cyan-spacer />
          <cyan-icon noun="adventurer"/>
        </cyan-toolbar>
        <cyan-toolbar style="background-color: var(--chroma-secondary-i);">
          <h2>A very long H2, which should be cut with three ellipsis when it no longer fits the toolbar.</h2>
          <cyan-spacer />
          <cyan-icon noun="adventurer"/>
        </cyan-toolbar>
        <cyan-toolbar style="background-color: var(--chroma-secondary-h);">
          <h3>A very long H3, which should be cut with three ellipsis when it no longer fits the toolbar.</h3>
          <cyan-spacer />
          <cyan-icon noun="adventurer" small/>
        </cyan-toolbar>
        <cyan-toolbar style="background-color: var(--chroma-secondary-g);">
          <h4>A very long H4, which should be cut with three ellipsis when it no longer fits the toolbar.</h4>
          <cyan-spacer />
          <cyan-icon noun="adventurer" small/>
        </cyan-toolbar>
        <br>
        <div class="card rise-b">
          <cyan-toolbar>
            <cyan-icon noun="adventurer" small/>
            <h3>In a Card?</h3>
            <cyan-spacer />
            <cyan-lightmode-toggle />
          </cyan-toolbar>
          <p>With some text?</p>
        </div>
      </section>
      <section>
        <h3>With some tags?</h3>
        <cyan-toolbar class="rise-b" style="padding: 0 4px; border-radius: 28px;">
          <cyan-tag label="tag" />
          <cyan-tag label="tag" />
          <cyan-tag label="tag" />
          <cyan-spacer />
          <cyan-button label="button"/>
        </cyan-toolbar>
      </section>
    </article>
</template>