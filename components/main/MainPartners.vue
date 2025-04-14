<script setup lang="ts">
interface IContactsImage {
  path: string;
  alt: string;
}

const images: IContactsImage[] = [
  {
    path: 'partners:lot',
    alt: 'lot',
  },
  {
    path: 'partners:pwc',
    alt: 'pwc',
  },
  {
    path: 'partners:kaercher',
    alt: 'kaercher',
  },
  {
    path: 'partners:puma',
    alt: 'puma',
  },
  {
    path: 'partners:viessmann',
    alt: 'viessmann',
  },
  {
    path: 'partners:sumsung',
    alt: 'sumsung',
  },
  {
    path: 'partners:swatch',
    alt: 'swatch',
  },
  {
    path: 'partners:kaercher',
    alt: 'kaercher',
  },
  {
    path: 'partners:puma',
    alt: 'puma',
  },
  {
    path: 'partners:viessmann',
    alt: 'viessmann',
  },
  {
    path: 'partners:sumsung',
    alt: 'sumsung',
  },
  {
    path: 'partners:swatch',
    alt: 'swatch',
  },
];
</script>

<template>
  <BaseSwiper :images="images" />
</template>