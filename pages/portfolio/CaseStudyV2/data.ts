import client1 from '@/assets/images/client/client-white/logo-tailwise-w.svg'
import client3 from '@/assets/images/client/client-white/logo-nephos-w.svg'
import client4 from '@/assets/images/client/client-white/logo-vulk-w.svg'

import portfolioImg2 from '@/assets/images/portfolio/showcase/02.jpg'
import portfolioImg3 from '@/assets/images/portfolio/showcase/03.jpg'
import portfolioImg5 from '@/assets/images/portfolio/showcase/05.jpg'
import type { PortfolioType } from '@/types'

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
