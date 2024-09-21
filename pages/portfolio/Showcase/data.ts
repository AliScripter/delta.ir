import client1 from '@/assets/images/client/client-white/logo-tailwise-w.svg'
import client2 from '@/assets/images/client/client-white/logo-listkit-w.svg'
import client3 from '@/assets/images/client/client-white/logo-nephos-w.svg'
import client4 from '@/assets/images/client/client-white/logo-vulk-w.svg'
import client5 from '@/assets/images/client/client-white/logo-ideko-w.svg'

import showcase1 from '@/assets/images/portfolio/showcase/01.jpg'
import showcase2 from '@/assets/images/portfolio/showcase/02.jpg'
import showcase3 from '@/assets/images/portfolio/showcase/03.jpg'
import showcase4 from '@/assets/images/portfolio/showcase/04.jpg'
import showcase5 from '@/assets/images/portfolio/showcase/05.jpg'
import type { PortfolioType } from '@/types'

export const portfolioData: PortfolioType[] = [
  {
    title: 'بهبود UI/UX برای SnapMedia',
    category: 'طراحی UI/UX',
    company: {
      image: client3
    },
    image: showcase3,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'بهینه‌سازی وب‌سایت برای TechWave',
    category: 'طراحی وب',
    company: {
      image: client4
    },
    image: showcase2,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'دنبال کردن رویاها و خلق هنر',
    category: 'برندینگ',
    company: {
      image: client2
    },
    image: showcase1,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'هنر داستان‌سرایی',
    category: 'طراحی گرافیک',
    company: {
      image: client1
    },
    image: showcase5,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'تبدیل ایده‌ها به واقعیت با قالب آیدکو',
    category: 'بازاریابی',
    company: {
      image: client5
    },
    image: showcase4,
    route: { name: 'portfolio.case-study.v1' }
  }
]
