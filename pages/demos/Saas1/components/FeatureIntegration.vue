<template>
  <section class="pt-5 pt-sm-0">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6" class="pe-xl-5 order-2">
          <b-row class="align-items-sm-center">
            <b-col cols="6" sm="4" class="d-none d-sm-block">
              <div class="bg-light rounded-4 text-center p-4 mb-4">
                <div class="icon-xl bg-body rounded-circle mx-auto mb-2">
                  <img :src="slackImg" class="h-40px" alt="Integration-img" />
                </div>
                <span class="heading-color fw-bold">استک</span>
              </div>

              <div class="bg-light rounded-4 text-center p-4 mb-4">
                <div class="icon-xl bg-body rounded-circle mx-auto mb-2">
                  <img :src="shopifyImg" class="h-40px" alt="Integration-img" />
                </div>
                <span class="heading-color fw-bold">شاپیفای</span>
              </div>
            </b-col>

            <b-col cols="6" sm="4">
              <div class="bg-light rounded-4 text-center p-4 mb-4">
                <div class="icon-xl bg-body rounded-circle mx-auto mb-2">
                  <img :src="redditImg" class="h-40px" alt="Integration-img" />
                </div>
                <span class="heading-color fw-bold">ردیت</span>
              </div>

              <div class="bg-light rounded-4 text-center p-4 mb-4">
                <div class="icon-xl bg-body rounded-circle mx-auto mb-2">
                  <img :src="googleImg" class="h-40px" alt="Integration-img" />
                </div>
                <span class="heading-color fw-bold">گوگل</span>
              </div>

              <div class="bg-light rounded-4 text-center p-4 mb-4">
                <div class="icon-xl bg-body rounded-circle mx-auto mb-2">
                  <img :src="dropboxImg" class="h-40px" alt="Integration-img" />
                </div>
                <span class="heading-color fw-bold">دراپ باکس</span>
              </div>
            </b-col>

            <b-col cols="6" sm="4">
              <div class="bg-light rounded-4 text-center p-4 mb-4">
                <div class="icon-xl bg-body rounded-circle mx-auto mb-2">
                  <img :src="googleDriveImg" class="h-40px" alt="Integration-img" />
                </div>
                <span class="heading-color fw-bold">گوگل درایو</span>
              </div>

              <div class="bg-light rounded-4 text-center p-4 mb-4">
                <div class="icon-xl bg-body rounded-circle mx-auto mb-2">
                  <img :src="mailchimpImg" class="h-40px" alt="Integration-img" />
                </div>
                <span class="heading-color fw-bold">میل‌چیمپ</span>
              </div>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="6" class="order-1 order-lg-2 mb-5 mb-lg-0 ps-xl-5">
          <h2 class="mb-4">اتصالات بی‌درز برای عملکرد بهتر</h2>
          <p class="mb-4">
            مجموعه‌ای از ادغام‌های ما را کشف کنید که به‌طور بی‌درز با ابزارهای موجود شما ارتباط برقرار کرده و کارایی جریان کار شما را افزایش می‌دهند.
          </p>
          <ul class="list-group list-group-borderless mb-4">
            <li class="list-group-item heading-color d-flex mb-0 icons-center">
              <BIconPatchCheck class="text-primary me-2" />با مجموعه‌ای از برنامه‌های شخص ثالث ارتباط برقرار کنید
            </li>
            <li class="list-group-item heading-color d-flex mb-0 icons-center">
              <BIconPatchCheck class="text-primary me-2" />وظایف را خودکار کنید و ورود داده‌های دستی را کاهش دهید
            </li>
            <li class="list-group-item heading-color d-flex mb-0 icons-center">
              <BIconPatchCheck class="text-primary me-2" />اطمینان داشته باشید که داده‌های شما ایمن و محافظت شده باقی می‌ماند
            </li>
          </ul>
          <a href="#" class="btn btn-dark mb-0">بیشتر بشناسید</a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconPatchCheck } from 'bootstrap-icons-vue'

import slackImg from '@/assets/images/elements/slack.svg'
import shopifyImg from '@/assets/images/elements/shopify.svg'
import redditImg from '@/assets/images/elements/reddit.svg'
import googleImg from '@/assets/images/elements/gicon.svg'
import dropboxImg from '@/assets/images/elements/dropbox.svg'
import googleDriveImg from '@/assets/images/elements/google-drive.svg'
import mailchimpImg from '@/assets/images/elements/mailchimp.svg'
</script>
