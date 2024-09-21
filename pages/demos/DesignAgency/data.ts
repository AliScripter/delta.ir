import type { BlogType, ProjectType, ServiceType, StatisticType, TestimonialType } from '@/types'

import serviceImg1 from '@/assets/images/services/icons/web-design.svg'
import serviceImg2 from '@/assets/images/services/icons/brand-design.svg'
import serviceImg3 from '@/assets/images/services/icons/graphic-design.svg'
import serviceImg4 from '@/assets/images/services/icons/social-media.svg'
import serviceImg5 from '@/assets/images/services/icons/motion-graphics.svg'

import portfolio1 from '@/assets/images/portfolio/3by4/01.jpg'
import portfolio2 from '@/assets/images/portfolio/3by4/02.jpg'
import portfolio3 from '@/assets/images/portfolio/3by4/03.jpg'
import portfolio4 from '@/assets/images/portfolio/3by4/04.jpg'
import portfolio5 from '@/assets/images/portfolio/3by4/05.jpg'
import portfolio6 from '@/assets/images/portfolio/3by4/06.jpg'

import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'

import blog1 from '@/assets/images/blog/4by3/01.jpg'
import blog2 from '@/assets/images/blog/4by3/02.jpg'

export const services: ServiceType[] = [
  {
    title: 'توسعه وب',
    description:
      'توسعه‌دهندگان متخصص ما عملکرد بی‌نقص و بهینه را برای تجربه کاربری راحت در تمام دستگاه‌ها تضمین می‌کنند.',
    image: serviceImg1,
    route: { name: '' }
  },
  {
    title: 'هویت برند',
    description:
      'با هویت برند و طراحی لوگوی منحصر به فردی که ارزش‌های شما را منعکس کرده و با بازار هدف شما همخوانی دارد، تأثیر ماندگاری بگذارید.',
    image: serviceImg2,
    route: { name: '' }
  },
  {
    title: 'طراحی گرافیک',
    description:
      'از گرافیک‌های جلب توجه‌کننده تا تصاویر جذاب، طراحان با استعداد ما ایده‌های شما را در خلق آثار بصری خیره‌کننده زنده می‌کنند.',
    image: serviceImg3,
    route: { name: '' }
  },
  {
    title: 'گرافیک‌های رسانه‌های اجتماعی',
    description:
      'خدمات طراحی رسانه‌های اجتماعی ما به شما کمک می‌کند تا پست‌ها و تبلیغات بصری جذاب ایجاد کنید که با مخاطبان شما ارتباط برقرار کرده و نتایج مطلوبی را به همراه داشته باشد.',
    image: serviceImg4,
    route: { name: '' }
  },
  {
    title: 'گرافیک‌های متحرک',
    description:
      'با گرافیک‌های متحرک و انیمیشن‌های پویا برند خود را زنده کنید که توجه را جلب کرده و پیام شما را به شیوه‌ای جذاب منتقل می‌کند.',
    image: serviceImg5,
    route: { name: '' }
  }
]

export const projects: ProjectType[] = [
  {
    name: 'ابتکار پایداری',
    image: portfolio1,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'خوشحالی دیجیتال',
    image: portfolio6,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'جادوی موبایل',
    image: portfolio4,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'درخشش رسانه‌های اجتماعی',
    image: portfolio3,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'شگفتی‌های متحرک',
    image: portfolio5,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'نوآوری آزاد شده',
    image: portfolio2,
    route: { name: 'portfolio.case-study.v2' }
  }
]

export const testimonials: TestimonialType[] = [
  {
    user: {
      avatar: avatar11,
      firstName: 'اما',
      lastName: 'واتسون',
      role: 'هم‌بنیان‌گذار',
      company: {
        name: 'وبلاگ‌زین'
      }
    },
    comment:
      "ما در پروژه‌های متعددی با میزل همکاری کرده‌ایم و هر بار نتایج فوق‌العاده‌ای دریافت کرده‌ایم. تیم آن‌ها فراتر از انتظار عمل می‌کند تا اهداف ما را درک کرده و طراحی‌هایی ارائه دهد که با مخاطبان ما هماهنگ باشد.",
    rating: 4.5
  },
  {
    user: {
      avatar: avatar4,
      firstName: 'لوئیس',
      lastName: 'فرگوسن',
      role: 'توسعه‌دهنده وب'
    },
    comment:
      "آن‌ها برندینگ استارتاپ ما را با مهارت‌های طراحی فوق‌العاده‌شان به سطح بعدی بردند. آن‌ها دیدگاه ما را درک کردند و هویت برند را ارائه دادند که به‌طور کامل اصول ما را به تصویر می‌کشد. ",
    rating: 4.5
  },
  {
    user: {
      avatar: avatar9,
      firstName: 'سموئل',
      lastName: 'بیشاپ',
      role: 'طراح محصول'
    },
    comment:
      "تیم آن‌ها سطحی از خلاقیت و نوآوری را به ارمغان می‌آورد که در جای دیگری پیدا نمی‌شود. آن‌ها تنها طراح نیستند، بلکه شرکای استراتژیکی هستند که در موفقیت پروژه‌های ما سرمایه‌گذاری کرده‌اند. ما مشتاقانه منتظر ادامه همکاری‌مان هستیم.",
    rating: 4.5
  }
]

export const statData: StatisticType[] = [
  {
    title: 'استراتژی برند',
    number: 75,
    suffix: '%',
    description: "رویکرد ما به استراتژی برند با اهداف شرکت شروع می‌شود."
  },
  {
    title: 'دسته‌بندی‌ها',
    number: 220,
    suffix: '+',
    description: 'تحلیل عمیق کاربران بازار در سال 1403'
  },
  {
    title: 'پروژه‌ها',
    number: 180,
    suffix: '+',
    description: 'پروژه‌های موفق با خلاقیت.'
  },
  {
    title: 'انتشار',
    number: 1045,
    description: 'برجسته‌سازی تعاملات تاثیرگذار و مشارکت کاربران'
  }
]

export const blogs: BlogType[] = [
  {
    title: 'تسلط بر طراحی وب‌سایت پاسخگو با بوت‌استرپ',
    publishedBy: {
      firstName: 'ژاکلین',
      lastName: 'میلر'
    },
    image: blog1,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'تسلط بر بوت‌استرپ: طراحی وب‌سایت‌های شگفت‌انگیز',
    publishedBy: {
      firstName: 'دنیس',
      lastName: 'بارت'
    },
    image: blog2,
    route: { name: 'blog.single.v1' }
  }
]
