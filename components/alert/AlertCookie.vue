<script lang="ts" setup>
const showAlert = ref(true);
function hideAlert() {
  localStorage.setItem("cookieAccepted", "true");
  if (localStorage.getItem("cookieAccepted") === "true") {
    showAlert.value = false;
  }
}
</script>
<template>
  <div v-if="showAlert" class="alert-cookie container">
    <p class="alert-cookie__text">
      AlfaSMS использует файлы cookie для улучшения взаимодействия с сайтом.
      Продолжая просмотр страниц сайта, вы соглашаетесь с использованием файлов
      cookie.
      <NuxtLink to="/" class="alert-cookie__text-link">Подробнее</NuxtLink>
    </p>
    <BaseButton
      class="alert-cookie__btn"
      size="md"
      color="green"
      label="Понятно"
      @click="hideAlert"
    />
  </div>
</template>
<style scoped lang="scss">
.alert-cookie {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  height: auto;

  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  gap: 20px;

  padding: 15px;
  border-radius: 4px;
  background-color: $txt_white;
  box-shadow: 0 16px 48px 0 rgba(0, 0, 0, 0.46);

  &__text {
    color: $txt;
  }

  &__text-link {
    color: $teal;
  }

  &__btn {
    padding-inline: 60px;
  }
}
</style>
