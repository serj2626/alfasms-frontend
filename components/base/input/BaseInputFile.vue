<script setup lang="ts">
import { ref } from "vue";

const fileName = ref("");
const fileInputRef = ref<HTMLInputElement | null>(null);

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files?.length) {
    fileName.value = target.files[0].name;
  }
}

function clearFile() {
  fileName.value = "";
  if (fileInputRef.value) {
    fileInputRef.value.value = ""; // сброс input
  }
}
</script>
<template>
  <div class="base-input-file">
    <input
      type="file"
      id="fileInput"
      class="base-input-file__input"
      ref="fileInputRef"
      @change="handleFileChange"
    />
    <label for="fileInput" class="base-input-file__label">
      📁 Выбери файл
    </label>

    <div v-if="fileName" class="base-input-file__info">
      <p class="base-input-file__name">✅ {{ fileName }}</p>
      <button class="base-input-file__remove" @click="clearFile">
        Удалить ❌
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.base-input-file {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__input {
    display: none;
  }

  &__label {
    display: inline-block;
    padding: 10px 20px;
    background-color: transparent;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 0 10px white;
    }
  }

  &__info {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__name {
    font-size: 0.9rem;
    color: #333;
  }

  &__remove {
    background-color: transparent;
    border: none;
    color: #e11d48;
    cursor: pointer;
    font-weight: bold;
    transition: color 0.2s;

    &:hover {
      color: #be123c;
    }
  }
}
</style>
