<template>
  <div class="resume-list bg-white py-5">
    <b-container>
      <h2>
        Рейтинг специалистов
      </h2>
      <div class="row mt-4">
        <div
          v-for="(resume, i) in resumeList"
          :key="i"
          class="col-md-4 mb-4"
        >
          <profile-card
            :city="resume.city"
            :rate="resume.rate"
            :name="resume.name"
            :specialization="resume.specialization"
            :to="`/resume/${resume.id}`"
          />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { ProfileCard } from '@/components'

const RESUME = {
  city: 'Санкт-Петербург',
  rate: 98,
  name: 'Новикова Ольга Николаевна',
  specialization: 'Ведущий разработчик',
  id: '2'
}

export default {
  components: {
    ProfileCard
  },
  data () {
    return {
      resumeList: [
        RESUME,
        RESUME,
        RESUME,
        RESUME,
        RESUME,
        RESUME,
        RESUME,
        RESUME
      ]
    }
  }
}
</script>
