<template>
  <div
    :class="
      !idx
        ? 'd-md-flex justify-content-between mb-4 mb-sm-0 ms-xl-5'
        : 'text-center text-lg-start ms-md-5 ms-lg-0 ms-xl-5'
    "
  >
    <div class="text-center text-lg-start">
      <div class="badge bg-primary mb-3">{{ plan.badge }}</div>
      <h6 class="mb-4">
        <span class="h1 mb-0 plan-price">
          <span v-if="lang==='en'">{{ currency }}{{ plan.price }}</span>
          <span v-else-if="lang==='fa'">{{ plan.price }} <small class="fs-4">{{ currency }}</small></span>
        </span> /{{ i18nDuration(duration, lang) }}
      </h6>
      <h6>نگاهی سریع به تمام ویژگی‌ها</h6>

      <ul class="list-group list-group-borderless mb-2 mb-sm-4">
        <li
          class="list-group-item heading-color mb-0"
          v-for="(feature, idx) in plan.features"
          :key="idx"
        >
          <component :is="feature.icon" class="text-primary me-1" />{{ feature.title }}
        </li>
      </ul>
      <a href="#" class="btn btn-dark">آغاز دوره آزمایشی 7 روزه رایگان</a>
    </div>
    <div class="vr opacity-1 ms-md-5 d-none d-md-block" v-if="!idx"></div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType, inject } from 'vue'
import { currency } from '@/helpers'
import type { PricingPlanType } from '@/types'

defineProps({
  plan: {
    type: Object as PropType<PricingPlanType>,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  idx: {
    type: Number,
    required: true
  }
})

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
