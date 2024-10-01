// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt3';
import { createBootstrap } from 'bootstrap-vue-next';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import Toast from 'vue-toastification';
import { FcGoogle } from 'oh-vue-icons/icons';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },

    ssr: false,
    // vite: false,
    css: [
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap-vue-3/dist/bootstrap-vue-3.css',
        'bs-stepper/dist/css/bs-stepper.min.css',
        'swiper/swiper-bundle.css',
        'glightbox/dist/css/glightbox.min.css',
        'aos/dist/aos.css',
        'bootstrap/dist/css/bootstrap.min.css',
        '@/assets/scss/style.scss',
        'vue-toastification/dist/index.css',
        'vazirmatn/misc/Farsi-Digits/Vazirmatn-FD-font-face.css',

        // 'bootstrap-vue/dist/bootstrap-vue.css',
    ],
    build: {
        transpile: [
            'bootstrap-vue-3',
            'vue-toastification',
            'vue3-autocounter',
        ],
    },
    plugins: [
        { src: '~/plugins/bootstrap-vue.client.js', mode: 'client' },
        { src: '~/plugins/bootstrap.js', mode: 'client' }, // برای Bootstrap
        { src: '~/plugins/toast.js', mode: 'client' }, // برای Toast
    ],

    // alias: {
    // '@views': '~/pages',
    // '@/data': '~/pages/demos/CreativeAgency/data.ts',
    // },

    // modules: ['bootstrap-vue-next/nuxt'],
    // vite: {
    //     resolve: {
    //         alias: {
    //             nuxt: 'nuxt3',
    //         },
    //     },
    // },
});
