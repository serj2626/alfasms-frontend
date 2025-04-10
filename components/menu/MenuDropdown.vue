<script lang="ts" setup>
type TView = 'opportunities' | 'resources' | 'partners';
interface IChildren {
  label: string;
  description: string;
  icon?: string;
  link?: string;
}
defineProps<{
  childrens: IChildren[];
  view: TView;
}>();
</script>
<template>
  <ul v-if="childrens" class="menu-dropdown">
    <NuxtLink
      class="menu-dropdown__link"
      v-for="child in childrens"
      :key="child.label"
      :to="child.link"
    >
      <Icon class="menu-dropdown__link-icon" :name="child.icon" size="12" />
      <span class="menu-dropdown__link-text">
        {{ child.label }}
      </span>
    </NuxtLink>
  </ul>
</template>
<style lang="scss" scoped>
.menu-dropdown {
  position: absolute;
  // max-width: 400px;
  // top: 80px;
  top: 82px;
  left: 50%;
  transform: translateX(-50%);
  background-color: $txt_white;
  padding: 30px 55px;
  border-radius: 20px;
  display: none;
  // grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 1fr;
  width: 500px;
  gap: 30px;
  box-shadow: 0 0 20px rgb(121, 134, 135);

  background-image: url("/bg/book.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  // background: linear-gradient(
  //   90deg,
  //   rgba(255, 255, 255, 0.9) 48%,
  //   rgba(245, 245, 255, 0.85) 52%
  // );
  // backdrop-filter: blur(15px);
  // border: 1px solid rgba(255, 255, 255, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 20px;
    height: 20px;
    background-color: $txt_white;
    box-shadow: 0 0 20px rgb(240, 241, 241);
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    color: $txt;
    font-size: 15px;

    &:hover {
      @include link;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -5px;
      width: max-content;
      height: 2px;
      background-color: teal;
    }
  }
}
</style>
