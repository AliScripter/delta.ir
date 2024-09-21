<template>
  <section class="py-xl-5">
    <b-container
      class="py-xl-8"
      style="background-position: center; background-size: cover"
      :style="{ backgroundImage: `url('${mapImg}')` }"
    >
      <div class="inner-container text-center">
        <h2 class="mb-4">ما جهانی هستیم و در حال رشد</h2>
        <p class="mb-6">
          پشتیبانی مشتریان میزل به‌صورت رایگان در دسترس است. هزینه‌های تماس ممکن است در صورت تماس از خارج از منطقه، از خارج از کشور یا از طریق تلفن همراه متفاوت باشد.
        </p>

        <b-row class="g-4 text-start justify-content-center">
          <b-col md="5" v-for="(item, idx) in location" :key="idx">
            <b-card no-body class="border p-4">
              <div class="avatar avatar-lg mb-4">
                <img class="avatar-img rounded-circle" :src="item.image" alt="avatar" />
              </div>
              <b-card-title tag="h6" class="mb-3"
                ><a href="#">{{ item.counrty }}</a></b-card-title
              >

              <ul class="list-group list-group-borderless border-0">
                <li class="d-flex mb-3">
                  <BIconGeoAlt class="me-2 fa-xl" />۵۵/۱۲۳ خیابان نورمن، خیابان بانکینگ، سیدنی NSW ۵۰۰۰
                </li>
                <li class="d-flex mb-3 icons-center">
                  <BIconHeadset class="me-2" />تماس: ۴۶۹-۵۳۷-۲۴۱۰ (بدون هزینه)
                </li>
              </ul>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { location } from '@/views/pages/about/AboutV2/data'
import { BIconGeoAlt, BIconHeadset } from 'bootstrap-icons-vue'

import mapImg from '@/assets/images/elements/map.svg'
</script>
