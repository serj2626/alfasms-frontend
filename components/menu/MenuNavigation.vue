<template>
  <ul v-if="childrens" class="header-tablet__list-children">
    <NuxtLink
      class="header-tablet__list-children-link"
      v-for="child in childrens"
      :key="child.label"
    >
      <Icon
        class="header-tablet__list-children-link-icon"
        :name="child.icon"
        size="20"
      />
      <span class="header-tablet__list-children-link-text">
        {{ child.label }}
      </span>
    </NuxtLink>
  </ul>
</template>

<script lang="ts" setup>
type TView = 'opportunities' | 'resources' | 'partners';
interface IChildren {
  label: string;
  description: string;
  icon?: string;
}
defineProps<{
  childrens: IChildren[];
  view: TView
}>();
</script>

<style lang="scss" scoped>
.header-tablet__list-children {
  position: absolute;
  width: 400px;
  left: 50%;
  transform: translateX(-50%);
  background-color: $txt_white;
  padding: 30px;
  border-radius: 20px;
  display: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  box-shadow: 0 0 20px rgb(121, 134, 135);

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 20px;
    height: 20px;
    background-color: $txt_white;
    box-shadow: 0 0 20px rgb(240, 241, 241);
  }

  &-link {
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
