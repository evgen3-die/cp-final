<template>
  <b-container class="my-5">
    {{ pageTitle }} {{ $route.params.id }}
  </b-container>
</template>

<script>
import { meta } from '@/mixins'

export default {
  mixins: [
    meta('Резюме')
  ]
}
</script>
