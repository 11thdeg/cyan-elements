<script lang="ts" setup>
import { ref } from 'vue';

const riseOptions = ref([
  { label: '-', value: '' },
  { label: 'rise-a', value: 'rise-a' },
  { label: 'rise-b', value: 'rise-b' },
  { label: 'rise-c', value: 'rise-c' },
  { label: 'rise-d', value: 'rise-d'}
])
const rise = ref('')
const text = ref(false)
const secondary = ref(false)
</script>

<template>
  <article class="Column">
    <h2>Button</h2>
    <p><cyan-code>{{ '<cyan-button>' }}</cyan-code> and it's many variants.</p>

    <cyan-toolbar>
      <cyan-select label="Rise" :options="riseOptions" :value="rise" @change="rise = $event.target.value"/>
      <cyan-toggle label="Text" :value="text" @change="text = $event.detail"/>
      <cyan-toggle label="Secondary" :value="secondary" @change="secondary = $event.detail"/>
    </cyan-toolbar>
    <section class="card" :class="rise">
      <h3>In a Card</h3>
      <cyan-button :text="text" :secondary="secondary" label="A plain button"></cyan-button>
      <cyan-button :text="text" noun="mekanismi" :secondary="secondary" label="A Button with too long text to fit into a line. This should be cut with an ellipsis"></cyan-button>
    </section>
    <cyan-toolbar :class="rise" style="margin: 12px 0; padding: 0 4px;">
      <cyan-toolbar-heading :level="4">In a Toolbar</cyan-toolbar-heading>
      <cyan-button :text="text" :secondary="secondary" noun="tools"></cyan-button>
      <cyan-button :text="text" :secondary="secondary" label="here I am"></cyan-button>
    </cyan-toolbar>

    <h3>Basic</h3>
    <cyan-button noun="spacer"></cyan-button>
    <cyan-button label="Label"></cyan-button>
    <cyan-button label="Icon" noun="discussion"></cyan-button>
    <cyan-button label="Not Working yet" noun="facebook" working="false"></cyan-button>
    <cyan-button label="Working" noun="monsters" working="true"></cyan-button>
    <cyan-button label="Disabled" noun="fox" disabled="true"></cyan-button>
    <cyan-button label="A hilariously long label, should not break out at any point. And the button should look good even if the label is breaking out?"
    noun="arrow-up"></cyan-button>

    <section>
      <h3>Secondary</h3>
      <cyan-button secondary label="Label"></cyan-button>
      <cyan-button secondary label="Icon" noun="discussion"></cyan-button>
      <cyan-button secondary label="Not Working yet" noun="facebook" working="false"></cyan-button>
      <cyan-button secondary label="Working" noun="monsters" working="true"></cyan-button>
      <cyan-button secondary label="Disabled" noun="google" disabled="true"></cyan-button>
    </section>

    <h3>Text</h3>
      <cyan-button text noun="edit"></cyan-button>
    <cyan-button text label="Label"></cyan-button>
    <cyan-button text label="Icon" noun="discussion"></cyan-button>
    <cyan-button text label="Not Working yet" noun="stylebook" working="false"></cyan-button>
    <cyan-button text label="Working" noun="monsters" working="true"></cyan-button>
    <cyan-button text label="Disabled" noun="discussion" disabled="true"></cyan-button>

    <section class="chroma-box-a card">
      <h3>Forced dark</h3>
      <cyan-button dark label="Label"></cyan-button>
      <cyan-button dark label="Icon" noun="discussion"></cyan-button>
      <cyan-button dark text label="Text" noun="stylebook"></cyan-button>
    </section>

    <section>
      <h3>Tags</h3>
      <cyan-tag label="Label"></cyan-tag>
      <cyan-tag label="Icon" noun="stylebook"></cyan-tag>
      <cyan-tag label="Disabled" noun="delete" disabled="true"></cyan-tag>
      <cyan-tag label="Action" action="delete"></cyan-tag> 
      <cyan-tag label="Action" action="add" noun="avatar"></cyan-tag>
      <cyan-tag label="Notification" notification noun="discussion" action="add"></cyan-tag>
      <cyan-tag label="aaa" secondary></cyan-tag>
    </section>

    <section>
      <h3>Love button</h3>
      <cyan-love-button></cyan-love-button>
      <cyan-love-button on="true"></cyan-love-button>
      <cyan-love-button on="true" count="4"></cyan-love-button>
      <cyan-love-button disabled count="4"></cyan-love-button>
    </section>
  </article>
</template>