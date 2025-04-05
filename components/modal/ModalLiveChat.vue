<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";
</script>
<template>
  <div class="modal-live-chat">
    <div class="modal-live-chat__wraper">
      <div class="modal-live-chat__wraper-top">
        <p class="modal-live-chat__wraper-top-title">
          Мы готовы ответить на ваши вопросы
        </p>
      </div>
      <form action="" class="modal-live-chat__wraper-form">
        <div class="modal-live-chat__wraper-form-department">
          <label for="" class="modal-live-chat__wraper-form-department-label">
            Отдел
          </label>
          <BaseInput
            placeholder="Техническая поддержка"
            class="modal-live-chat__wraper-form-department-select"
          />
        </div>
        <div class="modal-live-chat__wraper-form-name">
          <BaseInput
            placeholder="Имя"
            class="modal-live-chat__wraper-form-name-input"
          />
        </div>
        <div class="modal-live-chat__wraper-form-email">
          <BaseInput
            placeholder="Поддержка"
            class="modal-live-chat__wraper-form-email-input"
          />
        </div>
      </form>
      <button class="modal-live-chat__wraper-close">
        <Icon
          size="22"
          :name="HeroIcons.CLOSE"
          class="modal-live-chat__wraper-close-icon"
        />
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
%border-bottom{
  border-bottom: 1px solid #ffffff75;
}
.modal-live-chat {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 200;
  border-radius: 6px 6px 0 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.24);
  background: linear-gradient(to right top, #15a7c8, #5778cb);
  max-width: 500px;
  width: 100%;
  height: 600px;

  animation: transform-chat 0.5s ease-in-out;

  &__wraper {
    position: relative;
    color: $txt_white;
    display: flex;
    flex-direction: column;

    &-top {
      padding-block: 20px;
      @extend %border-bottom;
      &-title {
        padding-inline: 34px;
      }
    }
    &-form {
      padding: 20px 34px;

      &-department {
        display: flex;
        flex-direction: column;
        @extend %border-bottom;
        margin-bottom: 20px;

        &-label {
          font-size: 10px;
        }
        &-select {
        }
      }
      &-name{
        @extend %border-bottom;
        margin-bottom: 20px;
      }
      &-email{
        @extend %border-bottom;
        margin-bottom: 20px;
      }
    }

    &-close {
      @include btn_close_form;
    }
  }
}

@keyframes transform-chat {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
  
}
</style>
