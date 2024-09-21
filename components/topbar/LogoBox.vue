<template>
  <router-link class="navbar-brand" :class="className" :to="{ name: 'demos.classic' }">
    <img
      v-if="!onlyLight && !smallLogo"
      class="light-mode-item navbar-brand-item"
      :class="imageClass"
      :src="logo"
      alt="logo"
    />
    <img
      v-if="!smallLogo"
      class="dark-mode-item navbar-brand-item"
      :src="logoLight"
      :class="imageClass"
      alt="logo"
    />
    <img v-if="smallLogo" :src="logoIcon" class="h-50px mb-4" alt="logo" />
  </router-link>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import logoEN from '@/assets/images/logo.svg'
import logoFA from '@/assets/images/logo-fa.svg'
import logoLightEN from '@/assets/images/logo-light.svg'
import logoLightFA from '@/assets/images/logo-light-fa.svg'
import logoIcon from '@/assets/images/logo-icon.svg'

defineProps<{
  className?: string
  onlyLight?: boolean
  smallLogo?: boolean
  imageClass?: string
}>()

const lang: string | undefined = inject('lang')
const logo = lang === 'fa' ? logoFA : logoEN
const logoLight = lang === 'fa' ? logoLightFA : logoLightEN
</script>
