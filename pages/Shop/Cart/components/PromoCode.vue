<template>
  <b-card no-body class="border p-4">
    <b-card-header class="p-0 pb-3">
      <b-card-title tag="h5" class="mb-0">کد تبلیغاتی</b-card-title>

      <b-form class="input-group mt-4">
        <b-form-input class="rounded me-1" type="email" placeholder="اینجا تایپ کنید.." />
        <b-button variant="dark" type="button" class="rounded-2 mb-0">اعمال</b-button>
      </b-form>
    </b-card-header>

    <b-card-body class="p-0 pb-3 mt-2">
      <ul class="list-group list-group-borderless">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>جمع کل</span>
          <span v-if="lang==='en'" class="heading-color fw-semibold mb-0">{{ currency }}{{ useShopping.getCalculatedOrder().total }}</span>
          <span v-else-if="lang==='fa'" class="heading-color fw-semibold mb-0">{{ useShopping.getCalculatedOrder().total }} {{ currency }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>هزینه خدمات</span>
          <span v-if="lang==='en'" class="heading-color fw-semibold mb-0">-{{ currency }}{{ useShopping.getCalculatedOrder().totalDiscount }}</span>
          <span v-else-if="lang==='fa'" class="heading-color fw-semibold mb-0"><bdi>-{{ useShopping.getCalculatedOrder().totalDiscount }}</bdi> {{ currency }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>مالیات</span>
          <span v-if="lang==='en'" class="heading-color fw-semibold mb-0">{{ currency }}{{ useShopping.getCalculatedOrder().tax }}</span>
          <span v-else-if="lang==='fa'" class="heading-color fw-semibold mb-0">{{ useShopping.getCalculatedOrder().tax }} {{ currency }}</span>
        </li>
      </ul>
    </b-card-body>

    <b-card-footer class="bg-transparent border-top p-0 pt-3">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <span class="heading-color fw-normal">قابل پرداخت الآن</span>
        <span v-if="lang==='en'" class="h6 mb-0">{{ currency }}{{ useShopping.getCalculatedOrder().orderTotal.toFixed(2) }}</span>
        <span v-else-if="lang==='fa'" class="h6 mb-0">{{ useShopping.getCalculatedOrder().orderTotal.toFixed(0) }} {{ currency }}</span>
      </div>

      <div class="d-grid">
        <button class="btn btn-lg btn-primary mb-0">ادامه به پرداخت</button>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { currency } from '@/helpers'
import { useShoppingStore } from '@/stores/shopping-context'

const lang: string | undefined = inject('lang')

const useShopping = useShoppingStore()
</script>
