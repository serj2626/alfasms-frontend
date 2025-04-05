<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";

const emit = defineEmits(["close"]);

function closeFormLogin() {
  const form = document.querySelector(".base-form-login");
  form?.classList.add("base-form-login_close");
  setTimeout(() => {
    emit("close");
  }, 100);
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    closeFormLogin();
  }
}
onMounted(() => {
  const form = document.querySelector(".base-form-login");
  form?.classList.add("base-form-login_open");
  document.addEventListener("keydown", handleKeydown);
});
onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeydown);

});
</script>
<template>
  <div class="base-form-login">
    <div class="base-form-login__wraper">
      <div class="base-form-login__wraper-top">
        <form class="base-form-login__wraper-top-form">
          <BaseInputIcon placeholder="Email" :icon="HeroIcons.MAIL" />
          <BaseInputIcon placeholder="******" :icon="HeroIcons.PASSWORD" />
          <BaseButton
            class="base-form-login__wraper-top-form-btn"
            size="md"
            color="red"
            label="Войти"
          />
          <BaseInputCheckbox label="Запомнить меня" />
        </form>
      </div>
      <p class="base-form-login__wraper-or">
        <span class="base-form-login__wraper-or-text">или</span>
      </p>
      <div class="base-form-login__wraper-bottom">
        <BaseButton
          class="base-form-login__wraper-bottom-btn"
          size="md"
          color="blue"
          label="Войти через Google"
        />
        <BaseButton
          class="base-form-login__wraper-bottom-btn"
          size="md"
          color="white"
          label="Войти через Facebook"
        />
      </div>
      <button class="base-form-login__close" @click="closeFormLogin">
        <Icon
          class="base-form-login__close-icon"
          :name="HeroIcons.CLOSE"
          size="26"
        />
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.base-form-login {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.158);
  min-width: 330px;
  background-color: $txt_white;

  // animation: show-login $default_cubic;

  // &_close {
  //   animation: close-login 0.5s ease-in-out;
  // }

  &__wraper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 25px 25px;
    color: $txt;

    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 20px;
      height: 20px;
      background-color: $txt_white;
      box-shadow: 0 0 20px rgb(240, 241, 241);
    }

    &-top {
      &-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        &-btn {
          width: 100%;
          font-weight: 600;
          line-height: 125%;
        }
      }
    }
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
    &-bottom {
      display: flex;
      flex-direction: column;
      gap: 8px;
      &-btn {
        width: 100%;
      }
    }
  }
}

.base-form-login__close {
  @include btn_close_form;
}

@keyframes show-login {
  from {
    scale: 0.5;
    opacity: 0.8;
  }
  to {
    scale: 1;
    opacity: 1;
  }
}

@keyframes close-login {
  0% {
    transform: translate(-50%, 0);
    box-shadow: 0 0 20px rgb(240, 241, 241);
    scale: 1;
  }

  100% {
    box-shadow: 20px 15px 151px 125px rgba(255, 255, 255, 0.294);
    scale: 0.1;
    transform: translate(-100%);
  }
}
</style>
