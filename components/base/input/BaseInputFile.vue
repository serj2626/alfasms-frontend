<script setup lang="ts">
import { HeroIcons } from '~/assets/icons/types/hero-icons';

interface IInputFileComponentProps {
  isMultiple?: boolean;
}

defineProps<IInputFileComponentProps>()

const handleFileChange = () => {
  
}
</script>
<template>
  <label class="input-file">
    <input 
      :multiple="isMultiple"
      type="file"
      class="input-file__main"
      aria-label="Вставить изображение" 
    />
    <Icon class="input-file__icon" :name="HeroIcons.PHOTO" size="26" />
    <div class="input-file__tooltip">
      <div class="input-file__tooltip-cursor" />
      Добавить фото или видео
    </div>
  </label>
</template>
<style lang="scss" scoped>
.input-file {
  position: relative;
  display: block;
  width: 54px;
  height: 54px;
  padding: 12px 14px 12px 13px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color $fast_ease;

  &__tooltip {
    position: absolute;
    z-index: 100;
    color: $txt_white;
    transition: opacity $fast_ease;
    padding: 10px 8px;
    border-radius: 5px;
    font-size: 12px;
    opacity: 0;
    top: -20px;
    width: 147px;
    text-wrap: nowrap;
    
    &-cursor {
      position: absolute;

      width: 11px;
      height: 11px;
      rotate: 45deg;
      top: 30px;
      border-radius: 2px;
    }
  }

  &:hover {


    .input-file__tooltip  {
      opacity: 1;
    }
  }

  &__main {
    cursor: pointer;
    display: none;
  }

  &__icon {
    width: 27px;
    height: 30px;
  }
}
</style>
