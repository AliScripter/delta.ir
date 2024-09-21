<template>
  <div :dir="isRtl ? 'rtl' : 'ltr'" lang="fa">
    <NuxtPage />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const html = document.documentElement;
const rtlCodes = ['ar', 'fa', 'he']; // زبان‌های راست‌چین
const isRtl = ref(rtlCodes.includes(html.lang));
</script>

<script>
export default {};
</script>
<style lang=""></style>
