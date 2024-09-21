import client1 from '@/assets/images/client/logo-tailwise.svg'
import client2 from '@/assets/images/client/logo-nephos.svg'
import client4 from '@/assets/images/client/logo-vulk.svg'
import client5 from '@/assets/images/client/logo-ideko.svg'

import portfolio1 from '@/assets/images/portfolio/list/01.jpg'
import portfolio2 from '@/assets/images/portfolio/list/02.jpg'
import portfolio3 from '@/assets/images/portfolio/list/03.jpg'
import portfolio4 from '@/assets/images/portfolio/list/04.jpg'
import type { CompanyType, RouteType } from '@/types'

export type PortfolioCaseType = {
  title: string
  description: string
  year: number
  tags: string[]
  company: CompanyType
  image: string
  route: RouteType
}

export const portfolioCases: PortfolioCaseType[] = [
  {
    title: 'کازمتیک‌های بیو',
    description:
      'قدرتمندترین صفحه فرود نرم‌افزار و اپلیکیشن برای هر نوع کسب‌وکار بازاریابی نرم‌افزار و اپلیکیشن.',
    year: 1401,
    tags: ['برندینگ', 'بسته‌بندی', 'طراحی UI/UX'],
    company: {
      image: client1
    },
    image: portfolio2,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'بهینه‌سازی وب‌سایت برای TechWave',
    description:
      'قدرتمندترین صفحه فرود نرم‌افزار و اپلیکیشن برای هر نوع کسب‌وکار بازاریابی نرم‌افزار و اپلیکیشن.',
    year: 1400,
    tags: ['برندینگ', 'بسته‌بندی', 'طراحی UI/UX'],
    company: {
      image: client4
    },
    image: portfolio1,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'استودیو چری',
    description:
      'قدرتمندترین صفحه فرود نرم‌افزار و اپلیکیشن برای هر نوع کسب‌وکار بازاریابی نرم‌افزار و اپلیکیشن.',
    year: 1399,
    tags: ['برندینگ', 'بسته‌بندی', 'توسعه'],
    company: {
      image: client5
    },
    image: portfolio3,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'تبدیل ایده‌ها به واقعیت با قالب آیدکو',
    description:
      'قدرتمندترین صفحه فرود نرم‌افزار و اپلیکیشن برای هر نوع کسب‌وکار بازاریابی نرم‌افزار و اپلیکیشن.',
    year: 1398,
    tags: ['گرافیک', 'توسعه', 'طراحی UI/UX'],
    company: {
      image: client2
    },
    image: portfolio4,
    route: { name: 'portfolio.case-study.v2' }
  }
]
