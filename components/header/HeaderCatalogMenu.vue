<script lang="ts" setup>

</script>
<template>
  <div class="header-catalog-menu">
    <div class="header-catalog-menu__content">

    </div>
    
  </div>
</template>
<style lang="scss" scoped>
.header-catalog-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: $txt_white;
  z-index: 150;

  animation: 0.5s ease-in-out show-menu;

  @include mediaLaptop{
    display: none;
  }
}



@keyframes show-menu {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes close-menu {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

</style>