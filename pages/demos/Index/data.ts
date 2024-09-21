import type { ServiceType, TestimonialType, UserType } from '@/types'
import {
  BIconBinoculars,
  BIconBoxes,
  BIconBriefcase,
  BIconBullseye,
  BIconCircleSquare,
  BIconCodeSlash,
  BIconStack,
  BIconVectorPen
} from 'bootstrap-icons-vue'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import client1Img from '@/assets/images/client/logo-tailwise.svg'
import client2Img from '@/assets/images/client/logo-listkit.svg'
import client3Img from '@/assets/images/client/logo-nephos.svg'
import client4Img from '@/assets/images/client/logo-vulk.svg'
import client5Img from '@/assets/images/client/logo-ideko.svg'
import client6Img from '@/assets/images/client/logo-eltheme.svg'

export const avatars = [avatar6, avatar5, avatar2, avatar3, avatar4]

export const clients = [
  { href: 'https://www.rtl-theme.com/tailwise-html-template/?aff=eltheme', img: client1Img, },
  { href: 'https://www.rtl-theme.com/listkit-html-template/?aff=eltheme', img: client2Img, },
  { href: 'https://www.rtl-theme.com/nephos-html-template/?aff=eltheme', img: client3Img, },
  { href: 'https://www.rtl-theme.com/vulk-web-application/?aff=eltheme', img: client4Img, },
  { href: 'https://www.rtl-theme.com/ideko-html-template/?aff=eltheme', img: client5Img, },
  { href: 'https://www.rtl-theme.com/author/eltheme/products/?aff=eltheme', img: client6Img, },
]

export const services: ServiceType[] = [
  {
    title: 'بازاریابی دیجیتال',
    description: 'رشد برندها به صورت آنلاین از طریق کانال‌های دیجیتال.',
    icon: BIconStack
  },
  {
    title: 'طراحی محصول',
    description: 'ایجاد محصولات که کاربران عاشق آن‌ها هستند و کسب‌وکارها به آن‌ها نیاز دارند.',
    icon: BIconBoxes
  },
  {
    title: 'طراحی وب',
    description: 'طراحی وب‌سایت‌هایی که از نظر بصری جذاب و کاربرپسند هستند.',
    icon: BIconCircleSquare
  },
  {
    title: 'طراحی UI/UX',
    description: 'ایجاد رابط‌های کاربری که هم کارآمد و هم لذت‌بخش باشند.',
    icon: BIconVectorPen
  },
  {
    title: 'استراتژی کسب‌وکار',
    description: 'توسعه و اجرای برنامه‌ها برای دستیابی به اهداف تجاری.',
    icon: BIconBriefcase
  },
  {
    title: 'پژوهش',
    description: 'جمع‌آوری و تحلیل داده‌ها برای اطلاع‌رسانی به تصمیم‌گیری.',
    icon: BIconBinoculars
  },
  {
    title: 'توسعه وب',
    description: 'ساخت و نگهداری وب‌سایت‌ها و برنامه‌های وب.',
    icon: BIconCodeSlash
  },
  {
    title: 'طراحی برند',
    description: 'ایجاد برندهایی که منحصر به فرد، به یادماندنی و معنادار باشند.',
    icon: BIconBullseye
  }
]

export const userData: UserType[] = [
  {
    id: '1',
    avatar: avatar3,
    firstName: 'نیکس',
    lastName: 'مکسول'
  },
  {
    id: '2',
    avatar: avatar1,
    firstName: 'دنیس',
    lastName: 'بارت'
  },
  {
    id: '3',
    avatar: avatar2,
    firstName: 'نیکس',
    lastName: 'مکسول'
  },
  {
    id: '4',
    avatar: avatar5,
    firstName: 'کارولین',
    lastName: 'اورتیز'
  }
]

export const testimonials: TestimonialType[] = [
  {
    id: '1',
    user: userData[0],
    comment:
      "بهترین تم بوت‌استرپ که تا به حال استفاده کرده‌ایم - شخصی‌سازی آن آسان است و تمامی ویژگی‌های مورد نیاز ما را دارد.",
    rating: 4.5
  },
  {
    id: '2',
    user: userData[1],
    comment:
      "بهترین تم بوت‌استرپ که تا به حال استفاده کرده‌ایم - شخصی‌سازی آن آسان است و تمامی ویژگی‌های مورد نیاز ما را دارد.",
    rating: 4.5
  },

  {
    id: '3',
    user: userData[2],
    comment: 'استک‌بروز به ما کمک کرد تا وب‌سایتی خیره‌کننده بسازیم که به‌طور کامل برند ما را منعکس کند.',
    rating: 4.5
  },
  {
    id: '4',
    user: userData[3],
    comment: 'من به شدت میزل را به هر کسی که به دنبال یک تم بوت‌استرپ با کیفیت بالا است، توصیه می‌کنم.',
    rating: 4.5
  }
]
