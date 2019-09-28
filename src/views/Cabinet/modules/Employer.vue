<template>
  <b-container class="my-5">
    <div class="row">
      <div class="col-md-8">
        <h1>{{ pageTitle }}</h1>
      </div>
      <div class="col-md-4">
        <profile-card
          :rate="10"
          name="Mail.ru Group"
        />
      </div>
    </div>
  </b-container>
</template>

<script>
import { meta } from '@/mixins'
import { ProfileCard } from '@/components'

export default {
  components: {
    ProfileCard
  },
  mixins: [
    meta('Кабинет работодателя')
  ]
}
</script>
