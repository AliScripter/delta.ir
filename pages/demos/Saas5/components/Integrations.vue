<template>
  <section class="pt-0">
    <b-container class="position-relative">
      <b-row class="align-items-center position-relative">
        <b-col md="3" class="d-none d-md-block">
          <img :src="element1" alt="" />
        </b-col>

        <b-col md="6" class="mx-auto text-center">
          <h2 class="mb-4">ادغام‌های بی‌درز برای افزایش بهره‌وری</h2>
          <p class="mb-4">
            جریان کار شما فقط در مورد یک ابزار نیست - بلکه در مورد کل اکوسیستم برنامه‌هایی است که استفاده می‌کنید. به‌طور بی‌درز با مجموعه‌ای از خدمات شخص ثالث متصل می‌شود تا فرآیندهای شما را حتی بیشتر ساده کند.
          </p>
          <router-link
            class="btn btn-lg btn-primary icon-link icon-link-hover"
            :to="{ name: 'saas.integrations' }"
            >تمام ادغام‌ها را مشاهده کنید <BIconChevronRight class="bi rtl:-scale-x-100" />
          </router-link>
        </b-col>

        <b-col md="3" class="d-none d-md-block">
          <img :src="element2" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconChevronRight } from 'bootstrap-icons-vue'

import element1 from '@/assets/images/elements/int-p1.svg'
import element2 from '@/assets/images/elements/int-p2.svg'
</script>
