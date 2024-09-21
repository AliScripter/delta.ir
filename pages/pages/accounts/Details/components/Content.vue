<template>
  <PersonalProfile />

  <div class="text-center my-5">
    <BIconThreeDots />
  </div>

  <b-form>
    <b-card no-body class="bg-transparent p-0">
      <b-card-header class="bg-transparent border-bottom px-0">
        <h6 class="mb-0">به‌روزرسانی ایمیل</h6>
      </b-card-header>

      <b-card-body class="px-0">
        <div class="mb-4">
          <p class="mb-4">
            آدرس ایمیل فعلی شما <span class="text-primary">example@gmail.com</span> است
          </p>
          <b-form-group label="آدرس ایمیل" label-for="email">
            <b-form-input type="email" class="" v-model="email" placeholder="آدرس ایمیل خود را وارد کنید" />
          </b-form-group>
        </div>

        <div class="text-end">
          <a href="#" class="btn btn-primary mb-0">ذخیره تغییرات</a>
        </div>
      </b-card-body>
    </b-card>
  </b-form>

  <div class="text-center my-5">
    <BIconThreeDots />
  </div>

  <UpdatePass />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PersonalProfile from '@/views/pages/accounts/Details/components/PersonalProfile.vue'
import UpdatePass from '@/views/pages/accounts/Details/components/UpdatePass.vue'
import { BIconThreeDots } from 'bootstrap-icons-vue'

const email = ref('hello@gmail.com')
</script>
