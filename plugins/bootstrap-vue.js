import { BootstrapVue } from 'bootstrap-vue-next';
// import { defineNuxtPlugin } from 'nuxt/dist/app/nuxt';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(BootstrapVue);
});
