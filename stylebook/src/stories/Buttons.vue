<template>
  <article class="Column">
    <h2>Buttons</h2>

    <h3>Basic</h3>
    <cyan-button noun="spacer"></cyan-button>
    <cyan-button label="Label"></cyan-button>
    <cyan-button label="Icon" noun="discussion"></cyan-button>
    <cyan-button label="Not Working yet" noun="facebook" working="false"></cyan-button>
    <cyan-button label="Working" noun="monsters" working="true"></cyan-button>
    <cyan-button label="Disabled" noun="fox" disabled="true"></cyan-button>

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