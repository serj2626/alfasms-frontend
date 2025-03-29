<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";

interface IHeaderLinks {
  name: string;
  to: string;
  icon: boolean;
  view?: string;
}

const links = ref<IHeaderLinks[]>([
  { name: "Возможности", to: "/", icon: true, view: "features" },
  { name: "Цены", to: "/", icon: false },
  { name: "Поддержка", to: "/", icon: false },
  { name: "Ресурсы", to: "/", icon: true, view: "resources" },
  { name: "Партнеры", to: "/", icon: true, view: "partners" },
  { name: "Запросить демо", to: "/", icon: false },
]);

type HeaderLinkView = "features" | "resources" | "partners";

// const showMenu = ref<HeaderLinkView | null>(null);
const showMenu = ref<boolean | null>(null);

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

// const showMessage = (view: HeaderLinkView) => {
//   showMenu.value = view;
// };

</script>
<template>
  <header class="header">
    <LazyHeaderCatalogMenu v-show="showMenu" @close="showMenu = null" />
    <div class="header-content container">
      <div class="header-content__mobile container">
        <NuxtLink class="header-content__mobile-logo" to="/">
          <img
            class="header-content__mobile-logo-img"
            src="/header-logo.png"
            alt="Логотип"
          />
          <span class="header-content__mobile-logo-text">ALFASMS</span>
        </NuxtLink>

        <button class="header-content__mobile-burger">
          <Icon
            class="header-content__mobile-burger-icon"
            size="36"
            :name="HeroIcons.BURGER_MENU"
            @click="showMenu = true"
          />
        </button>
      </div>
      <div class="header-content__tablet container">
        <NuxtLink class="header-content__tablet-logo" to="/">
          <img
            class="header-content__tablet-logo-img"
            src="/header-logo.png"
            alt="Логотип"
          />
          <span class="header-content__tablet-logo-text">ALFASMS</span>
        </NuxtLink>
        <div class="header-content__tablet-menu">
          <div
            class="header-content__tablet-menu-item"
            v-for="link in links"
            :key="link.name"
      
          >
            <NuxtLink to="/" class="header-content__tablet-menu-item-link">
              {{ link.name }}
            </NuxtLink>
            <Icon
              class="header-content__tablet-menu-item-icon"
              v-if="link.icon"
              :name="HeroIcons.DOWN"
            />
          </div>

        </div>
        <div class="header-content__tablet-search-language">
          <button class="btn__search">
            <Icon :name="HeroIcons.SEARCH" size="20" />
          </button>
          <div class="btn__language">
            <Icon :name="HeroIcons.LANGUAGE" size="20" />
            <Icon :name="HeroIcons.DOWN" />
          </div>
        </div>
        <div class="header-content__tablet-btn-group">
          <BaseButton
            class="header-content__tablet-btn-group-login"
            label="Войти"
            size="md"
            color="gray"
          />
          <BaseButton
            class="header-content__tablet-btn-group-register"
            label="Регистрация"
            size="md"
            color="red"
          />
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header_scrolled {
  .header-content__tablet-menu-list-item-link {
    color: $txt;
    transition: color $fast_ease;

    &:hover {
      color: $teal;
    }
  }
  .header-content__tablet-menu-item {
    .header-content__tablet-menu-item-link,
    .header-content__tablet-menu-item-icon {
      color: $txt;
      transition: color $fast_ease;
    }
    &:hover {
      color: $teal;
    }
  }
  .header-content__tablet-logo-text {
    color: $txt;
  }
  .header-content__tablet-btn-group-login {
    color: $txt;
    background-color: rgba(0, 0, 0, 0.06);
  }
  .btn__search {
    transition: color $fast_ease;
    color: $txt;
    &:hover {
      color: $teal;
    }
  }

  .btn__language {
    transition: all $fast_ease;
    color: $txt;
    :hover {
      outline: 11px solid $teal;
      color: $teal;
    }
  }
  .header-content__mobile-burger-icon,
  .header-content__mobile-logo-text {
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
      padding: 10px 0;

      @include mediaLaptop {
        display: none;
      }

      &-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;

        &-img {
          width: 60px;
          height: auto;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        &-text {
          color: $txt_white;
          text-transform: uppercase;
        }
      }

      &-burger {
        transition: scale $fast_ease;

        &:active {
          scale: 0.8;
        }

        &-icon {
          color: $txt_white;
        }
      }
    }

    &__tablet {
      color: $txt_white;
      font-size: 16px;
      display: none;
      padding-inline: 15px;

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
          width: 60px;
          height: auto;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        &-text {
          color: $txt_white;
          text-transform: uppercase;
        }
      }

      &-menu {
        display: flex;
        align-items: center;
        gap: 20px;

        @include mediaDesktop {
          gap: 30px;
        }

        &-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;

          &-link {
            color: $txt_white;
            transition: all $fast_ease;
            font-size: 15px;

            &:hover {
              opacity: 0.7;
            }
          }
        }
      }

      &-search-language {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      &-btn-group {
        display: flex;
        align-items: center;
        gap: 10px;

        &-login,
        &-register {
          font-size: 14px;
        }
      }
    }
  }
}

.btn__language,
.btn__search {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
</style>
