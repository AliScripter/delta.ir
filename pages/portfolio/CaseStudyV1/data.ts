import type { PortfolioType, ServiceType } from '@/types'

import client1 from '@/assets/images/client/client-white/logo-tailwise-w.svg'
import client3 from '@/assets/images/client/client-white/logo-nephos-w.svg'
import client4 from '@/assets/images/client/client-white/logo-vulk-w.svg'

import portfolioImg2 from '@/assets/images/portfolio/showcase/02.jpg'
import portfolioImg3 from '@/assets/images/portfolio/showcase/03.jpg'
import portfolioImg5 from '@/assets/images/portfolio/showcase/05.jpg'

export const about: ServiceType[] = [
  {
    title: 'مشتری',
    description: 'آژانس طراحی وب ال تم'
  },
  {
    title: 'دفتر مرکزی',
    description: '۴۸۹ جاده‌ی دپوت مرکزی'
  },
  {
    title: 'صنعت',
    description: 'تجارت الکترونیک'
  },
  {
    title: 'بنیان‌گذاران',
    description: 'اما واتسون، ماریا اسمیت'
  },
  {
    title: 'خدمات',
    description: 'بازاریابی ایمیلی، طراحی محصول و بازاریابی محتوا'
  },
  {
    title: 'زمان صرف شده',
    description: '۱۴۰۲، ۴ ماه'
  }
]

export const relatedWorks: PortfolioType[] = [
  {
    title: 'ضربه‌های قلم و فراتر از آن',
    category: 'طراحی UI/UX',
    company: {
      image: client3
    },
    image: portfolioImg3,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'مراسمی شایسته زمان',
    category: 'طراحی وب',
    company: {
      image: client4
    },
    image: portfolioImg2,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'هنر داستان‌سرایی',
    category: 'طراحی گرافیک',
    company: {
      image: client1
    },
    image: portfolioImg5,
    route: { name: 'portfolio.case-study.v2' }
  }
]
