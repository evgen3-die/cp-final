<template>
  <b-container class="my-5">
    {{ pageTitle }}
  </b-container>
</template>

<script>
import { meta } from '@/mixins'

export default {
  mixins: [
    meta('Кабинет')
  ]
}
</script>
