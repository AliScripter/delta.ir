import serviceImg1 from '@/assets/images/services/4by3/01.jpg'
import serviceImg2 from '@/assets/images/services/4by3/02.jpg'
import serviceImg3 from '@/assets/images/services/4by3/03.jpg'
import serviceImg4 from '@/assets/images/services/4by3/04.jpg'
import serviceImg5 from '@/assets/images/services/4by3/05.jpg'
import serviceImg6 from '@/assets/images/services/4by3/06.jpg'

import blogImg3 from '@/assets/images/blog/4by3/03.jpg'
import blogImg7 from '@/assets/images/blog/4by3/07.jpg'
import blogImg8 from '@/assets/images/blog/4by3/08.jpg'

import project1 from '@/assets/images/portfolio/list/02.jpg'
import project2 from '@/assets/images/portfolio/list/03.jpg'

import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

import { BIconBullseye, BIconHeadset, BIconRocketTakeoff, BIconSearch } from 'bootstrap-icons-vue'
import type {
  BlogType,
  ProjectType,
  ServiceType,
  StatisticType,
  StepType,
  TestimonialType
} from '@/types'

export const services: ServiceType[] = [
  {
    title: 'توسعه نرم‌افزار سفارشی',
    description: 'ما تجربه کاربری، مقیاس‌پذیری و امنیت را اولویت می‌دهیم تا از ... اطمینان حاصل کنیم.',
    image: serviceImg1,
    route: { name: 'services.single' }
  },
  {
    title: 'طراحی و توسعه وب',
    description: 'از وب‌سایت‌های پاسخگو تا پلتفرم‌های تجارت الکترونیک.',
    image: serviceImg2,
    route: { name: 'services.single' }
  },
  {
    title: 'استراتژی‌های بازاریابی دیجیتال',
    description: 'با بازاریابی دیجیتال جامع ما، به نتایج هدف خود دست یابید.',
    image: serviceImg3,
    route: { name: 'services.single' }
  },
  {
    title: 'راهکارهای امنیت سایبری',
    description: 'کسب‌وکار خود را از تهدیدات سایبری با راه‌حل‌های امنیت سایبری ما محافظت کنید.',
    image: serviceImg4,
    route: { name: 'services.single' }
  },
  {
    title: 'مشاوره و پشتیبانی IT',
    description: 'از تخصص ما برای بهینه‌سازی زیرساخت‌ها و عملیات IT خود بهره ببرید.',
    image: serviceImg5,
    route: { name: 'services.single' }
  },
  {
    title: 'خدمات طراحی UI/UX',
    description: 'رضایت و تعامل کاربران را با خدمات ما افزایش دهید.',
    image: serviceImg6,
    route: { name: 'services.single' }
  }
]

export const steps: StepType[] = [
  {
    title: 'کشف و مشاوره',
    description: 'ما با شناخت نیازهای منحصر به فرد، اهداف و چالش‌های شما آغاز می‌کنیم.',
    icon: BIconSearch
  },
  {
    title: 'برنامه‌ریزی و استراتژی',
    description: 'ما مراحل و تحویل‌های پروژه را تعریف می‌کنیم تا فرآیند در مسیر درست باقی بماند.',
    icon: BIconBullseye
  },
  {
    title: 'راه‌اندازی و استقرار',
    description:
      'ما یک انتقال صاف به نسخه زنده را تضمین می‌کنیم و در هر مرحله از راه پشتیبانی ارائه می‌دهیم.',
    icon: BIconRocketTakeoff
  },
  {
    title: 'پشتیبانی و نگهداری',
    description: 'ما خدمات پشتیبانی و نگهداری مداوم را ارائه می‌دهیم تا نرم‌افزار شما به‌طور مداوم کار کند.',
    icon: BIconHeadset
  }
]

export const projects: ProjectType[] = [
  {
    name: 'بهینه‌سازی قالب مدیریتی تیلوایز',
    category: 'طراحی گرافیک',
    image: project1,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'تبدیل ایده‌ها به واقعیت با قالب آیدکو',
    category: 'طراحی UI/UX',
    image: project2,
    route: { name: 'portfolio.case-study.v2' }
  }
]

export const statData: StatisticType[] = [
  {
    title: 'مشتری جهانی',
    number: 30,
    prefix: '>',
    suffix: 'K'
  },
  {
    title: 'تحلیل گزارش‌های کسب‌وکار',
    number: 99,
    suffix: '%'
  },
  {
    title: 'پروژه‌های جهانی',
    number: 350,
    suffix: '+'
  }
]

export const testimonials: TestimonialType[] = [
  {
    title: "نتایج آژانس من را دگرگون کرد",
    comment:
      'به عنوان یک کارفرما، این پلتفرم انتظارات من را فراتر برد. ما به سرعت استعدادهای برتر را برای شرکت خود پیدا کردیم، به لطف رابط کاربری دوستانه و قابلیت ارتباط با کاندیداهایی که به‌طور کامل با نیازهای ما مطابقت دارند.',
    rating: 4.5,
    user: {
      firstName: 'لوئیس',
      lastName: 'فرگوسن',
      role: 'توسعه‌دهنده وب',
      avatar: avatar4
    }
  },
  {
    title: "نتایج آژانس من را دگرگون کرد",
    comment:
      'به عنوان یک کارفرما، این پلتفرم انتظارات من را فراتر برد. ما به سرعت استعدادهای برتر را برای شرکت خود پیدا کردیم، به لطف رابط کاربری دوستانه و قابلیت ارتباط با کاندیداهایی که به‌طور کامل با نیازهای ما مطابقت دارند.',
    rating: 4.5,
    user: {
      firstName: 'اما',
      lastName: 'واتسون',
      role: 'هم‌بنیان‌گذار',
      avatar: avatar5
    }
  },
  {
    title: "نتایج آژانس من را دگرگون کرد",
    comment:
      'به عنوان یک کارفرما، این پلتفرم انتظارات من را فراتر برد. ما به سرعت استعدادهای برتر را برای شرکت خود پیدا کردیم، به لطف رابط کاربری دوستانه و قابلیت ارتباط با کاندیداهایی که به‌طور کامل با نیازهای ما مطابقت دارند.',
    rating: 4.5,
    user: {
      firstName: 'سموئل',
      lastName: 'بیشاپ',
      role: 'طراح محصول',
      avatar: avatar6
    }
  }
]

export const blogs: BlogType[] = [
  {
    title: 'شیک و پاسخگو - طراحی با بوت‌استرپ و میزل',
    category: 'فناوری',
    publishedAt: {
      date: 15,
      month: 'فروردین',
      year: 1403
    },
    publishedBy: {
      avatar: avatar2,
      firstName: 'اما',
      lastName: 'واتسون'
    },
    image: blogImg3,
    route: { name: 'blog.single.v2' }
  },
  {
    title: 'تسلط بر قالب‌های وب‌سایت HTML - خلاقیت خود را با بوت‌استرپ آزاد کنید',
    category: 'تحقیقات',
    publishedAt: {
      date: 12,
      month: 'فروردین',
      year: 1403
    },
    publishedBy: {
      avatar: avatar4,
      firstName: 'لوئیس',
      lastName: 'فرگوسن'
    },
    image: blogImg8,
    route: { name: 'blog.single.v2' }
  },
  {
    title: 'طراحی وب بدون زحمت با میزل - خلاقیت خود را آزاد کنید',
    category: 'طراحی',
    publishedAt: {
      date: 8,
      month: 'فروردین',
      year: 1403
    },
    publishedBy: {
      avatar: avatar9,
      firstName: 'آلن',
      lastName: 'اسمیت'
    },
    image: blogImg7,
    route: { name: 'blog.single.v2' }
  }
]
