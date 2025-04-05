<script lang="ts" setup>
const modalsStore = useModalsStore();
import { HeroIcons } from "~/assets/icons/types/hero-icons";
</script>
<template>
  <div class="base-form-register">
    <div class="base-form-register__wraper">
      <div class="base-form-register__wraper-top">
        <h3 class="base-form-register__wraper-top-title">
          Начните работу с AlfaSMS
        </h3>
        <p class="base-form-register__wraper-top-text">
          Создайте бесплатный аккаунт. Без банковской карты.
        </p>
      </div>
      <form action="" class="base-form-register__wraper-form">
        <div class="base-form-register__wraper-form-block">
          <label class="base-form-register__wraper-form-block-label" for="name"
            >Имя</label
          >
          <BaseInput
            class="base-form-register__wraper-form-block-input"
            placeholder="Имя"
          />
        </div>
        <div class="base-form-register__wraper-form-block">
          <label class="base-form-register__wraper-form-block-label" for="email"
            >Почта</label
          >
          <BaseInput
            class="base-form-register__wraper-form-block-input"
            placeholder="Почта"
          />
        </div>
        <div class="base-form-register__wraper-form-block">
          <label class="base-form-register__wraper-form-block-label" for="phone"
            >Телефон</label
          >
          <BaseInput
            class="base-form-register__wraper-form-block-input"
            placeholder="Телефон"
          />
        </div>
        <div class="base-form-register__wraper-form-block">
          <label
            class="base-form-register__wraper-form-block-label"
            for="password"
            >Пароль</label
          >
          <BaseInput
            class="base-form-register__wraper-form-block-input"
            placeholder="Пароль"
          />
        </div>
        <BaseButton
          class="base-form-register__wraper-form-btn"
          size="lg"
          color="red"
          label="Регистрация"
        />
      </form>
      <div class="base-form-register__wraper-bottom"></div>
      <button class="base-form-register__wraper-close">
        <Icon
          class="base-form-register__wraper-close-icon"
          size="24"
          :name="HeroIcons.CLOSE"
          @click="modalsStore.closeModal('register')"
        />
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.base-form-register {
  margin: 75px auto;

  background-color: $txt_white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  max-width: 600px;
  width: 100%;

  animation: show-register $default_ease;

  &__wraper {
    position: relative;
    padding: 50px;
    display: flex;
    flex-direction: column;

    &-close {
      @include btn_close_form;
    }

    &-top {
      margin-bottom: 16px;

      &-title {
        font-size: 28px;
        margin-bottom: 4px;
        font-weight: 700;
      }

      &-text {
        font-size: 14px;
        line-height: 142%;
        color: #5c6a70;
      }
    }
    &-form {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &-block {
        display: flex;
        flex-direction: column;
        gap: 6px;

        &-label {
          font-size: 15px;
          font-weight: 500;
          line-height: 142%;
          color: $txt;
        }
        &-input {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 9px 19px 9px 11px;
          font-size: 15px;
          border: 1px solid #ced4da;
          line-height: 1.5;
          color: #212529;

          &::placeholder {
            color: #ced4da;
            padding: 0;
          }
        }
      }
      &-btn {
        width: 100%;
        padding: 10px 16px;
      }
    }
  }
}

@keyframes show-register {
  0% {
    opacity: 0.5;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
