import {
  businessIcon,
  businessIcon2,
  designIcon,
  marketingIcon,
  strategicIcon,
  taxIcon
} from '@/assets/data/icons'
import type { BlogType, FAQType, ProjectType, ServiceType, TestimonialType } from '@/types'

import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import client2 from '@/assets/images/client/logo-listkit.svg'
import client4 from '@/assets/images/client/logo-vulk.svg'
import client6 from '@/assets/images/client/logo-mizzle.svg'

import blogImg1 from '@/assets/images/blog/4by3/01.jpg'
import blogImg2 from '@/assets/images/blog/4by3/02.jpg'
import blogImg3 from '@/assets/images/blog/4by3/03.jpg'
import blogImg4 from '@/assets/images/blog/4by3/04.jpg'
import blogImg5 from '@/assets/images/blog/4by3/05.jpg'

import portfolioImg1 from '@/assets/images/portfolio/masonry/01.jpg'
import portfolioImg2 from '@/assets/images/portfolio/masonry/02.jpg'
import portfolioImg3 from '@/assets/images/portfolio/masonry/03.jpg'
import portfolioImg4 from '@/assets/images/portfolio/masonry/04.jpg'
import portfolioImg5 from '@/assets/images/portfolio/masonry/05.jpg'
import portfolioImg6 from '@/assets/images/portfolio/masonry/06.jpg'

export type RecentProjectType = {
  categoryClass: string
} & ProjectType

export const services: ServiceType[] = [
  {
    title: 'تحلیل کسب‌وکار',
    description:
      "خدمات تحلیل کسب‌وکار ما اولین قدم برای درک وضعیت فعلی سازمان شماست.",
    icon: businessIcon
  },
  {
    title: 'برنامه‌ریزی استراتژیک',
    description:
      'ما به‌طور نزدیک با شما همکاری می‌کنیم تا نقشه راهی سفارشی که با اهداف و مقاصد شما همسو است، توسعه دهیم.',
    icon: strategicIcon
  },
  {
    title: 'استراتژی بازاریابی',
    description:
      "خدمات استراتژی بازاریابی ما به‌منظور ارتقاء دید و تعامل برند شما طراحی شده است.",
    icon: marketingIcon
  },
  {
    title: 'طراحی تجربه',
    description:
      'از طراحی وب‌سایت تا توسعه اپلیکیشن، ما زیبایی‌شناسی را با قابلیت استفاده ترکیب می‌کنیم تا تأثیر ماندگاری بر جا بگذاریم.',
    icon: designIcon
  },
  {
    title: 'مشاوره کسب‌وکار',
    description: 'مشاوران ما به مشاوران مورد اعتماد شما در مسیر موفقیت تبدیل می‌شوند.',
    icon: businessIcon2
  },
  {
    title: 'مشاور مالیاتی',
    description:
      "ما اینجا هستیم تا استراتژی مالیاتی شما را بهینه کنیم تا بتوانید بر روی مهم‌ترین مسائل کسب‌وکار خود تمرکز کنید.",
    icon: taxIcon
  }
]

export const testimonials: TestimonialType[] = [
  {
    comment:
      'کمک‌های شما بسیار مفید بوده است. من از پاسخ‌های سریع و بصیرتی که کار من را بسیار آسان‌تر کرده، قدردانی می‌کنم. از حمایت عالی شما متشکرم.',
    user: {
      avatar: avatar5,
      company: {
        name: 'بلاگ‌زین',
        image: client6
      },
      role: 'مدیر عامل و مدیر',
      firstName: 'ژاکلین',
      lastName: 'میلر'
    }
  },
  {
    comment:
      'این به‌طور مداوم پاسخ‌های دقیق و به‌خوبی crafted شده‌ای ارائه می‌دهد که زمان و تلاش زیادی را برای من صرفه‌جویی می‌کند. از این منبع باارزش متشکرم!',
    user: {
      avatar: avatar7,
      company: {
        name: 'بلاگ‌زین',
        image: client4
      },
      role: 'مدیر عامل و مدیر',
      firstName: 'دنیس',
      lastName: 'بارت'
    }
  },
  {
    comment:
      "بهترین تم بوت‌استرپ که تا به حال استفاده کرده‌ایم - شخصی‌سازی آن آسان است و تمامی ویژگی‌های مورد نیاز ما را دارد.",
    user: {
      avatar: avatar5,
      company: {
        name: 'بلاگ‌زین',
        image: client2
      },
      role: 'مدیر عامل و مدیر',
      firstName: 'دنیس',
      lastName: 'بارت'
    }
  }
]

export const faqData: FAQType[] = [
  {
    question: 'همکاری در زمان واقعی',
    answer:
      'به‌طور بی‌وقفه با اعضای تیم خود در زمان واقعی همکاری کنید. پیش‌نویس‌ها را به اشتراک بگذارید، ویرایش کنید و به‌طور کارآمد با هم کار کنید تا محتوایی که با اهداف شما همخوانی دارد، ایجاد کنید. خانه Sight هرگز رابطه جنسی ندارد. هیچ بازدیدی از موضوع جاذبه به سمت خارج وجود ندارد.'
  },
  {
    question: 'یکپارچه‌سازی قدرتمند API',
    answer:
      'پلتفرم ما گزینه‌های یکپارچه‌سازی قدرتمند API را ارائه می‌دهد و به شما امکان می‌دهد تا قابلیت‌های تولید محتوای ما را به نرم‌افزارها، اپلیکیشن‌ها یا پلتفرم‌های موجود خود ادغام کنید.'
  },
  {
    question: 'حریم خصوصی و امنیت',
    answer:
      "ما امنیت و حریم خصوصی داده‌های شما را در اولویت قرار می‌دهیم. پلتفرم ما به بالاترین استانداردهای حفاظت از داده‌ها پایبند است تا اطمینان حاصل شود که محتوای شما محرمانه و امن باقی بماند."
  },
  {
    question: 'راه‌حل‌های مقرون‌به‌صرفه',
    answer:
      'ما گزینه‌های قیمت‌گذاری انعطاف‌پذیری را برای پاسخگویی به نیازهای شما ارائه می‌دهیم و اطمینان حاصل می‌کنیم که بیشترین ارزش را از پلتفرم ما بدون نیاز به هزینه زیاد دریافت کنید.'
  },
  {
    question: 'تحلیل داده‌ها',
    answer:
      'ادارات برای بالاترین سطح و پاسخ دادن به یک تلاش علفزار. در روزنامه ستایش نشده است. به‌طور مکرر تمایل به مالکیت، تصمیم‌گیری یا ظاهر من را تحت تأثیر قرار نمی‌دهد.'
  }
]

export const blogs: BlogType[] = [
  {
    title: 'تسلط بر طراحی وب‌سایت پاسخگو با بوت‌استرپ',
    publishedBy: {
      firstName: 'ژاکلین',
      lastName: 'میلر'
    },
    image: blogImg1,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'تسلط بر بوت‌استرپ: طراحی وب‌سایت‌های شگفت‌انگیز',
    publishedBy: {
      firstName: 'دنیس',
      lastName: 'بارت'
    },
    image: blogImg2,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'طراحی وب تعاملی با بوت‌استرپ و استک‌بروز',
    publishedBy: {
      firstName: 'کارولین',
      lastName: 'اورتیز'
    },
    image: blogImg3,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'توسعه وب بدون زحمت با میزل',
    publishedBy: {
      firstName: 'کارولین',
      lastName: 'اورتیز'
    },
    image: blogImg4,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'شیک و پاسخگو - طراحی با بوت‌استرپ و میزل',
    publishedBy: {
      firstName: 'کارولین',
      lastName: 'اورتیز'
    },
    image: blogImg5,
    route: { name: 'blog.single.v1' }
  }
]

export const projects: RecentProjectType[] = [
  {
    name: 'وب‌سایت گردش‌کارهای پویا',
    category: 'طراحی UI/UX',
    categoryClass: 'marketing business brand',
    image: portfolioImg1,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    name: 'بازطراحی ElevateTech',
    category: 'طراحی برند',
    categoryClass: 'brand ui',
    image: portfolioImg4,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    name: 'بازطراحی کاربرمحور',
    category: 'طراحی وب',
    categoryClass: 'business design brand',
    image: portfolioImg2,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    name: 'ابتکار پایداری',
    category: 'توسعه کسب‌وکار',
    categoryClass: 'design marketing',
    image: portfolioImg5,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    name: 'گسترش تجارت الکترونیک',
    category: 'بازاریابی دیجیتال',
    categoryClass: 'business design',
    image: portfolioImg6,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    name: 'مشارکت در رسانه‌های اجتماعی',
    category: 'طراحی UI/UX',
    categoryClass: 'ui',
    image: portfolioImg3,
    route: { name: 'portfolio.case-study.v1' }
  }
]
