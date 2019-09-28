<template>
  <b-container class="my-5">
    <h1>{{ pageTitle }}</h1>
    <p>
      <strong>Страница не найдена</strong>
    </p>
  </b-container>
</template>

<script>
import { meta } from '@/mixins'

export default {
  mixins: [
    meta('404')
  ]
}
</script>
