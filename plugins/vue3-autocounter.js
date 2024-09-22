import Vue3autocounter from 'vue3-autocounter';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('vue3-autocounter', Vue3autocounter);
});
