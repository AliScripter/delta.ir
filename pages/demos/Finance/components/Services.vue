<template>
  <Section class="pb-0">
    <b-container>
      <b-row class="mb-4 mb-md-6">
        <b-col md="6">
          <h2 class="mb-0">راه‌حل‌های سفارشی برای نیازهای مالی شما</h2>
        </b-col>

        <b-col md="4" class="ms-auto">
          <p>
            ما دامنه وسیعی از خدمات مالی را ارائه می‌دهیم که برای برآوردن اهداف و
            آرزوهای خاص شما طراحی شده است.
          </p>

          <div class="d-flex gap-3 position-relative mt-3">
            <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev-team rtl:-scale-x-100">
              <BIconArrowLeft style="height: 16px; width: 16px" />
            </a>
            <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next-team rtl:-scale-x-100">
              <BIconArrowRight style="height: 16px; width: 16px" />
            </a>
          </div>
        </b-col>
      </b-row>

      <Swiper
        class="mt-2 mt-md-4"
        :modules="[Autoplay, Navigation]"
        :autoplay="{
          delay: 2000
        }"
        :spaceBetween="40"
        :loop="false"
        :navigation="{
          nextEl: '.swiper-button-next-team',
          prevEl: '.swiper-button-prev-team'
        }"
        :breakpoints="{
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 3 }
        }"
      >
        <SwiperSlide v-for="(service, idx) in services" :key="idx">
          <ServiceCard :service="service" />
        </SwiperSlide>
      </Swiper>
    </b-container>
  </Section>
</template>

<script lang="ts" setup>
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-icons-vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { services } from '@/views/demos/Finance/data'
import ServiceCard from '@/views/demos/Finance/components/ServiceCard.vue'
import { Autoplay, Navigation } from 'swiper/modules'
</script>
