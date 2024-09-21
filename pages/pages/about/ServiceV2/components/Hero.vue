<template>
  <section class="pt-lg-8 pt-xl-9">
    <b-container class="position-relative pt-4 pt-lg-0">
      <b-row class="align-items-center">
        <b-col md="7" xl="6" class="mb-7 mb-md-0">
          <h1 class="mb-4">راه‌حل‌هایی که ما ارائه می‌دهیم را کشف کنید</h1>
          <p class="mb-4">
            تیم با تجربه ما متعهد است تا از طریق فناوری‌های نوآورانه به شما در دستیابی به اهداف‌تان کمک کند.
          </p>
          <router-link :to="{ name: 'contact.v1' }" class="btn btn-lg btn-dark mb-5">
            <BIconTelephone class="me-2 mb-1" />تماس با ما
          </router-link>

          <div class="d-sm-flex align-items-center">
            <ul class="avatar-group mb-0 align-items-center">
              <li class="avatar avatar-lg">
                <img class="avatar-img rounded-circle" :src="avatar08" alt="avatar" />
              </li>
              <li class="avatar avatar-lg">
                <img class="avatar-img rounded-circle" :src="avatar12" alt="avatar" />
              </li>
              <li class="avatar avatar-lg">
                <div class="avatar-img rounded-circle bg-primary">
                  <span class="text-white position-absolute top-50 start-50 translate-middle"
                    >10K+</span
                  >
                </div>
              </li>
            </ul>

            <div class="ms-sm-3 mt-2 mt-sm-0">
              <p class="heading-color fw-normal mb-1">بیش از 10 هزار کاربر فعال! 🤩</p>
              <a class="icon-link icon-link-hover text-primary-hover mt-auto" href="#"
                >اکنون به آن‌ها بپیوندید
                <BIconArrowRight class="rtl:-scale-x-100" />
              </a>
            </div>
          </div>
        </b-col>

        <b-col md="5" class="ms-auto">
          <img :src="service" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { BIconArrowRight, BIconTelephone } from 'bootstrap-icons-vue'

import avatar08 from '@/assets/images/avatar/08.jpg'
import avatar12 from '@/assets/images/avatar/12.jpg'
import service from '@/assets/images/elements/service.svg'
</script>
