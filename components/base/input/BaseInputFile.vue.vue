<script setup lang="ts">
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
    <NuxtIcon class="input-file__icon" name="file" filled/>
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
  background-color: #ffffff;

  &__tooltip {
    position: absolute;
    z-index: $z-index-after-content;
    background-color: $adult_bgr;
    transition: opacity $fast_ease;
    padding: 10px 8px;
    border-radius: 5px;
    font-size: 12px;
    opacity: 0;
    top: -50px;
    width: 147px;
    text-wrap: nowrap;
    
    &-cursor {
      position: absolute;
      background-color: $adult_bgr;
      width: 11px;
      height: 11px;
      rotate: 45deg;
      top: 30px;
      border-radius: 2px;
    }
  }

  &:hover {
    background-color: $adult_bgr;

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
