<script setup lang="ts">
import { ref } from 'vue'

interface Asset {
  key: string;
  name: string;
  type: string;
  url: string;
}

const assets:Asset[] = []

assets.push({
  key: '1',
  name: 'Asset 1',
  type: 'image',
  url: 'https://firebasestorage.googleapis.com/v0/b/skaldbase.appspot.com/o/assetuploads%2FYN8dQz3H8OMsb0L4jImAlROPQpo1%2FPXL_20211101_195631737.NIGHT_exported_1300~2.jpg?alt=media&token=27bb6463-a934-4ecf-a756-477047516d5e'
})

assets.push({
  key: '2',
  name: 'Asset 2',
  type: 'image',
  url: 'https://firebasestorage.googleapis.com/v0/b/skaldbase.appspot.com/o/assetuploads%2FYN8dQz3H8OMsb0L4jImAlROPQpo1%2FremoversArtboard%201image.png?alt=media&token=3075d787-7dd0-4c08-8505-70a0c3f3183a'
})

const selected = ref(0)

function selectAsset (e: CustomEvent) {
  console.log(e.detail)
  selected.value = assets.findIndex(asset => asset.key === e.detail.key)
}

</script>

<template>
  <article class="Column">
    <h3>AssetSelect</h3>
    <cyan-asset-select @change="selectAsset($event)">
      <cyan-asset-option
        v-for="asset in assets"
        :key="asset.key"
        :url="asset.url"
        :name="asset.name"
        :asset="asset.key"
        round
      />
    </cyan-asset-select>
    <img :src="assets[selected].url" style="max-width;: 200px; max-height: 200px" />
  </article>
</template>