<template>
  <section>
    <b-container>
      <b-row class="g-lg-6">
        <b-col xl="10" class="mx-auto">
          <b-row class="g-4 g-sm-5 g-lg-6 align-items-lg-center">
            <b-col md="6">
              <img :src="about16" class="rounded" alt="about-img" />
            </b-col>

            <b-col md="6">
              <h3 class="mb-4">کارایی کسب‌وکار خود را با میزل افزایش دهید.</h3>
              <p class="mb-0">
                چت‌بات می‌تواند به‌گونه‌ای شخصی‌سازی شود که با لحن و صدای برند مطابقت داشته باشد و آن را به بخشی از تیم پشتیبانی مشتریان شرکت تبدیل کند.
              </p>

              <hr class="my-5" />

              <b-row class="row-cols-2 row-cols-sm-3 g-4 g-sm-5 align-items-center">
                <b-col v-for="(item, idx) in client" :key="idx">
                  <a :href="item.href" target="_blank">
                    <img :src="item.img" alt="client-img" />
                  </a>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { client } from '@/views/pages/about/ServicesV1/data'

import about16 from '@/assets/images/about/16.jpg'
</script>
