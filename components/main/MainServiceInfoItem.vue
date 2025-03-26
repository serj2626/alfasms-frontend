<script lang="ts" setup>
interface IProps {
  title?: string;
  icon?: string;
  circle: boolean;
}

const { title, icon, circle = false } = defineProps<IProps>();
</script>
<template>
  <div
    class="main-service-info-item"
    :class="{ 'main-service-info-item_circle': circle }"
  >
    <div class="main-service-info-item__icon">
      <NuxtIcon :name="icon" v-if="icon" />
    </div>

    <span class="main-service-info-item__title" v-if="title">{{ title }}</span>
  </div>
</template>
<style lang="scss" scoped>
.main-service-info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 38px 8px 8px;
  color: $txt_white;
  border-radius: 18px;
  width: fit-content;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.16) 0,
    rgba(255, 255, 255, 0.08) 100%
  );

  &__title {
    font-weight: 700;
    font-size: 18px;
    padding-right: 7px;
  }

  &_circle {
    border-radius: 50px;
    padding: 8px;
  }
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    // box-shadow: 0 4px 5px 0 rgba(32, 32, 35, 0.05);
    // background: linear-gradient(
    //   180deg,
    //   #fff 62.36%,
    //   rgba(255, 255, 255, 0.8) 100%
    // );
    border-radius: 12px;

    & svg{
      width: 32px;
      height: 32px;
      color: $teal;
    }
  }
}
</style>
