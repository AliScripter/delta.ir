<template>
  <StickyHeader className="header-absolute">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <LogoBox class-name="me-0" />

        <AppMenu showResources showContactUs ul-class="mx-auto" />

        <ul class="nav align-items-center dropdown-hover ms-sm-2">
          <ThemeToggleDropdown />

          <li class="nav-item me-2">
            <router-link
              :to="{ name: 'auth.sign-in' }"
              class="btn btn-sm btn-light mb-0 icons-center"
            >
              <BIconPersonCircle class="me-1" />
              ثبت نام
            </router-link>
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
import LogoBox from '@/components/topbar/LogoBox.vue'
import AppMenu from '@/components/topbar/AppMenu/index.vue'
import StickyHeader from '@/components/topbar/StickyHeader.vue'
import ThemeToggleDropdown from '@/components/topbar/ThemeToggleDropdown.vue'
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler.vue'
import { buyLink } from '@/helpers'
import { BIconPersonCircle } from 'bootstrap-icons-vue'
</script>
