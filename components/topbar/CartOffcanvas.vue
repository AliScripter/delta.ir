<template>
  <li class="nav-item position-relative ms-2 ms-sm-3 me-3 me-lg-0">
    <button class="btn btn-light border btn-round mb-0 flex-centered" role="button" @click="click">
      <BIconCart3 class="fa-fw" />
    </button>
    <span
      class="position-absolute top-0 start-100 translate-middle badge smaller rounded-circle bg-primary mt-xl-2 ms-n1"
      >{{ useShopping.state.cartItems.length }}
      <span class="visually-hidden">پیام‌های خوانده نشده</span>
    </span>
  </li>

  <b-offcanvas
    v-model="show"
    :placement="rtl ? 'start' : 'end'"
    bodyClass="d-flex flex-column px-3 gap-5"
    title="سبد خرید شما"
    headerClass="justify-content-between border-bottom px-3"
    tabindex="-1"
    id="offcanvasMenu"
  >
    <CartItem v-for="(item, idx) in useShopping.state.cartItems" :key="idx" :item="item" />
    <div class="mt-auto">
      <div class="d-flex justify-content-between mb-2">
        <span class="heading-color fw-semibold">جمع کل</span>
        <h6 v-if="lang==='en'" class="text-success mb-0">
          {{ currency }}{{ Math.ceil(useShopping.getCalculatedOrder().orderTotal) }}
        </h6>
        <h6 v-else-if="lang==='fa'" class="text-success mb-0">
          {{ Math.ceil(useShopping.getCalculatedOrder().orderTotal) }} {{ currency }}
        </h6>
      </div>
      <div class="d-grid">
        <router-link :to="{ name: 'shop.checkout' }" class="btn btn-lg btn-dark mb-0"
          >ادامه به پرداخت</router-link
        >
      </div>
    </div>
  </b-offcanvas>
</template>

<script lang="ts" setup>
import { BIconCart3 } from 'bootstrap-icons-vue'
import CartItem from '@/components/widgets/CartItem.vue'
import { currency } from '@/helpers'
import { useShoppingStore } from '@/stores/shopping-context'
const useShopping = useShoppingStore()

import { ref, inject } from 'vue'

const rtl: boolean | undefined = inject('rtl')
const lang: string | undefined = inject('lang')

const show = ref(false)

const click = () => {
  show.value = !show.value
}
</script>
