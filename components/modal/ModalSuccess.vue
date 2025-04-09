<script setup lang="ts">
const visible = ref(false);

function showToast() {
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, 3000);
}

// defineExpose({ showToast });
</script>
<template>
  <transition name="fade">
    <div v-if="visible" class="toast">
      <span>✅ Форма успешно отправлена</span>
    </div>
  </transition>
</template>

<style scoped>
.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  z-index: 9999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
