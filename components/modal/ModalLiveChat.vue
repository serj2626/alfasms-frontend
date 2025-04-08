<script lang="ts" setup>
const modalsStore = useModalsStore();
import { HeroIcons } from '~/assets/icons/types/hero-icons';
import BaseInputTextArea from '../base/input/BaseInputTextArea.vue';

function closeChat() {
  const chat = document.querySelector('#modal-live-chat');

  setTimeout(() => {
    chat?.classList.add('modal-live-chat_close');
    modalsStore.closeModal('chat');
  }, 400);
}
</script>
<template>
  <div id="modal-live-chat" class="modal-live-chat">
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
            class="modal-live-chat__wraper-form-input"
            placeholder="Техническая поддержка"
          />
        </div>
        <div class="modal-live-chat__wraper-form-name">
          <BaseInput
            class="modal-live-chat__wraper-form-input"
            placeholder="Имя"
          />
        </div>
        <div class="modal-live-chat__wraper-form-email">
          <BaseInput
            class="modal-live-chat__wraper-form-input"
            placeholder="Почта"
          />
        </div>
        <div class="modal-live-chat__wraper-form-textarea">
          <BaseInputTextArea
            placeholder="Введите ваш вопрос"
          />
        </div>
      </form>
      <div class="modal-live-chat__wraper-bottom">
        <div class="modal-live-chat__wraper-bottom-file">
          <BaseInputFile class="modal-live-chat__wraper-bottom-input" />
        </div>
        <button title="Отправить" class="modal-live-chat__wraper-bottom-send">
          <Icon
            class="modal-live-chat__wraper-bottom-send-icon"
            size="36"
            :name="HeroIcons.SEND"
          />
        </button>
      </div>
      <button class="modal-live-chat__wraper-close">
        <Icon
          size="22"
          :name="HeroIcons.CLOSE"
          class="modal-live-chat__wraper-close-icon"
          @click="closeChat"
        />
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
%border-bottom {
  border-bottom: 1px solid #ffffff75;
}
.modal-live-chat {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 110;
  border-radius: 6px 6px 0 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.24);
  background: linear-gradient(to right top, #15a7c8, #5778cb);
  max-width: 500px;
  width: 100%;
  box-shadow: 0 0 30px rgba(253, 253, 253, 0.416);

  animation: open-chat 0.5s ease-in-out;

  &_close {
    animation: close-chat $default_ease;
  }

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
      display: flex;
      flex-direction: column;
      gap: 25px;

      &:deep(.base-input) {
        width: 100%;
        color: $txt_white;
        justify-content: center;
        &:focus {
          outline: 1px solid transparent;
        }
      }
      &:deep(.base-input__placeholder) {
        width: 100%;
        color: $txt_white;
      }

      &:deep(.base-input__input) {
        &:focus {
          outline: none;
          border: none;
        }
      }

      &-department {
        display: flex;
        flex-direction: column;
        gap: 15px;
        @extend %border-bottom;

        &-label {
          font-size: 10px;
        }
        &-select {
        }
      }
      &-name {
        @extend %border-bottom;
      }
      &-email {
        @extend %border-bottom;
      }
      &-file {
        // @extend %border-bottom;
      }
      &-textarea {
        // @extend %border-bottom;
      }
    }
    &-bottom {
      position: relative;
      padding: 40px 34px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-file{
        position: absolute;
        left: 20px;
        bottom: 20px;
      }

      &-send {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: $teal;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        // box-shadow: 0 0 50px rgba(255, 255, 255, 0.973);
        box-shadow: 5px 5px 20px #fff;
        transition: all $default_ease;

        &:active {
          scale: 0.8;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: $txt_white;
          border-radius: 50%;
          transform: scale(0);
          transition: transform $default_ease;
        }

        &:hover {
          color: $teal;
        }

        &:hover::before {
          transform: scale(1);
        }
      }
    }

    &-close {
      @include btn_close_form;
      color: $txt_white;
    }
  }
}

@keyframes open-chat {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes close-chat {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
