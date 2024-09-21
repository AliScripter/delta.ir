import type { BlogType } from '@/types'
import blog1 from '@/assets/images/blog/01.jpg'
import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'

import blogImg1 from '@/assets/images/blog/4by3/01.jpg'
import blogImg2 from '@/assets/images/blog/4by3/02.jpg'
import blogImg3 from '@/assets/images/blog/4by3/03.jpg'
import blogImg4 from '@/assets/images/blog/4by3/04.jpg'
import blogImg5 from '@/assets/images/blog/4by3/05.jpg'
import blogImg6 from '@/assets/images/blog/4by3/06.jpg'
import blogImg7 from '@/assets/images/blog/4by3/07.jpg'

export const blogSlides: BlogType[] = [
  {
    title: 'تکامل برندینگ: آزاد کردن پتانسیل',
    publishedBy: {
      firstName: 'فرانسیس',
      lastName: 'گررو'
    },
    publishedAt: {
      date: 5,
      month: 'نوامبر',
      year: 1397,
      minute: 4
    },
    category: 'بازاریابی',
    image: blog1,
    route: { name: 'blog.single.v2' }
  },
  {
    publishedBy: {
      firstName: 'کارولین',
      lastName: 'اورتیز'
    },
    publishedAt: {
      date: 5,
      month: 'نوامبر',
      year: 1397,
      minute: 4
    },
    title: 'قدرت شکرگزاری: پرورش شادی و فراوانی',
    category: 'سبک زندگی',
    image: blog2,
    route: { name: 'blog.single.v2' }
  },
  {
    publishedBy: {
      firstName: 'جوان',
      lastName: 'والاس'
    },
    publishedAt: {
      date: 5,
      month: 'نوامبر',
      year: 1397,
      minute: 4
    },
    title: 'طراحی وب تعاملی با بوت‌استرپ و استک‌بروز',
    category: 'طراحی',
    image: blog3,
    route: { name: 'blog.single.v2' }
  }
]

export const blogs: BlogType[] = [
  {
    title: '۱۰ چیزی که باید درباره میزل بدانید',
    description:
      'تخصص‌های خود، تجربیات شخصی و آنچه که می‌توانید به‌طور منحصر به فرد به خوانندگان خود ارائه دهید را در نظر بگیرید.',
    category: 'فناوری',
    publishedBy: {
      firstName: 'برایان',
      lastName: 'نایت'
    },
    image: blogImg1,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'قدرت شکرگزاری: پرورش شادی و فراوانی',
    description:
      'با تمرکز بر روی یک نیش، می‌توانید خود را به عنوان یک مرجع معرفی کرده و یک جامعه متعهد بسازید.',
    category: 'سبک زندگی',
    publishedBy: {
      firstName: 'کارولین',
      lastName: 'اورتیز'
    },
    image: blogImg2,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'توسعه وب بدون زحمت با میزل',
    description:
      "ساخت یک وبلاگ موفق به تعهد نیاز دارد. از رشد کند در مراحل اولیه دلسرد نشوید.",
    category: 'بازاریابی',
    publishedBy: {
      firstName: 'لوری',
      lastName: 'استیونز'
    },
    image: blogImg3,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'ده سوالی که باید صادقانه پاسخ دهید.',
    description: 'به یاد داشته باشید، وبلاگ‌نویسی یک فرآیند یادگیری مداوم است، بنابراین به ایده‌های جدید باز باشید.',
    category: 'تحقیقات',
    publishedBy: {
      firstName: 'لوئیس',
      lastName: 'کراوفورد'
    },
    image: blogImg4,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'تسلط بر طراحی وب‌سایت پاسخگو با بوت‌استرپ',
    description:
      'روی ایجاد محتوای ارزشمند تمرکز کنید، وبلاگ خود را پیاده‌سازی کرده و به‌طور مداوم بهبود بخشید.',
    category: 'طراحی',
    publishedBy: {
      firstName: 'جوان',
      lastName: 'والاس'
    },
    image: blogImg5,
    route: { name: 'blog.single.v1' }
  },
  {
    title: '۵ تردید سرمایه‌گذاری که باید روشن کنید',
    description: 'به یاد داشته باشید که وبلاگ‌نویسی یک فرآیند یادگیری مستمر است، بنابراین به ایده‌های جدید باز بمانید.',
    category: 'بازاریابی',
    publishedBy: {
      firstName: 'آماندا',
      lastName: 'رید'
    },
    image: blogImg6,
    route: { name: 'blog.single.v1' }
  },
  {
    title: '۱۰ چیزی که باید درباره میزل بدانید',
    description:
      'تخصص‌های خود، تجربیات شخصی و آنچه که می‌توانید به‌طور منحصر به فرد به خوانندگان خود ارائه دهید را در نظر بگیرید.',
    category: 'فناوری',
    publishedBy: {
      firstName: 'برایان',
      lastName: 'نایت'
    },
    image: blogImg7,
    route: { name: 'blog.single.v1' }
  }
]
