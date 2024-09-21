<template>
  <section class="pt-0">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="5" xl="4" class="mb-5 mb-lg-0">
          <h2 class="mb-4">مجموعه‌های محصول قابل توجه آنها</h2>
          <a class="icon-link icon-link-hover heading-color text-primary-hover" href="#"
            >تمام برندها را بررسی کنید<BIconArrowRight class="bi rtl:-scale-x-100" />
          </a>
        </b-col>

        <b-col lg="7" class="text-center ms-auto">
          <b-row class="row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 g-md-6">
            <b-col v-for="(brand, idx) in brands" :key="idx">
              <a :href="brand.href">
                <img :src="brand.img" class="grayscale" alt="client-img" />
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconArrowRight } from 'bootstrap-icons-vue'

import client1Img from '@/assets/images/client/logo-tailwise.svg'
import client2Img from '@/assets/images/client/logo-listkit.svg'
import client3Img from '@/assets/images/client/logo-nephos.svg'
import client4Img from '@/assets/images/client/logo-vulk.svg'
import client5Img from '@/assets/images/client/logo-ideko.svg'
import client6Img from '@/assets/images/client/logo-mizzle.svg'
import client7Img from '@/assets/images/client/logo-eltheme.svg'
import client0Img from '@/assets/images/client/logo-eltheme.svg'

const brands = [
  { href: 'https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme', img: client0Img, },
  { href: 'https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme', img: client1Img, },
  { href: 'https://www.rtl-theme.com/listkit-html-template/?aff=eltheme', img: client2Img, },
  { href: 'https://www.rtl-theme.com/nephos-html-template/?aff=eltheme', img: client3Img, },
  { href: 'https://www.rtl-theme.com/vulk-web-application/?aff=eltheme', img: client4Img, },
  { href: 'https://www.rtl-theme.com/ideko-html-template/?aff=eltheme', img: client5Img, },
  { href: 'https://www.rtl-theme.com/mizzle-html-template/?aff=eltheme', img: client6Img, },
  { href: 'https://www.rtl-theme.com/mizzle-html-template/?aff=eltheme', img: client7Img, },
]
</script>
