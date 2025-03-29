<script lang="ts" setup>
interface ILinks {
  link: string;
  title: string;
}
const links: ILinks[] = [
  { link: "/", title: "Правила использования" },
  { link: "/", title: "Безопасность" },
  { link: "/", title: "Политика Cookies" },
  { link: "/policy", title: "Политика конфиденциальности" },
];
</script>
<template>
  <div class="footer-info">
    <div class="footer-info__content container">
      <div class="footer-info__content-data">
        <div class="footer-info__content-data-links">
          <NuxtLink
            v-for="link in links"
            :key="link.title"
            class="footer-info__content-data-links-item"
            :to="link.link"
          >
            {{ link.title }}
          </NuxtLink>
        </div>

        <p class="footer-info__content-data-copyright">
          © 2015 - 2025. AlafaSMS. Все права защищены
        </p>
      </div>
      <div class="footer-info__content-social">
        <NuxtLink class="footer-info__content-social-link" to="/">
          <Icon size="30" name="social:tg" />
        </NuxtLink>
        <NuxtLink class="footer-info__content-social-link" to="/">
          <Icon size="30" name="social:instagram" />
        </NuxtLink>
        <NuxtLink class="footer-info__content-social-link" to="/">
          <Icon size="30" name="social:openai" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer-info {
  margin-top: 20px;
  border-top: 1px solid #ebebeb;
  padding-block: 35px;
  font-size: 14px;
  color: #888d8e;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: end;
    @include mediaLaptop {
      align-items: center;
    }

    &-data {
      padding-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      &-links {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: start;

        @include mediaLaptop {
          flex-direction: row;
          gap: 30px;
        }

        &-item {
          font-size: 14px;
          color: $teal;
          transition: color $fast_ease;

          &:hover {
            color: #165b6b;
          }
        }
      }

      &-copyright {
        font-size: 14px;
        color: $bg_footer;
        @include mediaLaptop {
          margin-bottom: 16px;
        }
      }
    }

    &-social {
      display: flex;
      gap: 10px;

      &-link {
        transition: all $fast_ease;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
