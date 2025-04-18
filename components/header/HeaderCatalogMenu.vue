<script lang="ts" setup>
import { HeroIcons } from '~/assets/icons/types/hero-icons';

const modalStore = useModalsStore();
const emit = defineEmits(['close']);
const isOpen = ref(true);

const closeMenu = () => {
  isOpen.value = false;
  setTimeout(() => {
    emit('close');
  }, 500);
};

const openRegisterForm = () => {
  closeMenu();
  modalStore.openModal('register');
};

onMounted(() => {
  document.documentElement.style.overflowY = 'hidden';
});
onUnmounted(() => {
  document.documentElement.style.overflowY = 'auto';
});

const sendItems = {
  title: 'Отправляйте',
  items: [
    { title: 'Email рассылки', link: '/' },
    { title: 'SMS рассылки', link: '/' },
    { title: 'Автоматизация', link: '/' },
    { title: 'Web push', link: '/' },
    { title: 'Транзакционные письма', link: '/' },
    { title: 'Viber рассылки', link: '/' },
  ],
};

const communicateItems = {
  title: 'Общайтесь',
  items: [
    { title: 'Чат для сайта', link: '/' },
    { title: 'WhatsApp чат-боты', link: '/' },
    { title: 'Facebook чат-боты', link: '/' },
    { title: 'Telegram чат-боты', link: '/' },
    { title: 'Instagram чат-боты', link: '/' },
    { title: 'Viber чат-боты', link: '/' },
  ],
};

const leadsItems = {
  title: 'Лиды',
  items: [
    { title: 'Лендинги', link: '/' },
    { title: 'Попап формы', link: '/' },
  ],
};

const courseItems = {
  title: 'Платформа для курсов',
  items: [
    { title: 'API', link: '/' },
    { title: 'Найти эксперта', link: '/' },
    { title: 'Интеграции', link: '/' },
    { title: 'Все возможности', link: '/' },
  ],
};

const platformItems = {
  title: 'Платформа',
  items: [
    { title: 'Блог', link: '/' },
    { title: 'Академия', link: '/' },
    { title: 'База знаний', link: '/' },
    { title: 'YouTube', link: '/' },
    { title: 'Обновления', link: '/' },
    { title: 'Marketing 101', link: '/' },
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
        <HeaderLogo class="header-catalog-menu__top-wrapper-logo" />
        <div class="header-catalog-menu__top-wrapper-auth">
          <BaseButton
            class="header-catalog-menu__top-wrapper-auth-register"
            label="Регистрация"
            size="xs"
            color="red"
            @click="openRegisterForm"
          />
          <BaseButtonLogin />
        </div>
        <button class="header-catalog-menu__top-wrapper-burger">
          <Icon
            class="header-catalog-menu__top-wrapper-burger-icon"
            :name="HeroIcons.CLOSE"
            @click="closeMenu"
            size="26"
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
        <button class="header-catalog-menu__main-nav-search">
          <Icon
            class="header-catalog-menu__main-nav-search-icon"
            size="22"
            :name="HeroIcons.SEARCH"
          />
        </button>
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
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background-color: $txt_white;
  z-index: 200;

  animation: 0.5s ease-in-out show-menu;
  overflow-y: scroll;

  @include mediaLaptop {
    display: none;
  }
  &__top {
    position: relative;
    // padding-top: 15px;
    // padding-bottom: 15px;
    z-index: 1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: $txt_white;

    &-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding-inline: 15px;

      &:deep(.base-button-login__btn) {
        font-size: 14px;
        color: $txt;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        @include mediaMobile {
          font-size: 16px;
        }
      }

      &:deep(.base-form-login) {
        position: fixed;
        top: 2%;
        left: 50%;
        transform: translate(-50%, 2%);
      }
      &:deep(.base-form-login__wraper::before) {
        display: none !important;
        content: none !important;
      }
      &-auth {
        display: flex;
        align-items: center;
        gap: 5px;

        &-register {
          font-size: 14px;
          @include mediaMobile {
            font-size: 16px;
          }
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
    // overflow-y: auto;

    &-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-block: 20px;
      border-bottom: 1px solid #eae4e4;

      &-list {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 5px;

        @include mediaMobile {
          flex-direction: row;
          gap: 15px;
        }

        &-item {
          line-height: 1;
          font-size: 15px;
          padding-block: 6px;
          transition: color $fast_ease;
          cursor: pointer;

          &:hover {
            color: $teal;
          }
        }
      }
      &-search {
        cursor: pointer;
      }
    }
    &-info {
      padding-block: 16px 50px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      
    }
  }
  &:deep(.header-logo){
    padding: 10px;
  }
  &:deep(.header-logo__text){
    color: $txt;
    font-size: 12px;
  }
}

.iconify {
  font-size: 10px;
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
