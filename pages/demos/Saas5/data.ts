import {
  BIconBarChartSteps,
  BIconHourglassBottom,
  BIconLightningChargeFill,
  BIconPatchCheck,
  BIconRocketFill
} from 'bootstrap-icons-vue'
import type { BlogType, FeatureType, PricingPlanType } from '@/types'

import decoration20 from '@/assets/images/elements/saas-decoration/20.png'
import decoration21 from '@/assets/images/elements/saas-decoration/21.png'
import decoration22 from '@/assets/images/elements/saas-decoration/22.png'

import blog1 from '@/assets/images/blog/4by3/01.jpg'
import blog6 from '@/assets/images/blog/4by3/06.jpg'
import blog7 from '@/assets/images/blog/4by3/07.jpg'

export const features: FeatureType[] = [
  {
    title: 'اتوماسیون هوشمند',
    description: 'وظایف تکراری را خودکار کنید تا بتوانید بر روی کارهای استراتژیک تمرکز کنید.',
    icon: BIconLightningChargeFill
  },
  {
    title: 'همکاری در زمان واقعی',
    description: 'تیم، مشتریان و شرکای خود را به‌طور آنی متصل کنید.',
    icon: BIconHourglassBottom
  },
  {
    title: 'تحلیل‌های پیشرفته',
    description: 'با ابزارهای تحلیلی قوی ما بینش‌های ارزشمندی کسب کنید.',
    icon: BIconBarChartSteps
  },
  {
    title: 'سفارشی‌سازی',
    description: 'ویژگی‌ها و گردش‌کارها را برای تطابق با نیازهای خود سفارشی کنید.',
    icon: BIconRocketFill
  }
]

export const features2: FeatureType[] = [
  {
    title: 'پشتیبانی سریع چت 24/7',
    description: 'از پشتیبانی چت سریع و ۲۴ ساعته لذت ببرید.',
    image: decoration20
  },
  {
    title: 'رمزگذاری امن داده‌ها',
    description: 'این به عنوان یک پایه در تضمین محرمانگی قرار دارد.',
    image: decoration22
  },
  {
    title: 'همکاری تیمی',
    description: 'با اعضای تیم خود به‌طور بی‌وقفه همکاری کنید، مانند هرگز قبل از آن.',
    image: decoration21
  }
]

export const blogs: BlogType[] = [
  {
    title: '۱۰ چیزی که باید درباره میزل بدانید',
    publishedBy: {
      firstName: 'برایان',
      lastName: 'نایت'
    },
    category: 'فناوری',
    image: blog1,
    route: { name: 'blog.single.v2' }
  },
  {
    title: '۵ تردید سرمایه‌گذاری که باید روشن کنید',
    publishedBy: {
      firstName: 'آماندا',
      lastName: 'رید'
    },
    category: 'بازاریابی',
    image: blog6,
    route: { name: 'blog.single.v2' }
  },
  {
    title: '۱۰ چیزی که باید درباره میزل بدانید',
    publishedBy: {
      firstName: 'برایان',
      lastName: 'نایت'
    },
    category: 'فناوری',
    image: blog7,
    route: { name: 'blog.single.v2' }
  }
]

export const pricingData: PricingPlanType = {
  price: 120,
  title: 'قیمت‌گذاری شفاف',
  description:
    "تعهد ما به برتری در خدمات مشتری یکی از دلایل اصلی است که ما در صدر بازار قرار داریم. ما همیشه به سختی تلاش کرده‌ایم تا بهترین تجربه را برای مشتریان خود فراهم کنیم.",
  route: { name: 'pricing' },
  features: [
    { icon: BIconPatchCheck, title: 'تا 5 کاربر در ماه' },
    { icon: BIconPatchCheck, title: '۵ میزبان و دامنه رایگان' },
    { icon: BIconPatchCheck, title: 'ویرایشگرهای سبک گوگل اسناد' },
    { icon: BIconPatchCheck, title: 'پشتیبانی از بیش از ۳۰ زبان' },
    { icon: BIconPatchCheck, title: 'پشتیبانی اختصاصی 24/7' }
  ]
}
