import team1 from '@/assets/images/team/01.jpg'
import team2 from '@/assets/images/team/02.jpg'
import team3 from '@/assets/images/team/03.jpg'
import team4 from '@/assets/images/team/04.jpg'
import team5 from '@/assets/images/team/05.jpg'
import team6 from '@/assets/images/team/06.jpg'
import team7 from '@/assets/images/team/07.jpg'
import team8 from '@/assets/images/team/08.jpg'
import type { UserType } from '@/types'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  type IconDefinition
} from '@fortawesome/free-brands-svg-icons'

export type TeamType = {
  icon: TeamIconType
} & UserType

type TeamIconType = {
  iconName: IconDefinition[]
  variant: string[]
}

export const team: TeamType[] = [
  {
    avatar: team1,
    username: 'اما واتسون',
    icon: {
      iconName: [faInstagram],
      variant: ['instagram-gradient']
    },
    role: 'بنیان‌گذار'
  },
  {
    avatar: team2,
    username: 'آلن اسمیت',
    icon: {
      iconName: [faFacebookF],
      variant: ['facebook']
    },
    role: 'طراح UI/UX'
  },
  {
    avatar: team3,
    username: 'ژاکلین میلر',
    icon: {
      iconName: [faTwitter, faLinkedinIn],
      variant: ['twitter', 'linkedin']
    },
    role: 'منابع انسانی'
  },
  {
    avatar: team4,
    username: 'لوئیس فرگوسن',
    icon: {
      iconName: [faFacebookF, faInstagram],
      variant: ['facebook', 'instagram-gradient']
    },
    role: 'توسعه‌دهنده وب'
  },
  {
    avatar: team5,
    username: 'فرانسیس گوئررو',
    icon: {
      iconName: [faInstagram],
      variant: ['instagram-gradient']
    },
    role: 'توسعه‌دهنده نرم‌افزار'
  },
  {
    avatar: team6,
    username: 'لوری استیونز',
    icon: {
      iconName: [faFacebookF, faInstagram],
      variant: ['facebook', 'instagram-gradient']
    },
    role: 'طراح گرافیک'
  },
  {
    avatar: team7,
    username: 'ساموئل بیشاپ',
    icon: {
      iconName: [faTwitter],
      variant: ['twitter']
    },
    role: 'طراح محصول'
  },
  {
    avatar: team8,
    username: 'آماندا رید',
    icon: {
      iconName: [faInstagram, faTwitter],
      variant: ['instagram-gradient', 'twitter']
    },
    role: 'نویسنده محتوا'
  }
]

export const achievement = [
  {
    title: 'جوایز',
    awards: [
      'افتخار / آژانس تبلیغاتی / ۱۴۰۰',
      'افتخار / آژانس تبلیغاتی / ۱۴۰۱',
      'افتخار / کارشناس مد / ۱۳۹۹',
      'افتخار / فریم دیجیتال / ۱۳۹۹',
      'افتخار / آژانس تبلیغاتی / ۱۳۹۸'
    ]
  },
  {
    title: 'جایزه طراحی CSS',
    awards: [
      'وب‌سایت روز / امپوریا / ۱۳۹۹',
      'تقدیر ویژه / به ARCR / 1400',
      'تقدیر ویژه / به ARCR / 1399',
      'تبریک ویژه / به باشگاه رفرمت / ۱۳۹۸'
    ]
  }
]
