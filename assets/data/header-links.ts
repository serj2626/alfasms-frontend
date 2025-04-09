import { HeroIcons } from '../icons/types/hero-icons';

export const headerLinks = ref([
  {
    label: 'Возможности',
    icon: HeroIcons.DOWN,
    to: '/',
    children: [
      {
        label: 'Офферта',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house',
        link: '/offerta',
      },
      {
        label: 'Политика',
        description:
          'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download',
        link: '/policy',
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description:
          'You have nothing to do, @nuxt/icon will handle it automatically.',
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description:
          'Choose a primary and a neutral color from your Tailwind CSS theme.',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description:
          'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
      },
    ],
  },
  {
    label: 'Цены',
    icon: HeroIcons.DOWN,
    to: '/',
    children: [
      {
        label: 'defineShortcuts',
        icon: 'i-lucide-file-text',
        description: 'Define shortcuts for your application.',
        to: '//define-shortcuts',
      },
      {
        label: 'useOverlay',
        icon: 'i-lucide-file-text',
        description: 'Display a modal/slideover within your application.',
        to: '//use-overlay',
      },
      {
        label: 'useToast',
        icon: 'i-lucide-file-text',
        description: 'Display a toast within your application.',
        to: '//use-toast',
      },
    ],
  },
  {
    label: 'Поддержка',
    icon: HeroIcons.DOWN,
    to: '/',
    class: 'header-tablet__list-item-link-helps',
    children: [
      {
        label: 'Link',
        icon: 'i-lucide-file-text',
        description: 'Use NuxtLink with superpowers.',
        to: '//link',
      },
      {
        label: 'Modal',
        icon: 'i-lucide-file-text',
        description: 'Display a modal within your application.',
        to: '//modal',
      },
      {
        label: 'NavigationMenu',
        icon: 'i-lucide-file-text',
        description: 'Display a list of links.',
        to: '//navigation-menu',
      },
      {
        label: 'Pagination',
        icon: 'i-lucide-file-text',
        description: 'Display a list of pages.',
        to: '//pagination',
      },
      {
        label: 'Popover',
        icon: 'i-lucide-file-text',
        description:
          'Display a non-modal dialog that floats around a trigger element.',
        to: '//popover',
      },
      {
        label: 'Progress',
        icon: 'i-lucide-file-text',
        description: 'Show a horizontal bar to indicate task progression.',
        to: '//progress',
      },
    ],
  },
  {
    label: 'Ресурсы',
    icon: HeroIcons.DOWN,
    badge: '3.8k',
    to: '/',
    target: '_blank',
  },
  {
    label: 'Партнеры',
    icon: HeroIcons.DOWN,
    disabled: true,
  },
  {
    label: 'Запросить демо',
    icon: HeroIcons.DOWN,
    disabled: true,
  },
]);
