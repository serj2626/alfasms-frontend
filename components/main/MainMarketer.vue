<script lang="ts" setup></script>
<template>
  <section id="main-marketer" class="main-marketer container">
    <BaseTypography class="main-marketer__title" title="Нам доверяют сотни тысяч маркетологов" view="h2" />
    <div class="main-marketer__achievements">
      <NuxtLink
        href="https://www.capterra.com/p/146369/SendPulse/reviews/#reviews"
        class="main-marketer__achievements-item"
        target="_blank"
      >
        <img
          class="main-marketer__achievements-item-img"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/logo-capterra.svg"
          alt="Capterra rating"
          width="128"
          height="28"
        />
        <div class="main-marketer__achievements-item-rating">
          <p class="main-marketer__achievements-item-rating-current">4.6</p>
          <p class="main-marketer__achievements-item-rating-total">/5</p>
        </div>
        <img
          class="achievements__img--stars js-nolazy"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/stars-45.svg"
          alt="rating"
          width="134"
          height="24"
        />
      </NuxtLink>
      <NuxtLink
        href="https://www.g2.com/products/sendpulse/reviews"
        class="main-marketer__achievements-item"
        target="_blank"
      >
        <img
          class="main-marketer__achievements-item-img"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/logo-g2.svg"
          alt="G2 rating"
          width="35"
          height="35"
        />
        <div class="main-marketer__achievements-item-rating">
          <p class="main-marketer__achievements-item-rating-current">4.6</p>
          <p class="main-marketer__achievements-item-rating-total">/5</p>
        </div>
        <img
          class="achievements__img--stars js-nolazy"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/stars-45.svg"
          alt="rating"
          width="134"
          height="24"
        />
      </NuxtLink>
      <NuxtLink
        href="https://www.getapp.com/marketing-software/a/sendpulse/reviews/"
        class="main-marketer__achievements-item"
        target="_blank"
      >
        <img
          class="main-marketer__achievements-item-img"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/logo-getapp.svg"
          alt="GetApp rating"
          width="131"
          height="24"
        />
        <div class="main-marketer__achievements-item-rating">
          <p class="main-marketer__achievements-item-rating-current">4.6</p>
          <p class="main-marketer__achievements-item-rating-total">/5</p>
        </div>
        <img
          class="achievements__img--stars js-nolazy"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/stars-45.svg"
          alt="rating"
          width="134"
          height="24"
        />
      </NuxtLink>
      <NuxtLink
        href="https://www.softwareadvice.com/crm/sendpulse-profile/"
        class="main-marketer__achievements-item"
        target="_blank"
      >
        <img
          class="main-marketer__achievements-item-img"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/logo-sa.svg"
          alt="Gartner rating"
          width="157"
          height="18"
        />
        <div class="main-marketer__achievements-item-rating">
          <p class="main-marketer__achievements-item-rating-current">4.6</p>
          <p class="main-marketer__achievements-item-rating-total">/5</p>
        </div>
        <img
          class="achievements__img--stars js-nolazy"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/stars-45.svg"
          alt="rating"
          width="134"
          height="24"
        />
      </NuxtLink>
      <NuxtLink
        href="https://www.trustpilot.com/review/sendpulse.com"
        class="main-marketer__achievements-item"
        target="_blank"
      >
        <img
          class="main-marketer__achievements-item-img"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/TP-Logo.svg"
          alt="Trustpilot rating"
          width="134"
          height="35"
        />
        <div class="main-marketer__achievements-item-rating">
          <p class="main-marketer__achievements-item-rating-current">4.5</p>
          <p class="main-marketer__achievements-item-rating-total">/5</p>
        </div>
        <img
          class="achievements__img--stars js-nolazy"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/stars-45.svg"
          alt="rating"
          width="134"
          height="24"
        />
      </NuxtLink>
      <NuxtLink
        href="https://sourceforge.net/software/product/SendPulse/"
        class="main-marketer__achievements-item"
        target="_blank"
      >
        <img
          class="main-marketer__achievements-item-img"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/logo-sf.svg"
          alt="Gartner rating"
          width="147"
          height="23"
        />
        <div class="main-marketer__achievements-item-rating">
          <p class="main-marketer__achievements-item-rating-current">5</p>
          <p class="main-marketer__achievements-item-rating-total">/5</p>
        </div>
        <img
          class="achievements__img--stars js-nolazy"
          src="//www.spcdn.org/templates/sendpulsev1/img/achievements-icon/stars-5.svg"
          alt="rating"
          width="134"
          height="24"
        />
      </NuxtLink>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.main-marketer {
  padding-top: 140px;
  margin-bottom: 16px;

  &__title {
    text-align: center;
    margin-bottom: 80px;
  }

  &__achievements {
    display: flex;

    flex-flow: wrap;
    justify-content: center;
    gap: 60px;

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      &-img{
        margin-bottom: 20px;
      }

      &-rating {
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
