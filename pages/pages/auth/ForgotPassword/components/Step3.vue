<template>
  <div id="step-3" role="tabpanel" class="content fade" aria-labelledby="steppertrigger3">
    <LogoBox smallLogo />

    <h2 class="mb-1">تنظیم رمز عبور جدید</h2>
    <p class="mb-4">باید حداقل ۸ کاراکتر باشد</p>

    <PasswordInput name="password" v-model="newPassword" class="mb-4" />
    <PasswordInput
      label="تایید رمز عبور"
      name="confirmPassword"
      v-model="confirmPassword"
      class="mb-4"
    />

    <div class="d-grid text-center">
      <button class="btn btn-dark mb-0" type="button">بازنشانی رمز عبور</button>
    </div>

    <div class="mt-4 text-center">
      <router-link
        :to="{ name: 'auth.sign-up' }"
        class="text-primary-hover next-btn flex-centered gap-1"
      >
        <BIconArrowLeft class="rtl:-scale-x-100" /> بازگشت به ورود
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PasswordInput from '@/components/PasswordInput.vue'
import LogoBox from '@/components/topbar/LogoBox.vue'
import { BIconArrowLeft } from 'bootstrap-icons-vue'

const newPassword = ref()
const confirmPassword = ref()
</script>
