import type { PricingType, TestimonialType, ToolType } from '@/types'
import team2 from '@/assets/images/team/02.jpg'
import team3 from '@/assets/images/team/03.jpg'

import mailchimp from '@/assets/images/elements/mailchimp.svg'
import slack from '@/assets/images/elements/slack.svg'
import webflow from '@/assets/images/elements/webflow.svg'
import shopify from '@/assets/images/elements/shopify.svg'
import reddit from '@/assets/images/elements/reddit.svg'
import microsoft from '@/assets/images/elements/microsoft.svg'
import bootstrap from '@/assets/images/elements/bootstrap.svg'
import dropbox from '@/assets/images/elements/dropbox.svg'
import gicon from '@/assets/images/elements/gicon.svg'
import github from '@/assets/images/elements/github.svg'
import googleDrive from '@/assets/images/elements/google-drive.svg'
import { BIconPatchCheckFill } from 'bootstrap-icons-vue'

export const testimonials: TestimonialType[] = [
  {
    title: '"میزل ابزاری ضروری برای من و تیم من است"',
    comment:
      "چت‌بات می‌تواند شخصی‌سازی شود تا با صدای برند و لحن آن مطابقت داشته باشد و تیم پشتیبانی مشتری شرکت را تشکیل دهد.",
    user: {
      firstName: 'ژاکلین',
      lastName: 'میلر',
      role: 'رئیس بازاریابی',
      avatar: team3
    },
    rating: 4.5
  },
  {
    title: '"نتایج آژانس من را متحول کرد"',
    comment:
      "نمی‌توانم به اندازه کافی از تأثیر این پلتفرم بر روی آژانس خود بگویم. ابزارهای اتوماسیون، ویژگی‌های مدیریت پروژه، و همکاری بدون نقص، نحوه کار ما را متحول کرده است. ",
    user: {
      firstName: 'آلن',
      lastName: 'اسمیت',
      role: 'مالک آژانس بازاریابی دیجیتال',
      avatar: team2
    },
    rating: 4.5
  }
]

export const integrations: ToolType[] = [
  {
    image: mailchimp
  },
  {
    image: slack
  },
  {
    image: webflow
  },
  {
    image: shopify
  },
  {
    image: reddit
  },
  {
    image: microsoft
  },
  {
    image: bootstrap
  },
  {
    image: dropbox
  },
  {
    image: gicon
  },
  {
    image: github
  },
  {
    image: googleDrive
  }
]

export const pricingData2: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        title: 'حالت رئیس',
        description: 'در هیچ برداشتی، کمک‌های متناقض با رفتارهایی که او عدالت می‌خواهد.',
        price: 250,
        features: [
          { icon: BIconPatchCheckFill, title: 'بازدیدکنندگان ماهانه نامحدود' },
          { icon: BIconPatchCheckFill, title: 'استراتژیست‌های اختصاصی SEO' },
          { icon: BIconPatchCheckFill, title: 'ویرایشگرهای سبک گوگل اسناد' },
          { icon: BIconPatchCheckFill, title: 'پشتیبانی چت و ایمیل پایه' },
          { icon: BIconPatchCheckFill, title: 'موتور توصیه محصول مبتنی بر هوش مصنوعی' }
        ]
      }
    ]
  },
  {
    duration: 'year',
    plans: [
      {
        title: 'حالت رئیس',
        description: 'در هیچ برداشتی، کمک‌های متناقض با رفتارهایی که او عدالت می‌خواهد.',
        price: 299,
        features: [
          { icon: BIconPatchCheckFill, title: 'بازدیدکنندگان ماهانه نامحدود' },
          { icon: BIconPatchCheckFill, title: 'استراتژیست‌های اختصاصی SEO' },
          { icon: BIconPatchCheckFill, title: 'ویرایشگرهای سبک گوگل اسناد' },
          { icon: BIconPatchCheckFill, title: 'پشتیبانی چت و ایمیل پایه' },
          { icon: BIconPatchCheckFill, title: 'موتور توصیه محصول مبتنی بر هوش مصنوعی' }
        ]
      }
    ]
  }
]

export const pricingData: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        title: 'سفارشی‌سازی',
        description:
          'طرح اساسی ما یک راه‌حل خودخدمت برای کسب‌وکارها برای مدیریت پیام‌رسانی و شخصی‌سازی وب‌سایت است.',
        price: 20
      }
    ]
  },
  {
    duration: 'year',
    plans: [
      {
        title: 'سفارشی‌سازی',
        description:
          'طرح اساسی ما یک راه‌حل خودخدمت برای کسب‌وکارها برای مدیریت پیام‌رسانی و شخصی‌سازی وب‌سایت است.',
        price: 25
      }
    ]
  }
]
