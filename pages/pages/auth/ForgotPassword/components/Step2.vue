<template>
  <div id="step-2" role="tabpanel" class="content fade" aria-labelledby="steppertrigger2">
    <LogoBox smallLogo />

    <h2 class="mb-1">بازنشانی رمز عبور</h2>
    <p class="mb-4">کد را به <span class="fw-bold">example@gmail.com</span> ارسال کردیم</p>

    <div class="autotab d-flex justify-content-between gap-1 gap-sm-3 mb-3">
      <input type="text" maxlength="1" class="form-control text-center p-3" />
      <input type="text" maxlength="1" class="form-control text-center p-3" />
      <input type="text" maxlength="1" class="form-control text-center p-3" />
      <input type="text" maxlength="1" class="form-control text-center p-3" />
    </div>

    <div class="d-grid text-center">
      <button class="btn btn-dark mb-0" type="button">ادامه</button>
      <p class="mb-0 mt-3">کد را دریافت نکردید؟ <a href="#">کلیک کنید</a> تا دوباره ارسال شود</p>
    </div>

    <div class="mt-4 text-center">
      <router-link :to="{ name: 'auth.sign-up' }" class="text-primary-hover flex-centered gap-1">
        <BIconArrowLeft class="rtl:-scale-x-100" /> بازگشت به ورود
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LogoBox from '@/components/topbar/LogoBox.vue'
import { BIconArrowLeft } from 'bootstrap-icons-vue'
</script>
