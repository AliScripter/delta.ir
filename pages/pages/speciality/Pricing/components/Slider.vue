<template>
  <b-container class="mt-n9">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :autoplay="{
        delay: 2000
      }"
      :slidesPerView="1"
      :spaceBetween="30"
      :pagination="{
        el: '.swiper-pagination'
      }"
      :breakpoints="{
        576: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }"
      wrapperClass="align-items-center pt-5"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index" :class="slide.badge && 'overflow-visible'">
        <b-card no-body class="border p-0" :class="`${slide.border} ${slide.shadow && 'shadow'}`">
          <div
            class="bg-primary text-white rounded position-absolute top-0 start-50 translate-middle px-2 py-1"
            v-if="slide.badge"
          >
            محبوب‌ترین
          </div>

          <b-card-header
            class="border-bottom p-4"
            :class="{ 'bg-primary bg-opacity-10 border-primary border-opacity-25': slide.badge }"
          >
            <div class="icon-lg rounded-circle mb-3 flex-centered" :class="slide.iconBgClass">
              <component :is="slide.icon" :class="slide.iconClass" class="fa-lg lh-1" />
            </div>
            <h6 class="mb-3">{{ slide.title }}</h6>
            <p class="mb-0">
              <span v-if="lang==='en'" class="h2 mb-0 plan-price">{{ currency }}{{ plan ? slide.price.yearly : slide.price.monthly }}</span>
              <span v-else-if="lang==='fa'" class="h2 mb-0 plan-price">
                {{ plan ? slide.price.yearly : slide.price.monthly }}
                <small class="fs-5">{{ currency }}</small>
              </span>
              /{{ i18nDuration(!plan ? 'month' : 'year', lang) }}
            </p>
            <small>{{ slide.description }}</small>
          </b-card-header>

          <b-card-body class="p-4" :class="{ 'bg-primary bg-opacity-10': slide.badge }">
            <div class="text-center text-lg-start">
              <h6 :class="{ 'heading-color': slide.badge }">نگاهی سریع به تمام ویژگی‌ها</h6>
              <ul class="list-group list-group-borderless mb-2 mb-sm-4">
                <li
                  class="list-group-item d-flex heading-color mb-0 icons-center"
                  v-for="(feature, fIndex) in slide.features"
                  :key="fIndex"
                >
                  <BIconCheckLg class="me-1" :class="slide.featureIconClass" />
                  {{ feature }}
                </li>
              </ul>
              <a href="#" class="btn w-100" :class="slide.badge ? 'btn-primary mb-0' : 'btn-dark'">
                شروع کنید
              </a>
            </div>
          </b-card-body>
        </b-card>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
  </b-container>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import { currency } from '@/helpers'
import { slides } from '@/views/pages/speciality/Pricing/data'
import { BIconCheckLg } from 'bootstrap-icons-vue'

defineProps<{ plan: boolean }>()

const lang: string | undefined = inject('lang')

const i18nDuration = (d, l) => {
  switch (`${d}-${l}`) {
    case 'month-fa':
      return 'ماهانه'
    case 'year-fa':
      return 'سالانه'
    default: return d
  }
}
</script>
