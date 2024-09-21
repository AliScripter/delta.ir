<template>
  <section class="pt-6">
    <b-container>
      <b-row class="g-4 g-lg-7">
        <b-col cols="12">
          <b-card no-body class="bg-transparent">
            <b-row class="align-items-center g-4 g-lg-7">
              <b-col md="6">
                <img :src="stories05" class="card-img" alt="story-img" />
              </b-col>
              <b-col md="6">
                <b-card-body>
                  <img :src="client07" class="h-30px mb-4" alt="" />
                  <b-card-title class="mb-4"
                    ><router-link :to="{ name: 'customer.story-single' }" class="stretched-link"
                      >ببینید چرا برندهای مستقیم به مصرف‌کننده، میزل را برای تلاش‌های ایمیلی خود انتخاب می‌کنند.</router-link
                    ></b-card-title
                  >
                  <p class="mb-4">
                    این یک کارت عریض‌تر است با متنی پشتیبانی‌کننده در زیر که به‌طور طبیعی به محتوای اضافی هدایت می‌شود. این محتوا کمی طولانی‌تر است.
                  </p>
                  <a href="#" class="btn btn-dark mb-0"
                    >بیشتر بخوانید
                    <BIconArrowRight class="rtl:-scale-x-100" />
                  </a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col md="4" class="" v-for="(item, idx) in stories" :key="idx">
          <StoryCard :story="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { stories } from '@/views/pages/about/CustomerStory/data'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import StoryCard from '@/views/pages/about/CustomerStory/components/StoryCard.vue'

import stories05 from '@/assets/images/stories/05.jpg'
import client07 from '@/assets/images/client/logo-eltheme.svg'
</script>
