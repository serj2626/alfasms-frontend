import { HeroIcons } from '../icons/types/hero-icons';

export const headerLinks = ref([
  {
    label: 'Возможности',
    icon: HeroIcons.DOWN,
    to: '/',
    children: [
      {
        label: 'Офферта',
        icon: 'i-lucide-house',
        link: '/offerta',
      },
      {
        label: 'Политика',
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
        icon: 'i-lucide-house',
        link: '/offerta',
      },
      {
        label: 'Политика',
        icon: 'i-lucide-cloud-download',
        link: '/policy',
      },
    ],
  },
  {
    label: 'Поддержка',
    to: '/',
    class: 'header-tablet__list-item-link-helps',
  },
  {
    label: 'Ресурсы',
    to: '/',
  },
  {
    label: 'О компании',
    icon: HeroIcons.DOWN,
    children: [
      {
        label: 'О нас',
        icon: 'i-lucide-house',
        link: '/about',
      },
      {
        label: 'Контакты',
        icon: 'heroicons:map-pin',
        link: '/contacts',
      },
      {
        label: 'Отзывы',
        icon: 'heroicons:star',
        link: '/contacts',
      },
    ],
  },
]);
