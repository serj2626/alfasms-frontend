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
            placeholder="Иван Иванов"
          />
        </div>
        <div class="base-form-register__wraper-form-block">
          <label class="base-form-register__wraper-form-block-label" for="email"
            >Почта</label
          >
          <BaseInput
            class="base-form-register__wraper-form-block-input"
            placeholder="example@ex.com"
          />
        </div>
        <div class="base-form-register__wraper-form-block">
          <label class="base-form-register__wraper-form-block-label" for="phone"
            >Телефон</label
          >
          <BaseInput
            class="base-form-register__wraper-form-block-input"
            placeholder="8-999-999-99-99"
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
            placeholder="Не менее 8 символов"
          />
        </div>
        <BaseButton
          class="base-form-register__wraper-form-btn"
          size="lg"
          color="red"
          label="Регистрация"
        />
      </form>
      <div class="base-form-register__wraper-bottom">
        <p class="base-form-register__wraper-bottom-or">
          <span class="base-form-register__wraper-bottom-or-text">или</span>
        </p>
        <div class="base-form-register__wraper-bottom-actions">
          <BaseButton
            class="base-form-register__wraper-bottom-actions-btn"
            size="md"
            color="blue"
            label="Войти через Google"
          />
          <BaseButton
            class="base-form-register__wraper-bottom-actions-btn"
            size="md"
            color="white"
            label="Войти через Facebook"
          />
        </div>
        <p class="base-form-register__wraper-bottom-info">
          Используя AlfaSMS, вы принимаете наши
          <NuxtLink class="base-form-register__wraper-bottom-info-link"
            >Условия предоставления услуг</NuxtLink
          >
          и соглашаетесь с
          <NuxtLink to="/policy" class="base-form-register__wraper-bottom-info-link"
            >Политикой конфиденциальности</NuxtLink
          >
        </p>
      </div>
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
    &-bottom {
      &-or {
        margin-block: 25px;
        position: relative;
        width: 100%;
        border-bottom: 1px solid #ddd;
        line-height: 0;
        color: #5c6a70;

        &-text {
          position: absolute;
          top: 50%;
          left: 50%;
          font-size: 15px;
          transform: translate(-50%, -50%);
          background-color: $txt_white;
          padding: 0 10px;
        }
      }
      &-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 20px;

        &-btn {
          width: 100%;
        }
      }
      &-info {
        color: #5c6a70;
        font-size: 14px;
        text-align: center;
        padding-inline: 50px;

        &-link {
          color: $teal;
          cursor: pointer;
        }
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
