<template>
  <section class="pt-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-5">
        <h2 class="mb-4">درک تأثیر وب‌سایت شما</h2>
        <p class="mb-4">
          هیچ چیزی نمی‌تواند شما را از رسیدن به آنچه که می‌خواهید متوقف کند، به جز خودتان. اگر به آن اختصاص دهید، به هدف خود خواهید رسید.
        </p>
      </div>

      <b-row class="justify-content-center g-sm-6">
        <b-col sm="6" lg="4" class="mb-5 mb-sm-0" v-for="(features, idx) in feature" :key="idx">
          <b-card no-body class="text-center bg-transparent p-0">
            <figure class="text-primary mb-4">
              <span v-html="features.icon" />
            </figure>
            <h5 class="mb-3">{{ features.title }}</h5>
            <p class="mb-0">{{ features.description }}</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { feature } from '@/views/pages/saas/Feature/data'
</script>
