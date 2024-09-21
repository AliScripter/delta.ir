<template>
  <section class="bg-dark position-relative price-wrap" data-bs-theme="dark">
    <figure class="position-absolute top-0 start-0 ms-n9">
      <svg
        class="opacity-2"
        width="424"
        height="405"
        viewBox="0 0 424 405"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="212"
          cy="202.5"
          rx="212"
          ry="202.5"
          fill="url(#paint0_linear_153_3831)"
        ></ellipse>
        <defs>
          <linearGradient
            id="paint0_linear_153_3831"
            x1="212"
            y1="0"
            x2="212"
            y2="405"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0"></stop>
            <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0.5"></stop>
          </linearGradient>
        </defs>
      </svg>
    </figure>

    <b-container class="position-relative">
      <b-row class="g-4 g-lg-6">
        <b-col xl="4">
          <span class="text-primary fw-bold text-uppercase">قیمت‌گذاری</span>
          <h2 class="mb-4 mt-3">راه‌حل‌های قیمت‌گذاری مقرون‌به‌صرفه</h2>
          <p class="mb-5">
            مدل قیمت‌گذاری ما با توجه به آژانس شما طراحی شده است. نرخ‌های شفاف و گزینه‌های انعطاف‌پذیر ما را کشف کنید که به‌طور خاص برای نیازهای منحصر به فرد شما تنظیم شده است.
          </p>
          <form class="d-flex align-items-center">
            <span class="fw-semibold heading-color">ماهانه</span>
            <div class="form-check form-switch form-check-lg mx-2 mb-0" @click="togglePlan">
              <input
                class="form-check-input mt-0 price-toggle"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
            <div class="position-relative">
              <span class="fw-semibold heading-color">سالانه</span>
              <span
                class="badge bg-danger position-absolute top-0 start-100 translate-middle mt-n2 ms-2 ms-md-5"
                >۲۰٪ صرفه‌جویی</span
              >
            </div>
          </form>
        </b-col>

        <template v-for="(item, idx) in pricingData" :key="idx">
          <template v-for="(plan, idx) in item.plans" :key="idx">
            <b-col md="6" xl="4" v-if="item.duration == selectedPlan">
              <PricingCard :duration="item.duration" :plan="plan" />
            </b-col>
          </template>
        </template>

        <template v-for="(item, idx) in pricingData2" :key="idx">
          <template v-for="(plan, idx) in item.plans" :key="idx">
            <b-col md="6" xl="4" v-if="item.duration == selectedPlan">
              <PricingCard2 :duration="item.duration" :plan="plan" />
            </b-col>
          </template>
        </template>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import PricingCard from '@/views/demos/Saas2/components/PricingCard.vue'
import PricingCard2 from '@/views/demos/Saas2/components/PricingCard2.vue'
import { ref } from 'vue'
import { pricingData, pricingData2 } from '@/views/demos/Saas2/data'

let selectedPlan = ref<'month' | 'year'>('month')

const togglePlan = () => {
  if (selectedPlan.value === 'month') {
    selectedPlan.value = 'year'
  } else {
    selectedPlan.value = 'month'
  }
}
</script>
