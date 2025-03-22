<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";
const links = ref([
  { name: "Возможности", to: "/services" },
  { name: "Цены", to: "/prices" },
  { name: "Поддержка", to: "/specialists" },
  { name: "Ресурсы", to: "/portfolio" },
  { name: "Партнеры", to: "/contacts" },
  { name: "Запросить демо", to: "/contacts" },
]);
</script>
<template>
  <header class="header">
    <div class="header-content container">
      <!-- <div class="header-content__mobile">
        <a href="tel:8 (812) 501-22-14">
          <NuxtIcon
            filled
            name="header/mobile-phone"
            class="header-content__mobile__phone-icon"
          />
        </a>
        <NuxtLink to="/">
          <img
            class="header-content__mobile__logo"
            src="/fav/logo.png"
            alt="Логотип"
          />
        </NuxtLink>

        <button class="header-content__mobile__burger-icon">
          <NuxtIcon filled :name="HeroIcons.BURGER_MENU" />
        </button>
      </div> -->
      <div class="header-content__tablet">
        <NuxtLink to="/">
          <img
            class="header-content__tablet-logo"
            src="/fav/logo.png"
            alt="Логотип"
          />
        </NuxtLink>
        <div class="header-content__tablet-menu">
          <div class="header-content__tablet-menu-list">
            <NuxtLink
              v-for="link in links"
              :key="link.name"
              to="/"
              class="header-content__tablet-menu-list-link"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="header-content__tablet-actions"></div>
        <div class="header-content__tablet-btn-group">
          <button class="header-content__tablet-btn-login">Войти</button>
          <button class="header-content__tablet-btn-register">
            Регистрация
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  padding-top: 4px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  &-content {
    &__mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;

      @include mediaLaptop {
        display: none;
      }
    }
    &__tablet {
      color: $txt_white;
      font-size: 16px;
      display: none;

      @include mediaLaptop {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
      }

      &-logo {
        width: 80px;
        height: auto;
      }

      &-menu {
        &-list {
          display: flex;
          gap: 40px;

          &-link {
            cursor: pointer;
            color: $txt_white;
            transition: all $fast_ease;

            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
}

.header-content__tablet {
}
.header-content__tablet-logo {
}
.header-content__tablet-menu {
}
.header-content__tablet-menu-list {
}
.header-content__tablet-menu-list-link {
}
.header-content__tablet-btn-group {
}
.header-content__tablet-btn-login {
}
.header-content__tablet-btn-register {
}

</style>
