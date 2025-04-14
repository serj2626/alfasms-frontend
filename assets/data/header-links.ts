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
    ],
  },
  {
    label: 'Услуги',
    icon: HeroIcons.DOWN,
    to: '/services',
    children: [
      {
        label: 'Оферта',
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
    ],
  },
  {
    label: 'Поддержка',
    icon: HeroIcons.DOWN,
    to: '/',
    class: 'header-tablet__list-item-link-helps',
  },
  {
    label: 'Ресурсы',
    icon: HeroIcons.DOWN,
    to: '/',
  },
  {
    label: 'О компании',
    icon: HeroIcons.DOWN,
    disabled: true,
    children: [
      {
        label: 'О нас',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house',
        link: '/about',
      },
      {
        label: 'Контакты',
        description:
          'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download',
        link: '/contacts',
      },
    ],
  },
]);
