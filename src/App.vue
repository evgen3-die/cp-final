<template>
  <div class="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import { AppHeader } from '@/modules'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
body {}
</style>
