<template>
  <section class="pt-lg-8">
    <b-container class="position-relative pt-4 pt-lg-0">
      <b-row class="align-items-center">
        <b-col lg="5" class="mb-5 mb-md-0">
          <h1 class="mb-4">قدرت ویژگی‌های ما را آزاد کنید</h1>
          <p class="mb-4">
            این ساختار بر قدرت و پتانسیل ویژگی‌های SAAS شما تمرکز دارد در حالی که دعوت به کاوش بیشتر از آنها را فراهم می‌کند.
          </p>
          <router-link :to="{ name: 'saas.feature-single' }" class="btn btn-lg btn-dark mb-0"
            >اکنون شروع به کاوش کنید</router-link
          >
        </b-col>

        <b-col lg="6" class="ms-auto">
          <div class="position-relative pe-4 pe-sm-6">
            <div
              class="bg-dark rounded position-absolute top-0 end-0 w-50 h-100"
              style="background-position: center left; background-size: cover"
              :style="{ backgroundImage: `url('${bgImg}')` }"
            ></div>

            <img
              :src="saasBg"
              class="rounded-4 border border-dark border-5 my-4 my-sm-6 position-relative"
              alt="saas-img"
            />
            <b-col cols="2" class="position-absolute bottom-0 start-0 ms-lg-n7">
              <img :src="saasDecoration01" class="shadow rounded-4" alt="decoration-img" />
            </b-col>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bgImg from '@/assets/images/elements/bg-pattern-2.png'
import saasBg from '@/assets/images/bg/saas-bg.jpg'
import saasDecoration01 from '@/assets/images/elements/saas-decoration/01.png'
</script>
