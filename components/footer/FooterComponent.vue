<script lang="ts" setup>
import { emailLinks } from "~/assets/data/email-links";
import { usefulLinks } from "~/assets/data/useful-links";
import { aboutLinks } from "~/assets/data/about-links";
import { programmLinks } from "~/assets/data/programm-links";
import { servicesLinks } from "~/assets/data/services-links";
import { chatBotLinks } from "~/assets/data/chatbot-links";
</script>
<template>
  <div class="footer-component">
    <div class="footer-component__content container">
      <div class="footer-component__content-main">
        <FooterLinks
          class="footer-component__content-main-email"
          title="email"
          :links="emailLinks"
        />
        <FooterLinks
          class="footer-component__content-main-chatbot"
          title="Чат-боты"
          :links="chatBotLinks"
        />
        <FooterLinks
          class="footer-component__content-main-services"
          title="Сервисы"
          :links="servicesLinks"
        />
        <FooterLinks
          class="footer-component__content-main-useful"
          title="Полезное"
          :links="usefulLinks"
        />
        <FooterLinks
          class="footer-component__content-main-about"
          x
          title="О компании"
          :links="aboutLinks"
        />
        <FooterLinks
          class="footer-component__content-main-programm"
          title="Партнерские программы"
          :links="programmLinks"
        />
      </div>
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
      grid-template-columns: 1fr;
      gap: 30px;

      grid-template-areas:
        "email"
        "chatbot"
        "services"
        "about"
        "useful"
        "programm";


      @include mediaMobile {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        grid-template-areas:
          "email chatbot"
          "services useful"
          "about programm"
      }

      @include mediaLaptop {
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
          "email chatbot services useful"
          "email chatbot about programm"
      }

      &-email {
        grid-area: email;
      }
      &-chatbot {
        grid-area: chatbot;
      }
      &-services {
        grid-area: services;
      }
      &-useful {
        grid-area: useful;
      }
      &-about {
        grid-area: about;
      }
      &-programm {
        grid-area: programm;
      }
    }
  }
}
.iconify {
  width: 146px;
  height: 47px;
  transition: opacity $fast_ease;
  &:hover {
    opacity: 0.7;
  }
}
</style>
