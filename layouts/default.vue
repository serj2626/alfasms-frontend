<template>
   <Transition name="header" appear>
     <HeaderComponent />
   </Transition>
  <slot />
  <FooterComponent />
  <ModalComponent />
  <BaseAlertCookie />
  <BaseButtonLiveChat />
</template>
<style scoped lang="scss">
.header-enter-active,
.header-leave-active {
  transition: all 0.4s;
}
.header-enter-from,
.header-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>