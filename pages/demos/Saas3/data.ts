import {
  bellIcon,
  fileIcon,
  locationIcon,
  messageIcon,
  peopleIcon,
  rocketIcon
} from '@/assets/data/icons'
import type { FeatureType, StatisticType } from '@/types'

export const statData: StatisticType[] = [
  {
    title: 'کل پروژه‌ها در سال',
    number: 150,
    suffix: '+'
  },
  {
    title: 'کل ساعات صرف شده',
    number: 120,
    suffix: '+'
  },
  {
    title: 'نظرات مثبت کاربران',
    number: 10,
    suffix: 'میلیون+'
  },
  {
    title: 'مشتریان خوشحال',
    number: 600,
    suffix: '+'
  }
]

export const features: FeatureType[] = [
  {
    title: 'وظایف و نقش‌ها',
    description:
      'مالکان را به گفتگوها اختصاص دهید و به اعضای تیم وظیفه دهید تا هر به‌روزرسانی را دنبال کنند.',
    icon: peopleIcon
  },
  {
    title: 'پیام‌های داخلی',
    description:
      'پیشنهادی سریع شش یا هفت ارائه دهید و در میان دوستان جذاب ملاقات کنید، بحث با آقایان در زمینه مسکن و مواد زندگی',
    icon: messageIcon
  },
  {
    title: 'پیش‌نمایش فایل‌ها',
    description:
      'بسیار پیشرفته به نظر می‌رسد که شوخی‌ها تمام شده‌اند. بیشتر از شجاعت سرهنگ من ارائه داده شد.',
    icon: fileIcon
  },
  {
    title: 'پیوست‌های بزرگ',
    description:
      'همه چیز را با بی‌احتیاطی در برابر خود قرار می‌دهد. رابطه جنسی که خواسته بود برای شام طول کشید و واقعاً آرزو داشت که یاغی شود.',
    icon: rocketIcon
  },
  {
    title: 'یادآوری‌ها',
    description:
      'چنین کمکی به شما اگر در داخل درب بود. خنده پیشنهاد خنده‌دار برای هر پسری که در نظر گرفته می‌شود.',
    icon: bellIcon
  },
  {
    title: 'ردیابی مکان',
    description:
      'فکر کنید که پایان کار است. او پیر و محبوب خود رسید و او را در حالی که هنوز پر صدا بود، ثابت کرد.',
    icon: locationIcon
  }
]
