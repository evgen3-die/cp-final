<template>
  <b-container class="my-5">
    <div class="bg-white rounded-lg p-5">
      <h1 class="h3 mb-4">Авторизация</h1>

      <b-form @submit.prevent="onSubmit">
        <b-form-group label="Выберите роль на проекте">
          <b-form-radio-group v-model="role">
            <b-form-radio value="seeker">Соискатель</b-form-radio>
            <b-form-radio value="employer">Работодатель</b-form-radio>
            <b-form-radio value="agency">Гос. учреждение</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group>
          <b-form-input
            v-model="email"
            placeholder="Электронная почта"
            required
            type="email"
          />
        </b-form-group>
        <b-form-group>
          <b-form-input
            v-model="password"
            placeholder="Пароль"
            required
            type="password"
          />
        </b-form-group>
        <button :disabled="isLoading" class="btn btn-primary btn-lg px-4 text-white mt-4">
          Войти
        </button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      role: 'seeker',
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    async onSubmit () {
      this.isLoading = true

      try {
        await this.login({
          role: this.role,
          email: this.email,
          password: this.password
        })

        this.$router.push('/cabinet')
      } catch (e) {
        throw e
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 754px;
}
</style>
