<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col md="7" class="mx-auto">
          <h2 class="mb-5 text-center">شما سوال دارید، ما جواب داریم</h2>
          <b-accordion class="accordion-icon accordion-bg-light" id="accordionFaq">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              v-for="(item, idx) in accordionData"
              :key="idx"
              headerTag="p"
              :visible="!idx"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>
                {{ item.question }}
              </template>
              {{ item.answer }}
            </b-accordion-item>
          </b-accordion>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { accordionData } from '@/views/pages/speciality/Pricing/data'
</script>
