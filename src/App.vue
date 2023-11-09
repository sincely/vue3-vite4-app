<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>
<script setup>
import DevicePixelRatio from '@/utils/devicePixelRatio.js'

onMounted(() => {
  new DevicePixelRatio().init()
})
</script>

<style scoped></style>
