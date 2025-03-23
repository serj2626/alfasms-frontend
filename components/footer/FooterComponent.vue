<script lang="ts" setup>
import { emailLinks } from "~/assets/data/email-links";
import { usefulLinks } from "~/assets/data/useful-links";
import { aboutLinks } from "~/assets/data/about-links";
import { programmLinks } from "~/assets/data/programm-links";
import { servicesLinks } from "~/assets/data/services-links";
import { chatBotLinks } from "~/assets/data/chatbot-links";
</script>
<template>
  <div class="footer-component container">
    <div class="footer-component__content">
      <div class="footer-component__content-main">
        <FooterLinks title="email" :links="emailLinks" />
        <FooterLinks title="Чат-боты" :links="chatBotLinks" />

        <div class="footer-component__main-services-about">
          <FooterLinks title="Сервисы" :links="servicesLinks" />
          <FooterLinks title="О компании" :links="aboutLinks" />
        </div>

        <div class="footer-component__main-useful-about">
          <FooterLinks title="Полезное" :links="usefulLinks" />
          <FooterLinks title="Партнерские программы" :links="programmLinks" />
        </div>
      </div>
      <!-- <div class="footer-component__content-btns">
        <NuxtLink class="footer-component__content-btns-appstore" to="/">
          <Icon size="30" name="social:appstore" />
        </NuxtLink>
        <NuxtLink class="footer-component__content-btns-googleplay" to="/">
          <Icon size="30" name="social:googleplay" />
        </NuxtLink>
      </div> -->
    </div>

    <FooterInfo />
  </div>
</template>
<style lang="scss" scoped>
.footer-component {
  border-top: 1px solid #ddd;
  padding-top: 50px;

  &__content {
    position: relative;


    &-main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;

      @include mediaTablet {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      @include mediaDesktop{
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
      }

      &-services-about,
      &-useful-about {
        display: flex;
        flex-direction: column;
        gap: 35px;
      }
    }

    // &-btns {
    //   position: absolute;
    //   bottom: 20px;

    //   display: flex;
    //   gap: 15px;

    //   &-appstore,
    //   &-googleplay {
    //   }
    // }
  }
}
</style>
