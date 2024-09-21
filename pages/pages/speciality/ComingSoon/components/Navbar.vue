<template>
  <header class="header-sticky">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <router-link :to="{ name: 'demos.classic' }" class="navbar-brand">
          <img class="light-mode-item navbar-brand-item" :src="logo" alt="logo" />
          <img class="dark-mode-item navbar-brand-item" :src="logoLight" alt="logo" />
        </router-link>

        <div class="nav align-items-center felx-row ms-2">
          <b-button variant="dark" size="sm" class="mb-0">همین حالا بخرید!</b-button>
        </div>
      </b-container>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import logoEN from '@/assets/images/logo.svg'
import logoFA from '@/assets/images/logo-fa.svg'
import logoLightEN from '@/assets/images/logo-light.svg'
import logoLightFA from '@/assets/images/logo-light-fa.svg'

const lang: string | undefined = inject('lang')
const logo = lang === 'fa' ? logoFA : logoEN
const logoLight = lang === 'fa' ? logoLightFA : logoLightEN
</script>
