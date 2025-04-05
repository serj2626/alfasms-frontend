<script lang="ts" setup>
const modalsStore = useModalsStore();
import { HeroIcons } from "~/assets/icons/types/hero-icons";

function closeChat(){
  const chat = document.querySelector('#modal-live-chat');

  setTimeout(() => {
      chat?.classList.add('modal-live-chat_close')
    modalsStore.closeModal('chat')
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
          <input
            class="modal-live-chat__wraper-form-input"
            placeholder="Техническая поддержка"
            type="text"
          />
        </div>
        <div class="modal-live-chat__wraper-form-name">
          <input
            class="modal-live-chat__wraper-form-input"
            placeholder="Имя"
            type="text"
          />
        </div>
        <div class="modal-live-chat__wraper-form-email">
          <input
            class="modal-live-chat__wraper-form-input"
            placeholder="Почта"
            type="text"
          />
        </div>
      </form>
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
  z-index: 200;
  border-radius: 6px 6px 0 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.24);
  background: linear-gradient(to right top, #15a7c8, #5778cb);
  max-width: 500px;
  width: 100%;
  height: 600px;
  box-shadow: 0 0 30px rgba(253, 253, 253, 0.416);

  animation: open-chat 0.5s ease-in-out;

  &_close{
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
      gap: 20px;

      &-input{
        width: 100%;
        // padding: 10px 0;
        color: $txt_white;
        background-color: transparent;
        border: none;
        outline: none;

        &:placeholder{
          color: $txt_white !important;
        }

      }

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
      &-name {
        @extend %border-bottom;
        margin-bottom: 20px;
      }
      &-email {
        @extend %border-bottom;
        margin-bottom: 20px;
      }
    }

    &-close {
      @include btn_close_form;
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
