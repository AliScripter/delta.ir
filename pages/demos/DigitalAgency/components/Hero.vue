<template>
  <section class="pt-0">
    <Swiper
      class="overflow-hidden"
      :modules="[EffectFade, Autoplay, Pagination]"
      :loop="true"
      :effect="'fade'"
      :speed="1000"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide>
        <b-card
          no-body
          class="overflow-hidden min-vh-100 rounded-0"
          :style="`background:url(${backgroundImg10}) no-repeat; background-size:cover; background-position:center;`"
        >
          <div class="bg-overlay bg-linear-overlay"></div>

          <div class="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
            <b-container>
              <b-row>
                <b-col sm="11" lg="8" xl="7" class="text-center m-auto">
                  <span class="bg-white bg-opacity-10 text-white small rounded-3 px-3 py-2"
                    >🚀 #بهترین آژانس نرم‌افزار در جهان</span
                  >
                  <h1 class="text-white display-4 my-4">
                    پیشتاز در نوآوری <span class="text-primary">نرم‌افزار</span>
                  </h1>
                  <p class="text-white mb-5">
                    چه شما به بازی‌های ویدیویی علاقه‌مند باشید و چه به دنبال راهی شگفت‌انگیز برای فرار از واقعیت باشید، محصول واقعیت مجازی ما دروازه‌ای به سوی هیجان بی‌پایان و ماجراجویی است.
                  </p>
                  <a class="btn btn-lg btn-white icon-link icon-link-hover mb-0" href="#"
                    >اکنون شروع کنید<BIconArrowRight class="bi rtl:-scale-x-100" />
                  </a>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card>
      </SwiperSlide>

      <SwiperSlide>
        <b-card
          no-body
          class="overflow-hidden min-vh-100 rounded-0"
          :style="`background:url(${backgroundImg9}) no-repeat; background-size:cover; background-position:center;`"
        >
          <div class="bg-overlay bg-linear-overlay"></div>

          <div class="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
            <b-container>
              <b-row>
                <b-col sm="11" lg="8" class="mt-auto">
                  <h1 class="text-white display-4 mb-4">
                    <span class="fw-light">کسب و کار</span> خود را با
                    <span class="fw-light">نوآوری</span> رونق ببخشید
                  </h1>
                  <p class="text-white mb-5">
                    چه شما به بازی‌های ویدیویی علاقه‌مند باشید و چه به دنبال راهی شگفت‌انگیز برای فرار از واقعیت باشید، محصول واقعیت مجازی ما دروازه‌ای به سوی هیجان بی‌پایان و ماجراجویی است.
                  </p>
                  <a class="btn btn-lg btn-primary icon-link icon-link-hover mb-0" href="#"
                    >خدمات ما را بررسی کنید<BIconArrowRight class="bi rtl:-scale-x-100" />
                  </a>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-card>
      </SwiperSlide>

      <div class="swiper-pagination swiper-pagination-line position-absolute bottom-0 mb-3"></div>
    </Swiper>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Autoplay, Pagination } from 'swiper/modules'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import backgroundImg9 from '@/assets/images/bg/09.jpg'
import backgroundImg10 from '@/assets/images/bg/10.jpg'
</script>
