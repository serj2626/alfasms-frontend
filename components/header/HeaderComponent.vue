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

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

function handleScroll() {
  let header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header?.classList.add("header_scrolled");
  } else {
    header?.classList.remove("header_scrolled");
  }
}
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
        <NuxtLink class="header-content__tablet-logo" to="/">
          <img
            class="header-content__tablet-logo-img"
            src="/header-logo.png"
            alt="Логотип"
          />
          <span class="header-content__tablet-logo-text">AlfaSMS</span>
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
          <BaseButton label="Войти" size="sm" color="gray" />
          <BaseButton label="Регистрация" size="sm" color="red" />
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
// .header_scrolled .header-content__tablet-menu-list-link {
//   color: $txt;
// }

.header_scrolled {
  .header-content__tablet-menu-list-link {
    color: $txt;
  }
  .header-content__tablet-logo-text{
    color: $txt;
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  &_scrolled {
    padding-top: 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: $txt_white;
    animation: show-scroll $default_cubic;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        &-img {
          width: 80px;
          height: auto;
          filter: drop-shadow( 0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        &-text {
          color: $txt_white;
          text-transform: uppercase;
        }
      }

      &-menu {
        &-list {
          padding-left: 5px;
          flex-grow: 1;
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
      &-btn-group {
        display: flex;
        gap: 10px;
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
