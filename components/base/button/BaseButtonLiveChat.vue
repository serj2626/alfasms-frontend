<script lang="ts" setup>
const modalsStore = useModalsStore();
import { HeroIcons } from "~/assets/icons/types/hero-icons";
</script>
<template>
  <div class="base-button-live-chat" @click="modalsStore.openModal('chat')">
    <div class="base-button-live-chat__wraper">
      <button class="base-button-live-chat__wraper-button">
        <Icon
          size="26"
          :name="HeroIcons.CHAT"
          class="base-button-live-chat__wraper-button-icon"
        />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-button-live-chat {
  position: fixed;
  right: 10px;
  bottom: 30px;
  -ms-transform-origin: 100% 100%;
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
  z-index: 100;

  &__wraper {
    position: relative;
    &-button {
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 16px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1),
        0 4px 20px rgba(48, 174, 201, 0.34);
      background-color: $btn_teal;

      width: 50px;
      height: 50px;

      &-icon {
        color: $txt_white;
      }
    }
  }
}

.base-button-live-chat :hover {
  .base-button-live-chat__wraper-button {
    background-color: #339aae;
    transition: background-color $default_cubic;
  }
}
</style>
