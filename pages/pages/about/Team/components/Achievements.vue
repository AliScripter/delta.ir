<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 g-sm-5">
        <b-col lg="5">
          <h2 class="mb-3">دستاوردهای مادام‌العمر ما</h2>
          <p class="mb-4">
            به تیم ما بپیوندید. آژانس خلاق ما متخصص در: تولید ویدئو، طراحی وب، برندینگ، استراتژی برند.
          </p>

          <div
            class="text-center d-inline-block bg-light border rounded position-relative px-5 py-3"
          >
            <span class="heading-color">علاقه‌مند به همکاری هستید؟ </span>
            <router-link :to="{ name: 'contact.v1' }" class="stretched-link ms-2"
              >به جامعه ما بپیوندید
              <BIconChevronRight class="small rtl:-scale-x-100" />
            </router-link>
          </div>
        </b-col>

        <b-col lg="7" xl="6" class="ms-auto">
          <b-row class="row-cols-1 row-cols-sm-2 g-4 g-md-5">
            <b-col v-for="(item, idx) in achievement" :key="idx">
              <h5>{{ item.title }}</h5>
              <b-list-group flush>
                <b-list-group-item
                  v-for="list in item.awards"
                  :key="list"
                  class="heading-color px-0"
                  >{{ list }}</b-list-group-item
                >
              </b-list-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { achievement } from '@/views/pages/about/Team/data'
import { BIconChevronRight } from 'bootstrap-icons-vue'
</script>
