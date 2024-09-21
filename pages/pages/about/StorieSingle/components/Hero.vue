<template>
  <section class="pt-7 pb-0">
    <b-container class="pt-5">
      <b-card
        no-body
        class="h-300px h-md-400px overflow-hidden"
        style="background-size: cover; background-position: center"
        :style="{ backgroundImage: `url('${bg9Img}')` }"
      ></b-card>

      <b-row>
        <b-col cols="11" lg="10" class="mx-auto mt-n7">
          <div class="bg-body border border-opacity-10 shadow rounded position-relative p-4 p-sm-5">
            <h4 class="mb-3">
              ببینید چرا برندهای مستقیم به مصرف‌کننده برای تلاش‌های ایمیلی خود میزل را انتخاب می‌کنند.
            </h4>

            <div class="d-flex align-items-center flex-wrap">
              <span>۲۳ مهر ۱۴۰۲</span>
              <span class="text-secondary opacity-3 mx-3">|</span>
              <span>خواندن ۹ دقیقه‌ای</span>
              <span class="text-secondary opacity-3 mx-3">|</span>
              <div class="d-flex align-items-center">
                <div class="avatar avatar-sm flex-shrink-0 me-1">
                  <img class="avatar-img rounded-circle" :src="avatar05" alt="avatar" />
                </div>
                <span class="fw-semibold heading-color"> کارولین اورتیز</span>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from '@/assets/images/bg/09.jpg'
import avatar05 from '@/assets/images/avatar/05.jpg'
</script>
