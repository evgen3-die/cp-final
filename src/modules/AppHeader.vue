<template>
  <b-container class="d-flex flex-column flex-md-row align-items-center py-3">
    <router-link class="my-0 mr-md-auto" to="/">
      <img src="@/assets/images/logo.svg" alt="">
    </router-link>
    <router-link class="btn btn-outline-primary d-flex" to="/login">
      <font-awesome-icon
        icon="user"
        class="ml-1 mr-3 align-self-center"
      />
      <div class="divider mr-3"></div>
      Личный кабинет
    </router-link>
    <a
      v-if="isLogin"
      href="#"
      class="text-muted ml-3"
      @click.prevent="onClickLogout"
    >
      Выход
    </a>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    async onClickLogout () {
      await this.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.divider {
  border-left: 1px solid;
}
</style>
