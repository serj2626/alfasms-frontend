<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";

const emit = defineEmits(["close"]);
const isOpen = ref(true);

const closeMenu = () => {
  isOpen.value = false;
  setTimeout(() => {
    emit("close");
  }, 1000);
};

// onMounted(() => {
//   document.body.style.overflowY = "hidden";
// });
// onUnmounted(() => {
//   document.body.style.overflowY = "auto";
// });

const sendItems = {
  title: "Отправляйте",
  items: [
    { title: "Email рассылки", link: "/" },
    { title: "SMS рассылки", link: "/" },
    { title: "Автоматизация", link: "/" },
    { title: "Web push", link: "/" },
    { title: "Транзакционные письма", link: "/" },
    { title: "Viber рассылки", link: "/" },
  ],
};

const communicateItems = {
  title: "Общайтесь",
  items: [
    { title: "Чат для сайта", link: "/" },
    { title: "WhatsApp чат-боты", link: "/" },
    { title: "Facebook чат-боты", link: "/" },
    { title: "Telegram чат-боты", link: "/" },
    { title: "Instagram чат-боты", link: "/" },
    { title: "Viber чат-боты", link: "/" },
  ],
};

const leadsItems = {
  title: "Лиды",
  items: [
    { title: "Лендинги", link: "/" },
    { title: "Попап формы", link: "/" },
  ],
};

const courseItems = {
  title: "Платформа для курсов",
  items: [
    { title: "API", link: "/" },
    { title: "Найти эксперта", link: "/" },
    { title: "Интеграции", link: "/" },
    { title: "Все возможности", link: "/" },
  ],
};

const platformItems = {
  title: "Платформа",
  items: [
    { title: "Блог", link: "/" },
    { title: "Академия", link: "/" },
    { title: "База знаний", link: "/" },
    { title: "YouTube", link: "/" },
    { title: "Обновления", link: "/" },
    { title: "Marketing 101", link: "/" },
  ],
};
</script>
<template>
  <div
    class="header-catalog-menu"
    :class="{ 'header-catalog-menu_close': !isOpen }"
  >
    <div class="header-catalog-menu__top">
      <div class="header-catalog-menu__top-wrapper container">
        <NuxtLink class="header-catalog-menu__top-wrapper-logo" to="/">
          <img
            class="header-catalog-menu__top-wrapper-logo-img"
            src="/header-logo.png"
            alt="Логотип"
          />
          <span class="header-catalog-menu__top-wrapper-logo-text"
            >ALFASMS</span
          >
        </NuxtLink>
        <button class="header-catalog-menu__top-wrapper-burger">
          <Icon
            class="header-catalog-menu__top-wrapper-burger-icon"
            size="36"
            :name="HeroIcons.CLOSE"
            @click="closeMenu"
          />
        </button>
      </div>
    </div>
    <div class="header-catalog-menu__main container">
      <nav class="header-catalog-menu__main-nav">
        <ul class="header-catalog-menu__main-nav-list">
          <li class="header-catalog-menu__main-nav-list-item">
            <NuxtLink class="header-catalog-menu__main-nav-list-item-link"
              >Возможности</NuxtLink
            >
          </li>
          <li class="header-catalog-menu__main-nav-list-item">
            <NuxtLink class="header-catalog-menu__main-nav-list-item-link"
              >Цены</NuxtLink
            >
          </li>
          <li class="header-catalog-menu__main-nav-list-item">
            <NuxtLink class="header-catalog-menu__main-nav-list-item-link"
              >Поддержка</NuxtLink
            >
          </li>
          <li class="header-catalog-menu__main-nav-list-item">
            <NuxtLink class="header-catalog-menu__main-nav-list-item-link"
              >Ресурсы</NuxtLink
            >
          </li>
          <li class="header-catalog-menu__main-nav-list-item">
            <NuxtLink class="header-catalog-menu__main-nav-list-item-link"
              >Партнеры</NuxtLink
            >
          </li>
        </ul>
        <Icon size="26" :name="HeroIcons.SEARCH" />
      </nav>
      <div class="header-catalog-menu__main-info">
        <HeaderMobileItem :title="sendItems.title" :links="sendItems.items" />
        <HeaderMobileItem
          :title="communicateItems.title"
          :links="communicateItems.items"
        />
        <HeaderMobileItem :title="leadsItems.title" :links="leadsItems.items" />
        <HeaderMobileItem
          :title="courseItems.title"
          :links="courseItems.items"
        />
        <HeaderMobileItem
          :title="platformItems.title"
          :links="platformItems.items"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header-catalog-menu {
  &_close {
    animation: 0.5s ease-in-out close-menu;
  }
  width: 100%;
  height: 100vh;
  background-color: $txt_white;
  z-index: 200;

  animation: 0.5s ease-in-out show-menu;

  @include mediaLaptop {
    display: none;
  }

  &__top {
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
    z-index: 1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: $txt_white;

    &-wrapper {
      margin-inline: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding-inline: 15px;

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
          color: $txt;
          text-transform: uppercase;
        }
      }
      &-burger {
        transition: scale $fast_ease;

        &:active {
          scale: 0.8;
        }

        &-icon {
          color: $txt;
        }
      }
    }
  }

  &__main {
    overflow-y: scroll;

    &-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-block: 20px;
      border-bottom: 1px solid #eae4e4;

      &-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        @include mediaTablet{
          flex-direction: row;
          gap: 5px;
        }

        &-item {
          line-height: 1;
          font-size: 15px;
          padding-block: 12px;
          transition: color $fast_ease;
          cursor: pointer;

          &:hover {
            color: $teal;
          }
        }
      }
    }
    &-info{
      padding-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}

@keyframes show-menu {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes close-menu {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
