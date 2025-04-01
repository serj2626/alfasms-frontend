<script lang="ts" setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";

const showMenu = ref<boolean | null>(null);

const items = ref([
  {
    label: "Возможности",
    icon: HeroIcons.DOWN,
    to: "/getting-started",
    children: [
      {
        label: "Introduction",
        description: "Fully styled and customizable components for Nuxt.",
        icon: "i-lucide-house",
      },
      {
        label: "Installation",
        description:
          "Learn how to install and configure Nuxt UI in your application.",
        icon: "i-lucide-cloud-download",
      },
      {
        label: "Icons",
        icon: "i-lucide-smile",
        description:
          "You have nothing to do, @nuxt/icon will handle it automatically.",
      },
      {
        label: "Colors",
        icon: "i-lucide-swatch-book",
        description:
          "Choose a primary and a neutral color from your Tailwind CSS theme.",
      },
      {
        label: "Theme",
        icon: "i-lucide-cog",
        description:
          "You can customize components by using the `class` / `ui` props or in your app.config.ts.",
      },
    ],
  },
  {
    label: "Цены",
    icon: HeroIcons.DOWN,
    to: "/composables",
    children: [
      {
        label: "defineShortcuts",
        icon: "i-lucide-file-text",
        description: "Define shortcuts for your application.",
        to: "/composables/define-shortcuts",
      },
      {
        label: "useOverlay",
        icon: "i-lucide-file-text",
        description: "Display a modal/slideover within your application.",
        to: "/composables/use-overlay",
      },
      {
        label: "useToast",
        icon: "i-lucide-file-text",
        description: "Display a toast within your application.",
        to: "/composables/use-toast",
      },
    ],
  },
  {
    label: "Поддержка",
    icon: HeroIcons.DOWN,
    to: "/components",
    active: true,
    children: [
      {
        label: "Link",
        icon: "i-lucide-file-text",
        description: "Use NuxtLink with superpowers.",
        to: "/components/link",
      },
      {
        label: "Modal",
        icon: "i-lucide-file-text",
        description: "Display a modal within your application.",
        to: "/components/modal",
      },
      {
        label: "NavigationMenu",
        icon: "i-lucide-file-text",
        description: "Display a list of links.",
        to: "/components/navigation-menu",
      },
      {
        label: "Pagination",
        icon: "i-lucide-file-text",
        description: "Display a list of pages.",
        to: "/components/pagination",
      },
      {
        label: "Popover",
        icon: "i-lucide-file-text",
        description:
          "Display a non-modal dialog that floats around a trigger element.",
        to: "/components/popover",
      },
      {
        label: "Progress",
        icon: "i-lucide-file-text",
        description: "Show a horizontal bar to indicate task progression.",
        to: "/components/progress",
      },
    ],
  },
  {
    label: "Ресурсы",
    icon: HeroIcons.DOWN,
    badge: "3.8k",
    to: "/",
    target: "_blank",
  },
  {
    label: "Партнеры",
    icon: HeroIcons.DOWN,
    disabled: true,
  },
  {
    label: "Запросить демо",
    icon: HeroIcons.DOWN,
    disabled: true,
  },
]);
const elHeader = ref<HTMLElement>();
const scroll = ref<number>(0);

function handleScroll() {
  scroll.value = window.scrollY;
}
onMounted(() => {
  if (elHeader.value) {
    document.documentElement.style.setProperty(
      "--header-height",
      elHeader.value.scrollHeight + 20 + "px"
    );
  }
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
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
          v-for="item in items"
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
          <ul v-if="item.children" class="header-tablet__list-children">
            <NuxtLink
              class="header-tablet__list-children-link"
              v-for="child in item.children"
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
        <BaseButton
          class="header-tablet__auth-login"
          label="Войти"
          size="sm"
          color="gray"
        />
        <BaseButton
          class="header-tablet__auth-register"
          label="Регистрация"
          size="sm"
          color="red"
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
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
        width: 70px;
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
          padding: 25px 17px;
          color: $txt_white;

          @include header_link;
        }
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

.header-tablet__list-children {
  position: absolute;
  width: 400px;
  left: 50%;
  // top: 60px;
  transform: translateX(-50%);
  background-color: $txt_white;
  padding: 20px 30px;
  border-radius: 5px;
  display: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  box-shadow: 0 0 20px rgb(121, 134, 135);

  &::before {
    content: "";
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
      content: "";
      position: absolute;
      bottom: -5px;
      width: max-content;
      height: 2px;
      background-color: teal;
    }
  }
}

.header-tablet__list-item:hover{
  .header-tablet__list-children{
    display: grid;
    animation: show-menu 0.4s ease;
  }
  .header-tablet__list-item-link-icon{
    transition: all .2s ease-in;
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
