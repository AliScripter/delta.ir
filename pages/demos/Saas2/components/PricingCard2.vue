<template>
  <b-card no-body class="p-4 p-sm-5">
    <h5>{{ plan.title }}</h5>
    <p class="small mb-0">{{ plan.description }}</p>
    <hr class="my-4" />
    <p class="heading-color fw-normal mb-2">نگاهی سریع به تمام ویژگی‌ها</p>
    <ul class="list-group list-group-borderless mb-2 mb-sm-4">
      <li
        class="list-group-item d-flex small mb-0"
        v-for="(feature, idx) in plan.features"
        :key="idx"
      >
        <component :is="feature.icon" class="text-primary me-1 mt-1" />{{ feature.title }}
      </li>
    </ul>

    <span v-if="lang==='en'" class="mb-4 heading-color">
      <span class="h2 plan-price">{{ currency }}{{ plan.price }}</span> /{{ i18nDuration(duration, lang) }}</span
    >
    <span v-else-if="lang==='fa'" class="mb-4 heading-color">
      <span class="h2 plan-price">{{ plan.price }} <small class="fs-5">{{ currency }}</small></span> /{{ i18nDuration(duration, lang) }}</span
    >
    <router-link
      class="btn btn-primary icon-link icon-link-hover justify-content-center"
      :to="{ name: plan.route?.name, params: plan.route?.params }"
      >شروع کنید
      <BIconArrowRight class="rtl:-scale-x-100" />
    </router-link>
  </b-card>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { currency } from '@/helpers'
import type { PropType } from 'vue'
import type { PricingPlanType } from '@/types'

defineProps({
  plan: {
    type: Object as PropType<PricingPlanType>,
    required: true
  },
  duration: {
    type: String as PropType<'week' | 'month' | 'year'>,
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
