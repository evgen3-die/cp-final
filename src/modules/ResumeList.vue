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
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <small class="text-muted">
                  {{ resume.city }}
                </small>
                <small class="font-weight-bold d-flex align-items-center">
                  <font-awesome-icon
                    icon="star"
                    class="mr-1 text-warning"
                  />
                  {{ resume.rate }}%
                </small>
              </div>
              <div class="d-flex justify-content-center mt-3">
                <img
                  class="rounded-circle photo"
                  src="@/assets/images/user-placeholder.jpg"
                  alt=""
                >
              </div>
              <div class="text-center font-weight-bold mt-3">
                <div class="text-muted">
                  {{ resume.name }}
                </div>
                <div class="mt-2 text-warning">
                  {{ resume.specialization }}
                </div>
              </div>
            </div>
            <router-link class="stretched-link" :to="`/resume/${resume.id}`" />
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
const RESUME = {
  city: 'Санкт-Петербург',
  rate: 98,
  name: 'Новикова Ольга Николаевна',
  specialization: 'Ведущий разработчик',
  id: '2'
}

export default {
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

<style lang="scss" scoped>
.photo {
  border: 2px solid $primary;
  width: 120px;
  height: 120px;
}
</style>
