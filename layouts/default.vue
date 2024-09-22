<template>
    <div :dir="isRtl ? 'rtl' : 'ltr'" :lang="lang">
        <NuxtPage />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const isRtl = ref(false);
const lang = ref('fa');
const rtlCodes = ['ar', 'fa', 'he']; // زبان‌های راست‌چین

onMounted(() => {
    const html = document.documentElement;
    lang.value = html.lang;
    isRtl.value = rtlCodes.includes(html.lang);
});

// اگر می‌خواهید مقدار پیش‌فرض را در سرور تنظیم کنید:
if (process.server) {
    const nuxtApp = useNuxtApp();
    const serverLang =
        nuxtApp.ssrContext?.event.node.req.headers['accept-language']?.split(
            ','
        )[0] || 'fa';
    lang.value = serverLang;
    isRtl.value = rtlCodes.includes(serverLang);
}
</script>

<style lang=""></style>
