import usflagImg from '@/assets/images/flags/us.svg'
import indianflagImg from '@/assets/images/flags/in.svg'
import client1Img from '@/assets/images/client/logo-tailwise.svg'
import client2Img from '@/assets/images/client/logo-listkit.svg'
import client3Img from '@/assets/images/client/logo-nephos.svg'
import client4Img from '@/assets/images/client/logo-vulk.svg'
import client5Img from '@/assets/images/client/logo-ideko.svg'
import client6Img from '@/assets/images/client/logo-mizzle.svg'
import client7Img from '@/assets/images/client/logo-eltheme.svg'
import webflowImg from '@/assets/images/elements/webflow.svg'
import bootstrapImg from '@/assets/images/elements/bootstrap.svg'
import githubImg from '@/assets/images/elements/github.svg'

import type { BSIconType, ServiceType, ToolType } from '@/types'
import { BIconEnvelope, BIconGeoAlt, BIconTelephone } from 'bootstrap-icons-vue'

type AddreddType = {
  emailornum?: string
} & ToolType

export const address: AddreddType[] = [
  {
    icon: BIconGeoAlt,
    name: 'آدرس دفتر',
    image: usflagImg,
    description: 'دفتر آمریکا:'
  },
  {
    icon: BIconEnvelope,
    name: 'به ما ایمیل بزنید',
    description: "ما بر اوضاع مسلط هستیم و هدفمان پاسخگویی به تمامی سوالات در عرض ۲۴ ساعت است.",
    emailornum: 'example@gmail.com'
  },
  {
    icon: BIconTelephone,
    name: 'با ما در تماس باشید',
    description: "بیایید با هم برای رسیدن به یک هدف مشترک همکاری کنیم - با ما تماس بگیرید!",
    emailornum: '(251) 854-6308'
  }
]

export const swiper: { href: string, img: string }[] = [
  { href: 'https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme', img: client1Img, },
  { href: 'https://www.rtl-theme.com/listkit-html-template/?aff=eltheme', img: client2Img, },
  { href: 'https://www.rtl-theme.com/nephos-html-template/?aff=eltheme', img: client3Img, },
  { href: 'https://www.rtl-theme.com/vulk-web-application/?aff=eltheme', img: client4Img, },
  { href: 'https://www.rtl-theme.com/ideko-html-template/?aff=eltheme', img: client5Img, },
  { href: 'https://www.rtl-theme.com/nephos-html-template/?aff=eltheme', img: client6Img, },
  { href: 'https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme', img: client7Img, },
]

export const work: ServiceType[] = [
  {
    image: webflowImg,
    title: 'قالب‌های وب‌فلاو',
    description: 'ترکیب علاقه من به طراحی'
  },
  {
    image: bootstrapImg,
    title: 'قالب‌های بوت‌استرپ',
    description: 'از علاقه من به طراحی یک تپه کشید'
  },
  {
    image: githubImg,
    title: 'در GitHub مشارکت کنید',
    description: 'صبحانه یا به طور کامل حل و فصل شده است.'
  }
]

export const location = [
  {
    title: 'ایالات متحده',
    image: usflagImg
  },
  {
    title: 'هند',
    image: indianflagImg
  }
]
