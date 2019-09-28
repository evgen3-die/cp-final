<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex">
        <small
          v-if="city"
          class="text-muted"
        >
          {{ city }}
        </small>
        <small class="font-weight-bold d-flex align-items-center ml-auto">
          <font-awesome-icon
            icon="star"
            class="mr-1 text-warning"
          />
          {{ rate }}%
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
          {{ name }}
        </div>
        <div v-if="specialization" class="mt-2 text-warning">
          {{ specialization }}
        </div>
      </div>
    </div>
    <router-link v-if="to" class="stretched-link" :to="to" />
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      default: ''
    },
    rate: {
      type: Number,
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    specialization: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
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
