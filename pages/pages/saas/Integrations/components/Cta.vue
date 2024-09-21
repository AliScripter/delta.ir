<template>
  <section class="position-relative z-index-2 py-0 mb-n7">
    <b-container class="position-relative">
      <div class="bg-primary rounded position-relative overflow-hidden p-4 p-sm-5">
        <figure class="position-absolute top-0 start-0 ms-n8 rtl:-scale-x-100">
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
            <ellipse
              cx="185.5"
              cy="177"
              rx="185.5"
              ry="177"
              fill="url(#paint1_linear_195_2)"
            ></ellipse>
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

        <div class="position-absolute end-0 bottom-0 me-sm-5">
          <img :src="ctaVectorImg" class="h-200px rtl:-scale-x-100" alt="vector-img" />
        </div>

        <b-row class="g-4 position-relative">
          <b-col lg="7" class="mx-auto text-center">
            <h2 class="text-white mb-4">کسب و کار خود را به سطح بعدی ببرید</h2>
            <p class="text-white mb-4">
              امکانات را بررسی کنید و کشف کنید که چگونه ادغام با [محصول SaaS شما] می‌تواند کسب و کار شما را به سطح بعدی برساند.
            </p>

            <a href="#" class="btn btn-dark">جریان کار خود را بهینه کنید</a>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import ctaVectorImg from '@/assets/images/elements/cta-vector.svg'
</script>
