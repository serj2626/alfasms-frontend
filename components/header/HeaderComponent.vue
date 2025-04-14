<script lang="ts" setup>
import { HeroIcons } from '~/assets/icons/types/hero-icons';
import HeaderCatalogMenu from './HeaderCatalogMenu.vue';
import { headerLinks } from '~/assets/data/header-links';

const modalsStore = useModalsStore();

const showMenu = ref<boolean | null>(null);

const elHeader = ref<HTMLElement>();
const scroll = ref<number>(0);

function handleScroll() {
  scroll.value = window.scrollY;
}
onMounted(() => {
  if (elHeader.value) {
    document.documentElement.style.setProperty(
      '--header-height',
      elHeader.value.scrollHeight + 20 + 'px'
    );
  }
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <HeaderCatalogMenu v-if="showMenu" @close="showMenu = false" />
  <header
    class="header"
    :class="{
      header_active: scroll > 20,
    }"
  >
    <nav class="header-tablet container" ref="elHeader">
      <HeaderLogo />
      <ul class="header-tablet__list">
        <li
          class="header-tablet__list-item"
          v-for="item in headerLinks"
          :key="item.label"
          :class="item?.class"
        >
          <NuxtLink class="header-tablet__list-item-link" :to="item.to">
            <span class="header-tablet__list-item-link-text">
              {{ item.label }}
            </span>
            <Icon
              v-if="item.children"
              class="header-tablet__list-item-link-icon"
              :name="item.icon"
              size="16"
            />
          </NuxtLink>

          <LazyMenuDropdown
            v-if="item.children"
            :childrens="item.children"
            view="resources"
          />
        </li>
      </ul>
      <div class="header-tablet__actions">
        <HeaderSearch />
        <div class="header-tablet__actions-lang">
          <LanguageSwitcher />
          <!-- <Icon :name="HeroIcons.LANGUAGE" size="18" />
          <Icon :name="HeroIcons.DOWN" size="16" /> -->
        </div>
      </div>
      <div class="header-tablet__auth">
        <BaseButtonLogin />
        <BaseButton
          class="header-tablet__auth-register"
          label="Регистрация"
          size="sm"
          color="red"
          @click="modalsStore.openModal('register')"
        />
      </div>
    </nav>
    <nav class="header-mobile container">
      <HeaderLogo />

      <div class="header-mobile__lang-burger">
        <div class="header-mobile__lang">
          <Icon :name="HeroIcons.LANGUAGE" size="18" />
          <Icon :name="HeroIcons.DOWN" size="16" />
        </div>
        <Icon
          :name="HeroIcons.BURGER_MENU"
          size="30"
          class="header-mobile__burger"
          @click="showMenu = true"
        />
      </div>
    </nav>
  </header>
</template>
<style lang="scss">
.header_active {
  padding-top: 0px !important;
  .header-tablet__auth-register{
    box-shadow: 0 0 10px rgba(106, 69, 69, 0.46);
  }
  .header-tablet__list-item-link {
    color: $txt;
    @include link;
  }
  .language-switcher__current-icon {
    color: $txt;
  }
  // .header-tablet__actions-lang {
  //   color: $txt;
  //   @include link;
  //   transition: all $default_ease;

  //   &:hover {
  //     border-color: $teal;
  //   }
  // }
  .header-mobile__burger {
    color: $txt;
  }
  .header-mobile__lang {
    color: $txt;
  }
  .header-mobile__auth-login {
    color: $txt;
    background-color: rgba(0, 0, 0, 0.06);
    transition: background-color $default_ease;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .header-mobile__logo-text {
    color: $txt;
  }
  .header-tablet__list-item-link-helps::after {
    @include link;
    transition: all $default_ease;
  }

  .header-tablet__list-item-link-helps:hover::after {
    color: $teal;
    transition: all $default_ease;
  }
}

.header {
  padding-top: 20px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  &_active {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: $txt_white;
    transition: all 0.4s ease-in-out;
  }

  &-tablet {
    display: none;
    color: white;
    align-items: center;
    justify-content: space-between;
    @include mediaLaptop {
      display: flex;
    }

    &__actions {
      display: flex;
      gap: 3px;
      align-items: center;

      &-lang {
        cursor: pointer;
        display: flex;
        gap: 3px;
        align-items: center;
        // @include header_link;
        border: 1px solid transparent;
    
        border-radius: 10px;
      }
    }

    &__auth {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__list {
      display: flex;
      align-items: center;

      &-item {
        position: relative;
        cursor: pointer;

        &-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 3px;
          color: $txt_white;
          padding: 30px 15px;
          color: $txt_white;
          @include header_link;

          &-helps {
            position: relative;

            &::after {
              content: '24/7';
              font-size: 11px;
              position: absolute;
              top: 22px;
              right: -6px;
              color: $txt_white;
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
  &-mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 12px;

    @include mediaLaptop {
      display: none;
    }

    &__logo-auth {
      display: flex;
      align-items: center;
      gap: 10px;
      @include mediaMobile {
        gap: 15px;
      }
    }

    &__logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      &-img {
        width: 50px;
        height: auto;
      }
      &-text {
        font-size: 12px;
        color: $txt_white;
        text-transform: uppercase;
      }
    }
    &__lang-burger {
      display: flex;
      align-items: center;
      gap: 5px;

      @include mediaMobile {
        gap: 15px;
      }
    }

    &__lang {
      padding-top: 5px;
      color: $txt_white;
      opacity: 0.7;
      cursor: pointer;
    }
    &__burger {
      color: $txt_white;
      cursor: pointer;
      transition: all $default_cubic;

      &:active {
        scale: 0.8;
      }
    }
  }
}
.header-tablet__list-item:hover {
  .menu-dropdown {
    display: grid;
    animation: show-menu $default_cubic;
  }
  .header-tablet__list-item-link-icon {
    transition: all 0.2s ease-in;
    transform: rotate(180deg);
  }
}

@keyframes show-menu {
  0% {
    scale: 0.5;
    opacity: 0.5;
  }
  100% {
    scale: 1;
    opacity: 1;
  }
}
</style>
