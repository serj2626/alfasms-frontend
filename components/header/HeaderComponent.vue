<script lang="ts" setup>
import { HeroIcons } from '~/assets/icons/types/hero-icons';
import HeaderCatalogMenu from './HeaderCatalogMenu.vue';
import { headerLinks } from '~/assets/data/header-links';

const showMenu = ref<boolean | null>(null);
const showFormLogin = ref(false);


const elHeader = ref<HTMLElement>();
const scroll = ref<number>(0);

function handleScroll() {
  scroll.value = window.scrollY;
}
function togleMenuLogin() {
  showFormLogin.value = false;
}
function handleClickOutside(e) {
  // if (showFormLogin.value) {
  //   showFormLogin.value = false;
  // }
  console.log('showFormLogin',e);
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
  document.addEventListener('click', handleClickOutside);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  // document.removeEventListener('click',handleClickOutside);
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
      <div class="header-tablet__logo">
        <NuxtLink to="/">
          <img src="/header-logo.png" class="header-tablet__logo-img" alt="" />
        </NuxtLink>
        <p class="header-tablet__logo-text">ALFASMS</p>
      </div>
      <ul class="header-tablet__list">
        <li
          class="header-tablet__list-item"
          v-for="item in headerLinks"
          :key="item.label"
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

          <MenuNavigation
            v-if="item.children"
            :childrens="item.children"
            view="resources"
          />
        </li>
      </ul>
      <div class="header-tablet__actions">
        <Icon
          class="header-tablet__actions-search"
          :name="HeroIcons.SEARCH"
          size="20"
        />
        <div class="header-tablet__actions-lang">
          <Icon :name="HeroIcons.LANGUAGE" size="20" />
          <Icon :name="HeroIcons.DOWN" size="16" />
        </div>
      </div>
      <div class="header-tablet__auth">
        <div style="position: relative">
          <BaseButton
            class="header-tablet__auth-login"
            label="Войти"
            size="sm"
            color="gray"
            @click="showFormLogin = true"
          />
          <LazyBaseFormLogin
            v-if="showFormLogin"
            @close="showFormLogin = false"
          />
        </div>

        <BaseButton
          class="header-tablet__auth-register"
          label="Регистрация"
          size="sm"
          color="red"
        />
      </div>
    </nav>
    <nav class="header-mobile container">
      <div class="header-mobile__logo-auth">
        <div class="header-mobile__logo">
          <NuxtLink to="/">
            <img
              src="/header-logo.png"
              class="header-mobile__logo-img"
              alt=""
            />
          </NuxtLink>
          <p class="header-mobile__logo-text">ALFASMS</p>
        </div>
        <div class="header-mobile__auth">
          <BaseButton
            class="header-mobile__auth-register"
            label="Регистрация"
            size="xs"
            color="red"
          />
          <BaseButton
            class="header-mobile__auth-login"
            label="Войти"
            size="xs"
            color="gray"
          />
        </div>
      </div>

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
<style lang="scss" scoped>
.header_active {
  .header-tablet__logo-text {
    color: $txt;
  }
  .header-tablet__list-item-link {
    color: $txt;
    @include link;
  }
  .header-tablet__auth-login {
    color: $txt;
    background-color: rgba(0, 0, 0, 0.06);
    transition: background-color $default_ease;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .header-tablet__actions-search {
    color: $txt;
    @include link;
  }
  .header-tablet__actions-lang {
    color: $txt;
    @include link;
    transition: all $default_ease;

    &:hover {
      border-color: $teal;
    }
  }
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
}

.header {
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  &_active {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: $txt_white;
    animation: show-scroll $default_cubic;
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
      gap: 15px;
      align-items: center;

      &-search {
        cursor: pointer;
        @include header_link;
      }

      &-lang {
        cursor: pointer;
        display: flex;
        gap: 3px;
        align-items: center;
        @include header_link;
        border: 1px solid transparent;
        padding: 5px;
        border-radius: 10px;
      }
    }

    &__auth {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__logo {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 15px 17px;
      cursor: pointer;

      &-img {
        width: 60px;
        height: auto;
      }
      &-text {
        font-size: 15px;
        text-transform: uppercase;
      }
    }

    &__list {
      display: flex;
      align-items: center;

      &-item {
        position: relative;
        cursor: pointer;

        &-link {
          display: flex;
          align-items: center;
          gap: 3px;
          color: $txt_white;
          padding: 30px 17px;
          color: $txt_white;
          @include header_link;

          &-helps {
            position: relative;
            &::after {
              content: '24/7';
              position: absolute;
              display: block;
              color: $txt_white;
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
    &__auth {
      display: flex;
      align-items: center;
      gap: 5px;

      &-login {
        font-size: 12px;
        @include mediaMobile {
          font-size: 14px;
        }
      }
      &-register {
        font-size: 12px;
        @include mediaMobile {
          font-size: 14px;
        }
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

@keyframes show-scroll {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-tablet__list-item:hover {
  .header-tablet__list-children {
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
