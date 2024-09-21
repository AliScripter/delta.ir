<template>
  <section class="pb-0">
    <b-container>
      <div class="inner-container-small text-center mb-4 mb-sm-6">
        <h2>ویژگی اصلی</h2>
        <p class="mb-0">
          او با چالش‌های دشوار روبرو می‌شود، ورزشکاران غرق آن می‌شوند. تمام دشواری‌های دیوان اشعار را به همراه علاقه و شادی کمک‌کننده دارد.
        </p>
      </div>

      <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5 g-lg-6">
        <b-col v-for="(item, idx) in feature" :key="idx">
          <b-card no-body class="card-body bg-transparent text-center p-0">
            <span class="h4 text-primary">
              <component :is="item.icon" />
            </span>
            <h6 class="mb-2">{{ item.title }}</h6>
            <p class="mb-0">{{ item.description }}</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { feature } from '@/views/pages/about/ServicesV1/data'
</script>
