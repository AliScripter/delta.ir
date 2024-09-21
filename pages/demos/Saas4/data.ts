import { BIconMegaphone, BIconShare, BIconSubtract } from 'bootstrap-icons-vue'
import type {
  BlogType,
  FeatureType,
  StatisticType,
  StepType,
  TestimonialType,
  ToolType
} from '@/types'

import decoration2 from '@/assets/images/elements/saas-decoration/decoration-2.png'
import decoration3 from '@/assets/images/elements/saas-decoration/decoration-3.png'
import decoration4 from '@/assets/images/elements/saas-decoration/decoration-4.png'

import github from '@/assets/images/elements/github.svg'
import googleDrive from '@/assets/images/elements/google-drive.svg'
import mailchimp from '@/assets/images/elements/mailchimp.svg'
import reddit from '@/assets/images/elements/reddit.svg'
import shopify from '@/assets/images/elements/shopify.svg'
import slack from '@/assets/images/elements/slack.svg'
import webflow from '@/assets/images/elements/webflow.svg'
import dropbox from '@/assets/images/elements/dropbox.svg'

import team1 from '@/assets/images/team/01.jpg'
import team6 from '@/assets/images/team/06.jpg'
import team7 from '@/assets/images/team/07.jpg'
import team8 from '@/assets/images/team/08.jpg'

import client2 from '@/assets/images/client/logo-listkit.svg'
import client3 from '@/assets/images/client/logo-nephos.svg'
import client4 from '@/assets/images/client/logo-vulk.svg'
import client5 from '@/assets/images/client/logo-ideko.svg'

import blog1 from '@/assets/images/blog/4by3/01.jpg'
import blog3 from '@/assets/images/blog/4by3/03.jpg'
import blog7 from '@/assets/images/blog/4by3/07.jpg'

export type WorkFlowStepType = {
  image: string
} & StepType

export const steps: WorkFlowStepType[] = [
  {
    stepNumber: 1,
    title: 'حساب خود را ایجاد کنید و کار خود را شروع کنید',
    description: 'برخی از ایده‌های محصول به راحتی به‌دست می‌آید، در حالی که برخی دیگر نیاز به تلاش برای یافتن دارند.',
    image: decoration4
  },
  {
    stepNumber: 2,
    title: 'کد را نصب کنید تا کارها را سازماندهی کنید',
    description:
      'این از من تپه‌ای کشید. ترک‌ها به اشتباه تنظیم شده بودند و درخشان اعتقاد به او داشتند که همه پشتیبانی کرده بودند.',
    image: decoration2
  },
  {
    stepNumber: 3,
    title: 'دریافت راهنمای اتوماسیون بازاریابی رایگان',
    description:
      'چت‌بات می‌تواند به گونه‌ای شخصی‌سازی شود که با صدای برند و لحن آن مطابقت داشته باشد، به طوری که مانند یک گسترش از شرکت به نظر برسد.',
    image: decoration3
  }
]

export const features: FeatureType[] = [
  {
    title: 'داده‌ها و بینش‌های مشترک',
    description: 'تصاویر توهین‌آمیز بودند اما پاسخ داده شده و شش نفر دور از آن‌ها می‌خندیدند.',
    icon: BIconShare
  },
  {
    title: 'ابزارهای همکاری',
    description: "رفتارهای جدید دمنس به صرفه‌جویی‌ها تحت تاثیر اشتباهات بود.",
    icon: BIconSubtract
  },
  {
    title: 'اعلانات و هشدارهای در زمان واقعی',
    description: 'اظهار نظر علاوه بر آن اگر نظر بازدیدکننده باشد.',
    icon: BIconMegaphone
  }
]

export const integrations: ToolType[] = [
  {
    name: 'گیت‌هاب',
    description:
      'گیت‌هاب از Git استفاده می‌کند، سیستمی توزیع‌شده برای کنترل نسخه، تا تغییرات کد را در طول زمان پیگیری کند. ',
    image: github,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'دراپ‌باکس',
    description:
      'ادغام دراپ باکس با راه‌حل‌های پشتیبان‌گیری می‌تواند لایه اضافی از حفاظت داده را فراهم کند.',
    image: dropbox,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'ردیت',
    description:
      'با ادغام با ردیت، می‌توانید به راحتی پست‌ها یا نظرات ردیت را در بلاگ‌ها یا وب‌سایت‌های مشابه به اشتراک بگذارید.',
    image: reddit,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'میل‌چیمپ',
    description:
      'ادغام با ابزارهای تحلیل داده امکان تقسیم‌بندی عمیق‌تر و پیام‌رسانی شخصی‌سازی شده را فراهم می‌آورد.  ',
    image: mailchimp,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'شاپیفای',
    description:
      'شاپیفای از Git استفاده می‌کند، سیستمی توزیع‌شده برای کنترل نسخه، تا تغییرات کد را در طول زمان پیگیری کند. ',
    image: shopify,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'اسلک',
    description:
      'ادغام اسلک با ابزارهای مدیریت پروژه مانند Trello، Asana یا Jira به تیم‌ها امکان دریافت پیام‌ها را می‌دهد.',
    image: slack,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'درایو',
    description:
      'گیت‌هاب از Git استفاده می‌کند، سیستمی توزیع‌شده برای کنترل نسخه، تا تغییرات کد را در طول زمان پیگیری کند. ',
    image: googleDrive,
    route: { name: 'saas.integration-single' }
  },
  {
    name: 'وب‌فلاو',
    description:
      'ادغام وب‌فلاو با سیستم‌های CRM مانند HubSpot یا Salesforce امکان همگام‌سازی بی‌وقفه داده‌ها را فراهم می‌آورد.',
    image: webflow,
    route: { name: 'saas.integration-single' }
  }
]

export const statData: StatisticType[] = [
  {
    title: 'شرکت‌های استفاده‌کننده از راه‌حل‌های ما',
    number: 150,
    suffix: '+'
  },
  {
    title: 'افزایش کارایی عملیاتی',
    number: 94,
    suffix: '%'
  },
  {
    title: 'عملکردهای مختلف وب‌سایت',
    number: 600,
    suffix: '+'
  }
]

export const testimonials: TestimonialType[] = [
  {
    user: {
      firstName: 'اما',
      lastName: 'واتسون',
      company: {
        image: client4,
        href: 'https://www.rtl-theme.com/vulk-web-application/?aff=eltheme',
      },
      avatar: team1
    },
    comment:
      'به اشتراک‌گذاری زمانبندی شده صدا او را به سمت جوانان پر سر و صدا کشاند. در عروسی‌ها به خنداندن ایمان داشتند.',
    rating: 4.5
  },
  {
    user: {
      firstName: 'سموئل',
      lastName: 'بیشاپ',
      company: {
        image: client2,
        href: 'https://www.rtl-theme.com/listkit-html-template/?aff=eltheme',
      },
      avatar: team7
    },
    comment:
      'دستورالعمل‌ها به‌طور مداوم به کار گرفته شد تا او از مسئولیت‌های خود به خوبی عمل کند. تخت‌های مربوط به مکان و راحتی گذرگاه به آرامش کمک کرد. نتیجه‌گیری‌های متداوم از پسرک در پیری به نظر می‌رسید.',
    rating: 4.5
  },
  {
    user: {
      firstName: 'لوری',
      lastName: 'استیونز',
      company: {
        image: client5,
        href: 'https://www.rtl-theme.com/ideko-html-template/?aff=eltheme',
      },
      avatar: team6
    },
    comment:
      'راحتی مرتبط با تخت و گذرگاه به‌طور مدنی. پسر همیشه‌گی به پایان رسید، با فرض پیر بودن.',
    rating: 4.5
  },
  {
    user: {
      firstName: 'آماندا',
      lastName: 'رید',
      company: {
        image: client3,
        href: 'https://www.rtl-theme.com/nephos-html-template/?aff=eltheme',
      },
      avatar: team8
    },
    comment:
      'ادغام قدردانی در زندگی روزمره‌امان، جایی که هر روز سه چیز که برای آن‌ها قدردانیم را یادداشت می‌کنیم.',
    rating: 4.5
  }
]

export const blogs: BlogType[] = [
  {
    publishedBy: {
      firstName: 'ژاکلین',
      lastName: 'میلر'
    },
    publishedAt: {
      date: 8,
      month: 'فروردین',
      year: 1402
    },
    title: 'شیک و پاسخگو - طراحی با بوت‌استرپ و میزل',
    image: blog3,
    route: { name: 'blog.single.v1' }
  },
  {
    publishedBy: {
      firstName: 'ژاکلین',
      lastName: 'میلر'
    },
    publishedAt: {
      date: 13,
      month: 'فروردین',
      year: 1402
    },
    title: 'الگوی استک‌بروز: راه‌حل نهایی طراحی وب',
    image: blog1,
    route: { name: 'blog.single.v1' }
  },
  {
    publishedBy: {
      firstName: 'آلن',
      lastName: 'اسمیت'
    },
    publishedAt: {
      date: 26,
      month: 'فروردین',
      year: 1402
    },
    title: 'طراحی وب بدون زحمت با میزل - خلاقیت خود را آزاد کنید',
    image: blog7,
    route: { name: 'blog.single.v1' }
  }
]
