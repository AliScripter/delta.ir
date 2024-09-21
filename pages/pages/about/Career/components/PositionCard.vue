<template>
  <div class="mb-4 mb-md-0">
    <div class="badge text-bg-dark mb-3">{{ position?.badge }}</div>

    <h5 class="mb-0">
      <router-link :to="{ name: 'career.single' }" class="stretched-link">{{
        position?.title
      }}</router-link>
    </h5>

    <div class="hstack gap-3 gap-sm-4 flex-wrap mt-3">
      <span class="icons-center"> <BIconGeoAlt class="me-2" />{{ position?.location }} </span>
      <span class="icons-center"> <BIconClock class="me-2" />{{ position?.time }} </span>
      <span class="icons-center">
        <BIconBriefcase class="me-2" />
        <span v-if="lang==='en'">{{ currency }}{{ position?.currency }}</span>
        <span v-else-if="lang==='fa'">{{ position?.currency }} {{ currency }}</span>
      </span>
    </div>
  </div>

  <div>
    <a href="#" class="btn btn-primary mb-0 icons-center"
      >هم‌اکنون اقدام کنید
      <BIconArrowRight class="ms-2 rtl:-scale-x-100" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { PropType } from 'vue'
import type { PositionType } from '@/views/pages/about/Career/data'
import { currency } from '@/helpers'
import { BIconClock, BIconGeoAlt, BIconBriefcase, BIconArrowRight } from 'bootstrap-icons-vue'

defineProps({
  position: {
    type: Object as PropType<PositionType>
  }
})

const lang: string | undefined = inject('lang')
</script>
