import blog1 from '@/assets/images/blog/4by4/01.jpg'
import blog2 from '@/assets/images/blog/4by4/02.jpg'
import blog3 from '@/assets/images/blog/4by4/03.jpg'
import blog4 from '@/assets/images/blog/4by4/04.jpg'
import blog5 from '@/assets/images/blog/4by4/05.jpg'
import blog6 from '@/assets/images/blog/4by4/06.jpg'
import blog7 from '@/assets/images/blog/4by4/07.jpg'
import blog8 from '@/assets/images/blog/4by4/08.jpg'
import blog9 from '@/assets/images/blog/4by4/09.jpg'
import blog10 from '@/assets/images/blog/4by4/10.jpg'
import type { BlogType } from '@/types'

export const blogCategories: BlogType[] = [
  {
    category: 'سبک زندگی',
    image: blog1
  },
  {
    category: 'فناوری',
    image: blog2
  },
  {
    category: 'طراحی',
    image: blog3
  },
  {
    category: 'بازاریابی',
    image: blog4
  },
  {
    category: 'تحقیقات',
    image: blog5
  }
]

export type BlogType2 = {
  isSponsored?: boolean
} & BlogType

export const blogs: BlogType2[] = [
  {
    title: 'قدرت شکرگزاری: پرورش شادی و فراوانی',
    category: 'فناوری',
    publishedBy: {
      firstName: 'کارولین',
      lastName: 'اورتیز'
    },
    image: blog6,
    route: { name: 'blog.single.v1' }
  },
  {
    title: '۵ تردید سرمایه‌گذاری که باید روشن کنید',
    category: 'سبک زندگی',
    publishedBy: {
      firstName: 'آماندا',
      lastName: 'رید'
    },
    image: blog7,
    isSponsored: true,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'تسلط بر طراحی وب‌سایت پاسخگو با بوت‌استرپ',
    category: 'طراحی',
    publishedBy: {
      firstName: 'جوان',
      lastName: 'والاس'
    },
    image: blog8,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'توسعه وب بدون زحمت با میزل',
    category: 'بازاریابی',
    publishedBy: {
      firstName: 'لوری',
      lastName: 'استیونز'
    },
    image: blog9,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'ده سوالی که باید صادقانه پاسخ دهید.',
    category: 'تحقیقات',
    publishedBy: {
      firstName: 'لوئیس',
      lastName: 'کراوفورد'
    },
    image: blog10,
    route: { name: 'blog.single.v1' }
  }
]
