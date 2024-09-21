<template>
  <div
    id="step-4"
    role="tabpanel"
    class="content fade text-center"
    aria-labelledby="steppertrigger4"
  >
    <span class="display-2 text-success">
      <BIconCheckCircle class="mb-2" />
    </span>
    <h2 class="mb-1 mt-4">رمز عبور تغییر کرد!</h2>
    <p class="mb-4">رمز عبور شما با موفقیت تغییر کرد.</p>

    <div class="d-grid text-center">
      <router-link :to="{ name: 'demos.classic' }" class="btn btn-dark mb-0"
        >بازگشت به صفحه اصلی</router-link
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BIconCheckCircle } from 'bootstrap-icons-vue'
</script>
