import type { PricingType, StatisticType, TestimonialType } from '@/types'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'
import { BIconCheckLg } from 'bootstrap-icons-vue'

export const statData: StatisticType[] = [
  {
    title: 'مجموع دانلودها',
    number: 15,
    suffix: 'میلیون+'
  },
  {
    title: 'مجموع دنبال‌کنندگان',
    number: 22,
    suffix: 'میلیون+'
  },
  {
    title: 'مجموع نقدها',
    number: 2300,
    suffix: '+'
  },
  {
    title: 'مجموع کشورها',
    number: 107,
    suffix: '+'
  }
]

export const pricingData: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        badge: 'حالت رئیس',
        price: 45,
        features: [
          { icon: BIconCheckLg, title: 'تا 5 کاربر در ماه' },
          { icon: BIconCheckLg, title: 'دامنه میزبان رایگان 5 عدد' },
          { icon: BIconCheckLg, title: 'ویرایشگرهای سبک گوگل docs' },
          { icon: BIconCheckLg, title: 'پشتیبانی از بیش از ۳۰ زبان' },
          { icon: BIconCheckLg, title: 'ویجت‌های صفحات فرود وب' },
          { icon: BIconCheckLg, title: 'پشتیبانی ۲۴/۷ اختصاصی' }
        ]
      },
      {
        badge: 'حالت سازمانی',
        price: 175,
        features: [
          { icon: BIconCheckLg, title: 'تا 5 کاربر در ماه' },
          { icon: BIconCheckLg, title: 'دامنه میزبان رایگان 5 عدد' },
          { icon: BIconCheckLg, title: 'ویرایشگرهای سبک گوگل docs' },
          { icon: BIconCheckLg, title: 'پشتیبانی از بیش از ۳۰ زبان' },
          { icon: BIconCheckLg, title: 'ویجت‌های صفحات فرود وب' },
          { icon: BIconCheckLg, title: 'پشتیبانی ۲۴/۷ اختصاصی' }
        ]
      }
    ]
  },
  {
    duration: 'year',
    plans: [
      {
        badge: 'حالت رئیس',
        price: 56,
        features: [
          { icon: BIconCheckLg, title: 'تا 5 کاربر در ماه' },
          { icon: BIconCheckLg, title: 'دامنه میزبان رایگان 5 عدد' },
          { icon: BIconCheckLg, title: 'ویرایشگرهای سبک گوگل docs' },
          { icon: BIconCheckLg, title: 'پشتیبانی از بیش از ۳۰ زبان' },
          { icon: BIconCheckLg, title: 'ویجت‌های صفحات فرود وب' },
          { icon: BIconCheckLg, title: 'پشتیبانی ۲۴/۷ اختصاصی' }
        ]
      },
      {
        badge: 'حالت سازمانی',
        price: 199,
        features: [
          { icon: BIconCheckLg, title: 'تا 5 کاربر در ماه' },
          { icon: BIconCheckLg, title: 'دامنه میزبان رایگان 5 عدد' },
          { icon: BIconCheckLg, title: 'ویرایشگرهای سبک گوگل docs' },
          { icon: BIconCheckLg, title: 'پشتیبانی از بیش از ۳۰ زبان' },
          { icon: BIconCheckLg, title: 'ویجت‌های صفحات فرود وب' },
          { icon: BIconCheckLg, title: 'پشتیبانی ۲۴/۷ اختصاصی' }
        ]
      }
    ]
  }
]
export const testimonials: TestimonialType[] = [
  {
    user: {
      avatar: avatar1,
      firstName: 'بیلی',
      lastName: 'واسکز'
    },
    comment: 'اشتراک صدای تایم شده او را به گسترش نویز جوان هدایت کرد. در عروسی‌ها خندیدن باور شده.',
    rating: 5
  },
  {
    user: {
      avatar: avatar2,
      firstName: 'اما',
      lastName: 'واتسون'
    },
    comment:
      "روزنامه مهتاب بر اساس لذت بردن از آن دلپذیر است. اشتراک صدای تایم شده او را به گسترش نویز جوان هدایت کرد. در عروسی‌ها خندیدن باور شده، ما به تازگی پنجمین وب‌سایت خود را راه‌اندازی کرده‌ایم! شما فوق‌العاده هستید!",
    rating: 4.5
  },
  {
    user: {
      avatar: avatar3,
      firstName: 'لری',
      lastName: 'لاوسون'
    },
    comment: 'اشتراک صدای تایم شده او را به گسترش نویز جوان هدایت کرد. در عروسی‌ها خندیدن باور شده.',
    rating: 3.5
  },
  {
    user: {
      avatar: avatar5,
      firstName: 'کارولین',
      lastName: 'اورتیز'
    },
    comment:
      'تجربه استفاده از میزل لذت‌بخش و آسان بود. اشتراک صدای تایم شده او را به گسترش نویز جوان هدایت کرد. در عروسی‌ها خندیدن باور شده.',
    rating: 5
  },
  {
    user: {
      avatar: avatar7,
      firstName: 'دنیس',
      lastName: 'بارت'
    },
    comment:
      "من واقعاً از خدمات میزل راضی هستم. ما به تازگی پنجمین وب‌سایت خود را راه‌اندازی کرده‌ایم - آنها فوق‌العاده هستند! در عروسی‌ها خندیدن باور شده، ما به تازگی پنجمین وب‌سایت خود را راه‌اندازی کرده‌ایم! شما فوق‌العاده هستید",
    rating: 4.5
  },
  {
    user: {
      avatar: avatar10,
      firstName: 'لوری',
      lastName: 'استیونز'
    },
    comment:
      "من واقعاً از خدمات خود راضی هستم. به لطف این خدمات، ما به تازگی پنجمین وب‌سایت خود را راه‌اندازی کرده‌ایم! شما فوق‌العاده هستید!",
    rating: 5
  },
  {
    user: {
      avatar: avatar8,
      firstName: 'جوان',
      lastName: 'والاس'
    },
    comment: 'اشتراک صدای تایم شده او را به گسترش نویز جوان هدایت کرد. در عروسی‌ها خندیدن باور شده.',
    rating: 5
  },
  {
    user: {
      avatar: avatar11,
      firstName: 'ژاکلین',
      lastName: 'میلر'
    },
    comment: 'من واقعاً از خدمات خود راضی هستم. شما فوق‌العاده هستید!',
    rating: 3.5
  },
  {
    user: {
      avatar: avatar4,
      firstName: 'لوئیس',
      lastName: 'فرگوسن'
    },
    comment:
      "ما به تازگی پنجمین وب‌سایت خود را راه‌اندازی کرده‌ایم - آنها فوق‌العاده هستند! در عروسی‌ها خندیدن باور شده، ما به تازگی پنجمین وب‌سایت خود را راه‌اندازی کرده‌ایم! شما فوق‌العاده هستید",
    rating: 4
  }
]
