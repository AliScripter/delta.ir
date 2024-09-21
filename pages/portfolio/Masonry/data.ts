import masonry1 from '@/assets/images/portfolio/masonry/01.jpg'
import masonry2 from '@/assets/images/portfolio/masonry/02.jpg'
import masonry3 from '@/assets/images/portfolio/masonry/03.jpg'
import masonry4 from '@/assets/images/portfolio/masonry/04.jpg'
import masonry5 from '@/assets/images/portfolio/masonry/05.jpg'
import masonry6 from '@/assets/images/portfolio/masonry/06.jpg'
import masonry7 from '@/assets/images/portfolio/masonry/07.jpg'
import masonry8 from '@/assets/images/portfolio/masonry/08.jpg'
import masonry9 from '@/assets/images/portfolio/masonry/09.jpg'
import type { RouteType } from '@/types'

export type PortfolioType = {
  title: string
  category: string
  categoryClass: string
  image: string
  route: RouteType
}

export const portfolioData: PortfolioType[] = [
  {
    title: 'وب‌سایت گردش‌کارهای پویا',
    category: 'طراحی UI/UX',
    image: masonry1,
    categoryClass: 'business brand marketing',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'بازطراحی ElevateTech',
    category: 'طراحی برند',
    image: masonry4,
    categoryClass: 'brand ui',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'بهبود UI/UX برای SnapMediae',
    category: 'طراحی UI/UX',
    image: masonry9,
    categoryClass: 'ui',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'ابتکار پایداری',
    category: 'توسعه کسب‌وکار',
    image: masonry5,
    categoryClass: 'design marketing',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'بازطراحی کاربرمحور',
    category: 'طراحی وب',
    image: masonry2,
    categoryClass: 'business design brand',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'بهینه‌سازی وب‌سایت برای TechWave',
    category: 'طراحی وب',
    image: masonry7,
    categoryClass: 'business design brand',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'گسترش تجارت الکترونیک',
    category: 'بازاریابی دیجیتال',
    image: masonry6,
    categoryClass: 'business design',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'پیروزی نرم‌افزار',
    category: 'بازاریابی دیجیتال',
    image: masonry8,
    categoryClass: 'business design',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'مشارکت در رسانه‌های اجتماعی',
    category: 'طراحی UI/UX',
    image: masonry3,
    categoryClass: 'ui',
    route: { name: 'portfolio.case-study.v1' }
  }
]
