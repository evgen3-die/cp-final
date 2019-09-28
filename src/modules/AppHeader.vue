<template>
  <b-container class="d-flex flex-column flex-md-row align-items-center py-3">
    <router-link class="my-0 mr-md-auto text-body logo" to="/">
      Моя цифровая карьера
    </router-link>
    <router-link class="btn btn-outline-primary d-flex" to="/login">
      <font-awesome-icon
        icon="user"
        class="ml-1 mr-3 align-self-center"
      />
      <div class="divider mr-3"></div>
      Личный кабинет
    </router-link>
  </b-container>
</template>

<style lang="scss" scoped>
.logo {
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  max-width: 140px;
}

.divider {
  border-left: 1px solid;
}
</style>
