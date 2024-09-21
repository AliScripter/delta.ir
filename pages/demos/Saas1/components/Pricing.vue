<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-5">
        <h2 class="mb-4">برنامه‌های رقابتی ما را کشف کنید</h2>
        <p class="mb-0">
          موفقیت آژانس شما شایسته استراتژی قیمت‌گذاری است که با اهداف شما هم‌راستا باشد. ما مجموعه‌ای از برنامه‌های قیمت‌گذاری را ارائه می‌دهیم که برای برآورده کردن نیازهای منحصر به فرد شما طراحی شده است.
        </p>
      </div>

      <Swiper
        :modules="[Pagination]"
        :loop="false"
        :spaceBetween="40"
        :pagination="{
          el: '.swiper-pagination'
        }"
        :breakpoints="{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }"
      >
        <SwiperSlide v-for="(plan, idx) in pricingData" :key="idx">
          <PricingCard :plan="plan" />
        </SwiperSlide>

        <div class="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
      </Swiper>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { pricingData } from '@/views/demos/Saas1/data'
import PricingCard from '@/views/demos/Saas1/components/PricingCard.vue'
</script>
