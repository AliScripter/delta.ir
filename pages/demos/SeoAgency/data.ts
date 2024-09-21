import type { ArticleType, CompanyType, MemberType, StepType, TestimonialType } from '@/types'

import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import listImg1 from '@/assets/images/portfolio/list/01.jpg'
import listImg2 from '@/assets/images/portfolio/list/02.jpg'
import listImg3 from '@/assets/images/portfolio/list/03.jpg'

import client2 from '@/assets/images/client/client-white/logo-listkit-w.svg'
import client3 from '@/assets/images/client/client-white/logo-nephos-w.svg'
import client4 from '@/assets/images/client/client-white/logo-vulk-w.svg'

import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'

export type CaseStudyType = {
  company: CompanyType
} & ArticleType

export const testimonials: TestimonialType[] = [
  {
    user: {
      firstName: 'ژاکلین',
      lastName: 'میلر',
      role: 'طراح محصول'
    },
    comment:
      "تعهد ما به برتری در خدمات مشتری یکی از دلایل اصلی است که ما در صدر بازار قرار داریم. ما همیشه به سختی تلاش کرده‌ایم تا بهترین تجربه را برای مشتریان خود فراهم کنیم."
  },
  {
    user: {
      firstName: 'اما',
      lastName: 'واتسون',
      role: 'هم‌بنیان‌گذار'
    },
    comment:
      'خنده‌ها و شادی‌ها بسیار زیاد بود و خوشبختانه، پشتیبانی لازم برای دستیابی به اهداف بالا را داشتیم. با وجود تلاش‌هایمان، برخی چالش‌ها همچنان باقی ماندند.'
  },
  {
    user: {
      firstName: 'لوئیس',
      lastName: 'فرگوسن',
      role: 'توسعه‌دهنده وب'
    },
    comment:
      'دو نفر قبل از آنکه به تنگنا بیفتند، به جز لحظه‌ای از خودشان به کمک دیگران وابسته نشدند. ناامیدی و اطمینان همسر راه را روشن کردند و در نهایت هیچ راهی برای جبران باقی نماند.'
  }
]

export const caseStudies: CaseStudyType[] = [
  {
    company: {
      image: client2
    },
    title: 'بهینه‌سازی وب‌سایت برای TechWave',
    description: 'قوی‌ترین نرم‌افزار و نرم‌افزار بازاریابی نرم‌افزار و اپلیکیشن.',
    tags: ['برندینگ', 'بسته‌بندی', 'توسعه'],
    image: listImg2,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    company: {
      image: client3
    },
    title: 'تبدیل ایده‌ها به واقعیت با آیدکو',
    description: 'قوی‌ترین نرم‌افزار و نرم‌افزار بازاریابی نرم‌افزار و اپلیکیشن.',
    tags: ['طراحی UI/UX', 'پژوهش'],
    image: listImg1,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    company: {
      image: client4
    },
    title: 'کازمتیک‌های بیو',
    description: 'قوی‌ترین نرم‌افزار و نرم‌افزار بازاریابی نرم‌افزار و اپلیکیشن.',
    tags: ['برندینگ', 'طراحی UI/UX'],
    image: listImg3,
    route: { name: 'portfolio.case-study.v2' }
  }
]

export const approachSteps: StepType[] = [
  {
    stepNumber: 1,
    title: 'درک کسب‌وکار',
    description:
      'ما با درک عمیق از کسب‌وکار، صنعت و مخاطبان هدف شما آغاز می‌کنیم.'
  },
  {
    stepNumber: 2,
    title: 'پژوهش کلمات کلیدی',
    description:
      'رویکرد ما با تحقیق جامع در مورد کلمات کلیدی که مشتریان بالقوه به دنبال آن هستند، آغاز می‌شود.'
  },
  {
    stepNumber: 3,
    title: 'بهینه‌سازی فنی',
    description:
      'ما یک ممیزی فنی کامل از وب‌سایت شما انجام می‌دهیم تا هر گونه مشکلی که ممکن است مانع عملکرد آن شود، شناسایی کنیم.'
  },
  {
    stepNumber: 4,
    title: 'استراتژی محتوا',
    description:
      'محتوا در دنیای SEO پادشاه است. ما یک طرح محتوای استراتژیک توسعه می‌دهیم که با اهداف شما هم‌راستا باشد.'
  },
  {
    stepNumber: 5,
    title: 'گزارش‌دهی شفاف',
    description:
      'ما گزارش‌ها و به‌روزرسانی‌های منظم در مورد پیشرفت کمپین‌های SEO شما ارائه می‌دهیم و به شما تصویر کامل را می‌دهیم.'
  }
]

export const teamMembers: MemberType[] = [
  {
    firstName: 'سموئل',
    lastName: 'بیشاپ',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'طراحی UI/UXer',
    avatar: avatar4
  },
  {
    firstName: 'جودی',
    lastName: 'نگویان',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'طراح وب',
    avatar: avatar11
  },
  {
    firstName: 'لوئیس',
    lastName: 'فرگوسن',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'توسعه‌دهنده وب',
    avatar: avatar6
  },
  {
    firstName: 'دنیس',
    lastName: 'بارت',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'مدیرعامل و بنیان‌گذار',
    avatar: avatar9
  },
  {
    firstName: 'دنیس',
    lastName: 'بارت',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'مدیرعامل و بنیان‌گذار',
    avatar: avatar5
  },
  {
    firstName: 'برایان',
    lastName: 'نایت',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'طراح محصول',
    avatar: avatar10
  }
]
