import type { BlogType } from '@/types'
import blog1 from '@/assets/images/blog/4by3/01.jpg'
import blog2 from '@/assets/images/blog/4by3/02.jpg'
import blog3 from '@/assets/images/blog/4by3/03.jpg'
import blog4 from '@/assets/images/blog/4by3/04.jpg'
import blog5 from '@/assets/images/blog/4by3/05.jpg'

export const blogs: BlogType[] = [
  {
    title: 'تسلط بر طراحی وب‌سایت پاسخگو با بوت‌استرپ',
    publishedBy: {
      firstName: 'ژاکلین',
      lastName: 'میلر'
    },
    image: blog1,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'تسلط بر بوت‌استرپ: طراحی وب‌سایت‌های شگفت‌انگیز',
    publishedBy: {
      firstName: 'دنیس',
      lastName: 'بارت'
    },
    image: blog2,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'طراحی وب تعاملی با بوت‌استرپ و استک‌بروز',
    publishedBy: {
      firstName: 'کارولین',
      lastName: 'اورتیز'
    },
    image: blog3,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'توسعه وب بدون زحمت با میزل',
    publishedBy: {
      firstName: 'کارولین',
      lastName: 'اورتیز'
    },
    image: blog4,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'شیک و پاسخگو - طراحی با بوت‌استرپ و میزل',
    publishedBy: {
      firstName: 'کارولین',
      lastName: 'اورتیز'
    },
    image: blog5,
    route: { name: 'blog.single.v1' }
  }
]
