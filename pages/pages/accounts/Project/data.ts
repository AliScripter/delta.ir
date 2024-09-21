import showcase2 from '@/assets/images/portfolio/showcase/02.jpg'
import showcase4 from '@/assets/images/portfolio/showcase/04.jpg'
import showcase3 from '@/assets/images/portfolio/showcase/03.jpg'
import showcase5 from '@/assets/images/portfolio/showcase/05.jpg'
import type { PortfolioType } from '@/types'

type TableType = {
  statusText: string
} & PortfolioType

export const table: TableType[] = [
  {
    image: showcase2,
    title: 'بهینه‌سازی وب‌سایت برای TechWave',
    statusText: 'منتشر شده',
    category: 'طراحی وب'
  },
  {
    image: showcase4,
    title: 'تبدیل ایده‌ها به واقعیت با قالب آیدکو',
    statusText: 'منتشر شده',
    category: 'بازاریابی'
  },
  {
    image: showcase3,
    title: 'هنر داستان‌سرایی',
    statusText: 'خصوصی',
    category: 'طراحی گرافیک'
  },
  {
    image: showcase5,
    title: 'بهبود UI/UX برای SnapMedia',
    statusText: 'منتشر شده',
    category: 'طراحی UI/UX'
  }
]
