import about1 from '@/assets/images/about/01.jpg'
import about2 from '@/assets/images/about/02.jpg'
import about12 from '@/assets/images/about/12.jpg'
import about4 from '@/assets/images/about/04.jpg'
import about14 from '@/assets/images/about/14.jpg'
import about16 from '@/assets/images/about/16.jpg'
import about8 from '@/assets/images/about/08.jpg'
import about3 from '@/assets/images/about/03.jpg'
import bg1Img from '@/assets/images/bg/01.jpg'
import type { BSIconType, CounterType, StepType } from '@/types'
import {
  BIconBriefcase,
  BIconBuildings,
  BIconBullseye,
  BIconFire,
  BIconPeople,
  BIconSuitHeart,
  BIconTrophy
} from 'bootstrap-icons-vue'

export type CountType = {
  icon: BSIconType
} & CounterType

export type PositionType = {
  badge: string
  title: string
  location: string
  time: string
  currency: string
}

export const swiper: string[] = [
  about1,
  about2,
  about12,
  about4,
  about14,
  bg1Img,
  about16,
  about8,
  about3
]

export const counter: CountType[] = [
  {
    icon: BIconBriefcase,
    state: 600,
    title: 'تعداد شغل‌ها',
    suffix: '+'
  },
  {
    icon: BIconBuildings,
    state: 5468,
    title: 'کل شرکت‌ها'
  },
  {
    icon: BIconPeople,
    state: 12,
    title: 'کل نامزدها',
    suffix: 'K+'
  },
  {
    icon: BIconBriefcase,
    state: 10,
    title: 'مشاغل جدید',
    suffix: '+'
  }
]

export const value: StepType[] = [
  {
    icon: BIconSuitHeart,
    title: 'صداقت',
    description: 'پیاده‌سازی پشتیبانی چندزبانه شامل ...'
  },
  {
    icon: BIconFire,
    title: 'شوق',
    description: 'این بر ایجاد طراحی بصری و کارآمد تمرکز دارد.'
  },
  {
    icon: BIconBullseye,
    title: 'تأثیر',
    description: 'این اطمینان می‌دهد که کاربران می‌توانند هر زمان که به کمک بحرانی نیاز دارند، به آن دسترسی پیدا کنند.'
  },
  {
    icon: BIconTrophy,
    title: 'شناخت',
    description: 'این قابلیت‌های پیشرفته برای ارائه خدمات به کاربران طراحی شده‌اند.'
  }
]

export const positionData: PositionType[] = [
  {
    badge: 'فناوری اطلاعات',
    title: 'طراح UI/UX و محصول',
    location: 'آمریکا، انتاریو',
    time: 'سان فرانسیسکو',
    currency: '32,000'
  },
  {
    badge: 'کسب و کار',
    title: 'مدیر کل دفتر',
    location: 'ایالات متحده، نیویورک',
    time: 'تمام وقت',
    currency: '۴۱,۰۰۰'
  },
  {
    badge: 'نرم‌افزار',
    title: 'متخصص یادگیری ماشین',
    location: 'مومبای، هند',
    time: 'تمام وقت',
    currency: '۱۸,۰۰۰'
  },
  {
    badge: 'فناوری اطلاعات',
    title: 'مدیر ارشد محصول',
    location: 'انگلستان، لندن',
    time: 'تمام وقت',
    currency: '29,000'
  }
]
