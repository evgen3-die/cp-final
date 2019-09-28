<template>
  <div class="home">
    <b-container class="mb-5">
      <banner />
    </b-container>
    <resume-list />
  </div>
</template>

<script>
import { Banner, ResumeList } from '@/modules'

export default {
  components: { Banner, ResumeList }
}
</script>
