<template>
  <StickyHeader class-name="header-absolute" data-bs-theme="dark">
    <b-alert
      v-model="dismissibleAlert"
      closeClass="py-3"
      dismissible
      class="py-2 m-0 bg-primary border-0 rounded-0 text-center overflow-hidden"
    >
      <p class="text-white small m-0">
        <font-awesome-icon :icon="faCrown" class="me-2" /> نسخه جدید اینجاست! کشف کنید چه چیزهایی تازه و بهبود یافته است.
        <a href="#" class="btn btn-xs btn-white ms-2 mb-0">برای ارتقا کلیک کنید!</a>
      </p>
    </b-alert>

    <nav class="navbar navbar-expand-xl">
      <b-container>
        <LogoBox className="me-0" onlyLight />

        <AppMenu ulClass="mx-auto" showContactUs showDocs />

        <ul class="nav align-items-center dropdown-hover ms-sm-2">
          <ThemeToggleDropdown />

          <li class="nav-item me-2 d-none d-sm-block">
            <router-link :to="{ name: 'auth.sign-in' }" class="btn btn-sm btn-light mb-0"
              ><BIconPersonCircle class="me-1" />ثبت نام</router-link
            >
          </li>

          <li class="nav-item d-none d-sm-block">
            <a :href="buyLink" target="_blank" class="btn btn-sm btn-primary mb-0">همین حالا بخرید!</a>
          </li>

          <li class="nav-item">
            <MobileNavbarToggler />
          </li>
        </ul>
      </b-container>
    </nav>
  </StickyHeader>
</template>

<script lang="ts" setup>
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { BIconPersonCircle } from 'bootstrap-icons-vue'
import StickyHeader from '@/components/topbar/StickyHeader.vue'
import LogoBox from '@/components/topbar/LogoBox.vue'
import ThemeToggleDropdown from '@/components/topbar/ThemeToggleDropdown.vue'
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler.vue'
import AppMenu from '@/components/topbar/AppMenu/index.vue'
import { ref } from 'vue'
import { buyLink } from '@/helpers'

const dismissibleAlert = ref(true)
</script>
