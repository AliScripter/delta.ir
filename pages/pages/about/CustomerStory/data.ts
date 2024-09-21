import stories1 from '@/assets/images/stories/01.jpg'
import stories3 from '@/assets/images/stories/03.jpg'
import stories4 from '@/assets/images/stories/04.jpg'
import client2 from '@/assets/images/client/logo-listkit.svg'
import client3 from '@/assets/images/client/logo-nephos.svg'
import client4 from '@/assets/images/client/logo-vulk.svg'
import client5 from '@/assets/images/client/logo-ideko.svg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import type { TestimonialType, UserType } from '@/types'

export type StorieType = {
  title: string
} & UserType

type ClientType = {
  image: string
  href?: string
} & TestimonialType

export const stories: StorieType[] = [
  {
    avatar: stories1,
    company: {
      image: client2
    },
    title: 'داستان‌های اعتماد، تحول و پیروزی'
  },
  {
    avatar: stories3,
    company: {
      image: client3
    },
    title: 'همدلی در عمل، لمس زندگی‌ها از طریق تجربیات مشتریان'
  },
  {
    avatar: stories4,
    company: {
      image: client4
    },
    title: 'گالری داستان‌های مشتریان ما که با آن‌ها هم‌خوانی دارد'
  }
]

export const client: ClientType[] = [
  {
    image: client5,
    href: 'https://www.rtl-theme.com/ideko-html-template/?aff=eltheme',
    comment:
      "ما کاهش قابل توجهی در ریزش مشتریان از زمان اجرای میزل دیده‌ایم - این یک افزوده ارزشمند به تلاش‌های نگهداری مشتریان ما بوده است. هوش مصنوعی میزل به ما اجازه داده است تا تلاش‌های پشتیبانی مشتریان خود را بدون قربانی کردن کیفیت گسترش دهیم.",
    user: {
      avatar: avatar5,
      username: 'اما واتسون',
      role: 'مدیرعامل بلاگزین'
    }
  },
  {
    image: client3,
    href: 'https://www.rtl-theme.com/nephos-html-template/?aff=eltheme',
    comment:
      'میزل تمی کامل برای کسب‌وکارهایی است که می‌خواهند وب‌سایتی شیک و کارآمد بسازند.',
    user: {
      avatar: avatar3,
      username: 'دنیس بارنت',
      role: 'مدیرعامل بلاگزین'
    }
  },
  {
    image: client4,
    href: 'https://www.rtl-theme.com/vulk-web-application/?aff=eltheme',
    comment:
      "تعهد ما به برتری در خدمات مشتری یکی از دلایل اصلی است که ما در صدر بازار قرار داریم. ما همیشه به سختی تلاش کرده‌ایم تا بهترین تجربه را برای مشتریان خود فراهم کنیم.",
    user: {
      avatar: avatar7,
      username: 'لوئیس فرگوسن',
      role: 'مدیرعامل ادوپورت'
    }
  }
]
