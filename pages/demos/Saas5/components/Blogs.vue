<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col lg="8" xl="4" class="text-center text-xl-start mx-auto">
          <h2 class="mb-4 h3">بینش‌ها و به‌روزرسانی‌های ما را کشف کنید</h2>
          <p class="mb-0">
            دنیای مقالات را بررسی کنید که شامل موضوعات مختلفی از بهترین شیوه‌ها و داستان‌های موفقیت تا آموزش‌ها و به‌روزرسانی‌های محصولات است.
          </p>

          <div
            class="d-flex justify-content-center justify-content-xl-start gap-3 position-relative mt-5 mt-xl-6"
          >
            <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev rtl:-scale-x-100">
              <BIconArrowLeft style="height: 16px; width: 16px" />
            </a>
            <a href="#" class="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next rtl:-scale-x-100">
              <BIconArrowRight style="height: 16px; width: 16px" />
            </a>
          </div>
        </b-col>

        <b-col xl="8" class="mt-5 mt-xl-0">
          <Swiper
            :modules="[Navigation]"
            loop
            :spaceBetween="40"
            :grabCursor="true"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
            :breakpoints="{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 }
            }"
          >
            <SwiperSlide v-for="(blog, idx) in blogs" :key="idx">
              <BlogCard :blog="blog" />
            </SwiperSlide>

            <SwiperSlide>
              <article class="card bg-primary p-4 overflow-hidden h-100">
                <div class="position-absolute end-0 bottom-0 mb-n5 me-n7">
                  <img :src="patternImg" class="opacity-4 rtl:-scale-x-100" alt="" />
                </div>

                <b-card-body class="z-index-1 p-0">
                  <div class="d-flex justify-content-between mb-5">
                    <div class="badge bg-dark text-white small">تبلیغات</div>
                    <a
                      href="#"
                      class="mb-0 text-white small"
                      tabindex="0"
                      role="button"
                      data-bs-container="body"
                      data-bs-toggle="popover"
                      data-bs-trigger="focus"
                      data-bs-placement="top"
                      data-bs-content="شما این تبلیغ را می‌بینید زیرا فعالیت شما با مخاطبان مورد نظر سایت ما مطابقت دارد."
                    >
                      <BIconInfoCircle class="ps-1" /> حمایت شده
                    </a>
                  </div>
                  <b-card-title tag="h5"
                    >همیشه می‌خواستید برنامه‌نویس شوید؟ این یک فرصت عالی برای تحقق رویای شماست.</b-card-title
                  >
                </b-card-body>

                <b-card-footer
                  class="bg-transparent d-flex justify-content-between align-items-center p-0 mt-4 mt-sm-8 z-index-1"
                >
                  <div class="d-flex align-items-center">
                    <div class="avatar flex-shrink-0 me-2">
                      <div class="avatar-img rounded-circle bg-dark">
                        <span
                          class="text-white position-absolute top-50 start-50 translate-middle fw-bold small"
                          >وردپرس</span
                        >
                      </div>
                    </div>
                    <span class="heading-color fw-semibold">پوستر وب</span>
                  </div>
                  <a href="#" class="btn btn-sm btn-white mb-0">هم‌اکنون اقدام کنید</a>
                </b-card-footer>
              </article>
            </SwiperSlide>
          </Swiper>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { blogs } from '@/views/demos/Saas5/data'
import BlogCard from '@/views/demos/Saas5/components/BlogCard.vue'
import { BIconArrowLeft, BIconArrowRight, BIconInfoCircle } from 'bootstrap-icons-vue'

import patternImg from '@/assets/images/elements/pattern.svg'
</script>
