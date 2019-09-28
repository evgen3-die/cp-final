<template>
  <b-container class="my-5">
    <div class="bg-white rounded-lg p-5">
      <h1 class="h3 mb-4">{{ pageTitle }}</h1>

      <b-form @submit.prevent="onSubmit">
        <b-form-group class="mb-4" label="Выберите роль на проекте:">
          <b-form-radio-group v-model="role">
            <b-form-radio value="seeker">Соискатель</b-form-radio>
            <b-form-radio value="employer">Работодатель</b-form-radio>
            <b-form-radio value="agency">Гос. учреждение</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group label="Электронная почта">
          <b-form-input
            v-model="email"
            placeholder="Ваша электронная почта"
            required
            type="email"
          />
        </b-form-group>
        <b-form-group label="Пароль">
          <b-form-input
            v-model="password"
            placeholder="Ваш пароль"
            required
            type="password"
          />
        </b-form-group>
        <div class="d-flex justify-content-center">
          <button :disabled="isLoading" class="btn btn-primary btn-lg px-4 text-white mt-4 mb-0">
            Войти
          </button>
        </div>
        <b-alert :show="isError" class="mt-4 mb-0" variant="danger">
          Неверные электронная почта или пароль
        </b-alert>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
import { meta } from '@/mixins'

export default {
  mixins: [
    meta('Авторизация')
  ],
  data () {
    return {
      role: 'seeker',
      email: '',
      password: '',
      isLoading: false,
      isError: false
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    async onSubmit () {
      this.isLoading = true
      this.isError = false

      try {
        await this.login({
          role: this.role,
          email: this.email,
          password: this.password
        })

        this.$router.push('/cabinet')
      } catch (e) {
        this.isError = true
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
  max-width: 560px;
}

.btn {
  width: 100%;
  max-width: 300px;
}
</style>
