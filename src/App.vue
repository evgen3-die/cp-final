<template>
  <div class="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import { AppHeader } from '@/modules'

const SITE_NAME = 'Моя цифровая карьера'

export default {
  components: {
    AppHeader
  },
  metaInfo () {
    return {
      titleTemplate: chunk => [chunk, SITE_NAME]
        .filter(partial => partial)
        .join(' - ')
    }
  }
}
</script>

<style lang="scss">
body {}
</style>
