<script lang="ts" setup>
import { emailLinks } from '~/assets/data/email-links';
import { usefulLinks } from '~/assets/data/useful-links';
import { aboutLinks } from '~/assets/data/about-links';
import { programmLinks } from '~/assets/data/programm-links';
import { servicesLinks } from '~/assets/data/services-links';
import { chatBotLinks } from '~/assets/data/chatbot-links';
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
          title="О компании"
          :links="aboutLinks"
        />
        <FooterLinks
          class="footer-component__content-main-programm"
          title="Партнерские программы"
          :links="programmLinks"
        />
      </div>
      <div class="footer-component__content-social">
        <Icon size="30" name="social:appstore" />
        <Icon size="30" name="social:googleplay" />
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

    &-social {
      // position: absolute;
      // bottom: 0;
      left: 15px;
      display: flex;
      gap: 12px;
      align-items: center;
      margin-top: 20px;
      @include mediaLaptop {
        margin-top: -50px;
      }
    }

    &-main {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;

      grid-template-areas:
        'email'
        'chatbot'
        'services'
        'about'
        'useful'
        'programm';

      @include mediaMobile {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        grid-template-areas:
          'email chatbot'
          'services useful'
          'about programm';
      }

      @include mediaLaptop {
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        grid-template-areas:
          'email chatbot services useful'
          'email chatbot about programm';
      }

      &-email {
        grid-area: email;
        @include mediaMobile {
          grid-column: 1/2;
          grid-row: 1/2;
        }
        @include mediaLaptop {
          grid-column: 1/2;
          grid-row: 1/4;
        }
      }
      &-chatbot {
        grid-area: chatbot;
        @include mediaMobile {
          grid-column: 2/3;
          grid-row: 1/2;
        }
        @include mediaLaptop {
          grid-column: 2/3;
          grid-row: 1/4;
        }
      }
      &-services {
        grid-area: services;
        @include mediaMobile {
          grid-column: 1/2;
          grid-row: 2/4;
        }
        @include mediaLaptop {
          grid-column: 3/4;
          grid-row: 1/3;
        }
      }
      &-useful {
        grid-area: useful;
        @include mediaMobile {
        }
        @include mediaLaptop {
          grid-column: 4/5;
          grid-row: 1/2;
        }
      }
      &-about {
        grid-area: about;
        @include mediaMobile {
          grid-column: 1/2;
          grid-row: 4/5;
        }
        @include mediaLaptop {
          grid-column: 3/4;
          grid-row: 3/4;
        }
        @include mediaLaptop() {
        }
      }
      &-programm {
        grid-area: programm;
        @include mediaMobile {
        }
        @include mediaLaptop {
          grid-column: 4/5;
          grid-row: 2/3;
        }
      }
    }
  }
}
.iconify {
  width: 146px;
  height: 47px;
  transition: opacity $fast_ease;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
}
</style>
