<template>
  <b-card no-body class="card-body border rounded p-md-4" v-if="!plan.isPopular">
    <h6 class="mb-2">{{ plan.title }}</h6>
    <div class="d-flex align-items-center">
      <span v-if="lang==='en'" class="h1 mb-0">{{ currency }}{{ plan.price }}</span>
      <span v-else-if="lang==='fa'" class="h1 mb-0">{{ plan.price }} <small class="fs-4">{{ currency }}</small></span>
      <div class="ms-3">
        <p class="heading-color mb-0">برای هر کاربر</p>
        <p class="heading-color mb-0">در ماه</p>
      </div>
    </div>
    <span>ویژگی پایه برای حداکثر ۱۰ کاربر</span>

    <router-link
      :to="{ name: plan.route?.name, params: plan.route?.params }"
      class="btn btn-dark mt-4"
      >شروع کنید</router-link
    >
    <a href="#" class="btn btn-outline-light">چت با فروش</a>

    <hr class="my-4" />

    <h6 class="mb-0">ویژگی‌ها</h6>
    <span>همه چیز در برنامه پایه</span>

    <ul class="list-group list-group-borderless border-0 mb-0 mt-2">
      <li
        class="list-group-item d-flex mb-0 icons-center"
        v-for="(feature, idx) in plan.features"
        :key="idx"
      >
        <component :is="feature.icon" class="text-primary me-2" />{{ feature.title }}
      </li>
    </ul>
  </b-card>

  <b-card no-body v-else class="card-body bg-dark border rounded p-md-4" data-bs-theme="dark">
    <h6 class="mb-2 text-primary">{{ plan.title }}</h6>
    <div class="d-flex align-items-center">
      <span v-if="lang==='en'" class="h1 mb-0">{{ currency }}{{ plan.price }}</span>
      <span v-else-if="lang==='fa'" class="h1 mb-0">{{ plan.price }} <small class="fs-4">{{ currency }}</small></span>
      <div class="ms-3">
        <p class="heading-color mb-0">برای هر کاربر</p>
        <p class="heading-color mb-0">در ماه</p>
      </div>
    </div>
    <span>ویژگی پایه برای حداکثر ۱۰ کاربر</span>

    <router-link
      :to="{ name: plan.route?.name, params: plan.route?.params }"
      class="btn btn-primary mt-4"
      >شروع کنید</router-link
    >
    <a href="#" class="btn btn-outline-white">چت با فروش</a>

    <hr class="my-4" />

    <h6 class="mb-0">ویژگی‌ها</h6>
    <span>همه چیز در طرح پایه و</span>

    <ul class="list-group list-group-borderless border-0 mb-0 mt-2">
      <li
        class="list-group-item d-flex mb-0 icons-center"
        v-for="(feature, idx) in plan.features"
        :key="idx"
      >
        <component :is="feature.icon" class="text-primary me-2" />{{ feature.title }}
      </li>
    </ul>
  </b-card>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { currency } from '@/helpers'
import type { PropType } from 'vue'
import type { PricingPlanType } from '@/types'

defineProps({
  plan: {
    type: Object as PropType<PricingPlanType>,
    required: true
  }
})

const lang: string | undefined = inject('lang')
</script>
