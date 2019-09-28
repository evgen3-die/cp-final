<template>
  <div class="banner py-5 position-relative">
    <div class="content">
      <h1>
        Единая база выпускников<br>
        и работников
      </h1>
      <p>
        Внеси свое резюме в единую базу специалистов Российской Федерации
      </p>
      <p class="mt-5">
        <router-link class="btn btn-primary btn-lg px-4 text-white" to="/cabinet" role="button">
          Добавить свое резюме
        </router-link>
      </p>
    </div>
    <img class="image" src="@/assets/images/banner.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
.content {
  max-width: 600px;
}

.image {
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
  user-select: none;
}
</style>
