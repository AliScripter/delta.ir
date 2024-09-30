// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt3';
import { createBootstrap } from 'bootstrap-vue-next';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import Toast from 'vue-toastification';
import { FcGoogle } from 'oh-vue-icons/icons';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    // ssr: false,
    // vite: false,
    css: [
        'bs-stepper/dist/css/bs-stepper.min.css',
        'bootstrap/dist/css/bootstrap.css',
        'swiper/swiper-bundle.css',
        'glightbox/dist/css/glightbox.min.css',
        'aos/dist/aos.css',
        'bootstrap/dist/css/bootstrap.min.css',
        'bootstrap-vue-next/dist/bootstrap-vue-next.css',
        '@/assets/scss/style.scss',
        'vue-toastification/dist/index.css',
        'vazirmatn/misc/Farsi-Digits/Vazirmatn-FD-font-face.css',
    ],
    build: {
        transpile: [
            'bootstrap-vue-next',
            'vue-toastification',
            'vue3-autocounter',
        ],
    },
    plugins: [
        { src: '~/plugins/bootstrap.js', mode: 'client' }, // برای Bootstrap
        { src: '~/plugins/toast.js', mode: 'client' }, // برای Toast
        { src: '~/plugins/vue3-autocounter.js', mode: 'client' },
    ],

    alias: {
        '@views': '~/pages',
        // '@/data': '~/pages/demos/CreativeAgency/data.ts',
    },
});
