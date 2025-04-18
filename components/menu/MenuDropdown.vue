<script lang="ts" setup>
type TView = 'opportunities' | 'resources' | 'partners';
interface IChildren {
  label: string;
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
      <Icon class="menu-dropdown__link-icon" :name="child.icon" size="14" />
      <span class="menu-dropdown__link-text">
        {{ child.label }}
      </span>
    </NuxtLink>
  </ul>
</template>
<style lang="scss" scoped>
.header_active {
  .menu-dropdown__link {
    color: $txt;
  }
}
.menu-dropdown {
  position: absolute;
  z-index: 130;
  left: 50%;
  transform: translateX(-50%);
  background-color: $txt_white;
  border-radius: 10px;
  padding: 20px 35px;
  display: none;
  grid-template-columns: 1fr;
  gap: 15px;
  box-shadow: 0 0 20px rgb(121, 134, 135);

  // background: rgba(255, 255, 255, 0.15);
  // backdrop-filter: blur(20px);
  // -webkit-backdrop-filter: blur(20px);
  // border: 1px solid rgba(255, 255, 255, 0.3);
  // box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  @include modal_arrow(50%, 5px);

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
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: $teal;
      transition: width 0.3s ease;
    }
    
    &:hover:before {
      width: 100%;
    }
  }
}
</style>
