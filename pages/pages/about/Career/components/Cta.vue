<template>
  <section class="bg-light position-relative overflow-hidden py-7">
    <figure class="position-absolute top-0 start-0 ms-n8 mt-5 rtl:-scale-x-100">
      <svg
        width="371"
        height="354"
        viewBox="0 0 371 354"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="172.5"
          cy="176.5"
          rx="131.5"
          ry="125.5"
          fill="url(#paint0_linear_195_2)"
        ></ellipse>
        <ellipse cx="185.5" cy="177" rx="185.5" ry="177" fill="url(#paint1_linear_195_2)"></ellipse>
        <defs>
          <linearGradient
            id="paint0_linear_195_2"
            x1="172.5"
            y1="51"
            x2="172.5"
            y2="302"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.5"></stop>
            <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_195_2"
            x1="185.5"
            y1="0"
            x2="185.5"
            y2="354"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.2"></stop>
            <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </figure>
    <div class="position-absolute end-0 bottom-0 me-sm-5 d-none d-md-block">
      <img :src="ctaVectorImg" class="h-200px rtl:-scale-x-100" alt="vector-img" />
    </div>
    <b-container class="position-relative">
      <b-row class="align-items-center">
        <b-col md="10" xl="7" class="mb-4 mb-xl-0">
          <h2>به خبرنامه ما مشترک شوید</h2>
          <p>
            تعهد ما به خدمات مشتری عالی یکی از دلایل اصلی است که ما در صدر بازار قرار داریم. ما به طور مداوم تلاش می‌کنیم تا بهترین تجربه را برای مشتریانمان فراهم کنیم.
          </p>
        </b-col>
        <form class="col-md-7 col-xl-4 ms-xl-auto">
          <b-form-input class="mb-3" type="email" placeholder="آدرس ایمیل خود را وارد کنید" />
          <a href="#" class="btn btn-dark mb-0 d-grid">اکنون مشترک شوید</a>
        </form>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import ctaVectorImg from '@/assets/images/elements/cta-vector.svg'
</script>
