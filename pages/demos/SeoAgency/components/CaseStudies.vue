<template>
  <section class="bg-light pb-0">
    <b-container>
      <div class="inner-container-small mx-auto">
        <div class="text-center mb-6">
          <h2 class="mb-">مطالعات موردی</h2>
          <p class="mb-0">
            مجموعه‌ای از جدیدترین پروژه‌های مشتریان ما را کشف کنید که تخصص، خلاقیت و تعهد ما به ارائه نتایج برجسته را به نمایش می‌گذارد.
          </p>
        </div>
      </div>

      <b-row class="g-4 g-lg-5 justify-content-center">
        <b-col md="6" lg="4" v-for="(caseStudy, idx) in caseStudies" :key="idx">
          <CaseStudyCard :case-study="caseStudy" />
        </b-col>
      </b-row>
      <div class="text-center pt-6">
        <router-link :to="{ name: 'portfolio.list' }" class="btn btn-lg btn-dark mb-0"
          >تمام مطالعات موردی را بررسی کنید</router-link
        >
      </div>
    </b-container>

    <div
      class="bg-primary d-sm-flex align-items-center justify-content-center gap-2 mt-6 mt-sm-8 p-4"
    >
      <ul class="avatar-group mb-3 mb-ms-0">
        <li class="avatar avatar-sm">
          <img class="avatar-img rounded-circle" :src="avatar6" alt="avatar" />
        </li>
        <li class="avatar avatar-sm">
          <img class="avatar-img rounded-circle" :src="avatar5" alt="avatar" />
        </li>
        <li class="avatar avatar-sm">
          <div class="avatar-img rounded-circle text-bg-dark">
            <BIconTelephone
              class="text-white position-absolute top-50 start-50 translate-middle"
            ></BIconTelephone>
          </div>
        </li>
      </ul>
      <p class="fw-normal text-white mb-0">
        بیشینه‌سازی بهره‌وری با ساده‌سازی جستجوی راه‌حل
        <a href="#" class="text-decoration-underline text-white fw-semibold"
          >پروژه‌ای در ذهن دارید؟</a
        >
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CaseStudyCard from '@/views/demos/SeoAgency/components/CaseStudyCard.vue'
import { caseStudies } from '@/views/demos/SeoAgency/data'
import { BIconTelephone } from 'bootstrap-icons-vue'

import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
</script>
