export default defineNuxtPlugin(async nuxtApp => {
    const Vue3autocounter = await import('vue3-autocounter');
    nuxtApp.vueApp.component('vue3-autocounter', Vue3autocounter.default);
});
