import type { BSIconType } from '@/types'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import {
  BIconBoxArrowUpRight,
  BIconFileEarmarkTextFill,
  BIconPuzzleFill,
  BIconStickiesFill
} from 'bootstrap-icons-vue'

type FooterLinkType = {
  name: string
  link?: string
  badge?: string
  icon?: BSIconType
}

export const quickLinks: FooterLinkType[] = [
  {
    name: 'درباره ما',
    link: 'about.v1'
  },
  {
    name: 'تماس با ما',
    link: 'contact.v1'
  },
  {
    name: 'حرفه‌ای',
    link: 'career',
    badge: '2 شغل'
  },
  {
    name: 'جزئیات شغلی',
    link: 'career.single'
  },
  {
    name: 'شریک شوید',
    link: 'contact.v1'
  },
  {
    name: 'ورود',
    link: 'auth.sign-in'
  },
  {
    name: 'ثبت‌نام',
    link: 'auth.sign-up'
  }
]

export const communityLinks: FooterLinkType[] = [
  {
    name: 'اسناد'
  },
  {
    name: 'پشتیبانی‌ها',
    icon: BIconBoxArrowUpRight
  },
  {
    name: 'پرسش‌های متداول',
    link: 'faqs'
  },
  {
    name: 'سیاست حفظ حریم خصوصی'
  },
  {
    name: 'اخبار و وبلاگ‌ها',
    link: 'blog.grid'
  },
  {
    name: 'شرایط و ضوابط',
    link: 'terms-conditions'
  }
]

export const followOnIcons = [
  { icon: faFacebookF, variant: 'bg-facebook' },
  { icon: faInstagram, variant: 'bg-instagram' },
  { icon: faTwitter, variant: 'bg-twitter' },
  { icon: faLinkedinIn, variant: 'bg-linkedin' },
  { icon: faYoutube, variant: 'bg-youtube' }
]

export const contactDetails = {
  address: '۱۴۲۱ جاده کوبورن هالو، متامورا، نزدیک مرکز پوینت، ایلینوی ۶۱۵۴۸.',
  number: '(251) 854-6308',
  email: 'help@example.com',
  open: 'دوشنبه تا جمعه: 09:00 - 21:00',
  close: 'شنبه - یکشنبه: تعطیل'
}

export const footerQuickLinks3: FooterLinkType[] = [
  {
    name: 'درباره ما',
    link: 'about.v1'
  },
  {
    name: 'تماس با ما',
    link: 'contact.v1'
  },
  {
    name: 'خدمات',
    link: 'services.v1'
  },
  {
    name: 'حرفه‌ای',
    link: 'career',
    badge: '2 شغل'
  },
  {
    name: 'جزئیات شغلی',
    link: 'career.single'
  },
  {
    name: 'مطالعات موردی',
    link: 'portfolio.showcase'
  },
  {
    name: 'تیم',
    link: 'pages.team'
  }
]

export const footerCommunityLinks3 = [
  {
    title: 'مستندسازی',
    icon: BIconFileEarmarkTextFill,
    variant: 'bg-warning'
  },
  {
    title: 'قطعه کدها',
    icon: BIconStickiesFill,
    variant: 'bg-success'
  },
  {
    title: 'اجزا',
    icon: BIconPuzzleFill,
    variant: 'bg-info'
  }
]

export const quickLinks6: FooterLinkType[] = [
  {
    name: 'درباره ما',
    link: 'about.v1'
  },
  {
    name: 'تماس با ما',
    link: 'contact.v1'
  },
  {
    name: 'حرفه‌ای',
    link: 'career'
  },
  {
    name: 'جزئیات شغلی',
    link: 'career.single'
  },
  {
    name: 'شریک شوید',
    link: 'contact.v1'
  },
  {
    name: 'ثبت‌نام',
    link: 'auth.sign-up'
  },
  {
    name: 'کوکی'
  }
]
