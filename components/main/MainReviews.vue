<script lang="ts" setup></script>
<template>
  <section class="main-reviews" id="main-reviews">
    <div class="container">
      <div class="main-reviews__content">
        <h2 class="main-reviews__content-title">Видео отзывы</h2>
        <div class="main-reviews__content-list">
          <div class="main-reviews__content-list-item">
            <NuxtImg
              class="main-reviews__content-list-item-img"
              src="reviews/one_review.jpg"
              alt="reviews"
            />
          </div>
          <div class="main-reviews__content-list-item">
            <NuxtImg
              class="main-reviews__content-list-item-img"
              src="reviews/second_review.jpg"
              alt="reviews"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-reviews {
  padding-bottom: 140px;

  &__content {
    &-title {
      font-size: 48px;
      font-weight: 600;
      line-height: 1.2;
      text-align: center;
      margin-bottom: 80px;
    }

    &-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;

      &-item {
        position: relative;
        height: 300px;
        
        &-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &::before {
          content: "";
          position: absolute;
          display: block;
          top: 50%;
          left: 50%;
          height: 60px;
          width: 60px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.5);
        }
        &::after {
          content: "";
          position: absolute;
          display: block;
          top: 50%;
          left: 50%;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background-color: $txt_white;
          
        }
      }
    }
  }
}
</style>
