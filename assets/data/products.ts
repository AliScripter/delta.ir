import type { CategoryType, ProductType } from '@/types'
import phoneImg6 from '@/assets/images/shop/review/06.jpg'
import phoneImg2 from '@/assets/images/shop/review/02.jpg'
import phoneImg1 from '@/assets/images/shop/review/01.jpg'
import phoneImg5 from '@/assets/images/shop/review/05.jpg'

import product1 from '@/assets/images/shop/01.png'
import product2 from '@/assets/images/shop/02.png'
import product3 from '@/assets/images/shop/03.png'
import product4 from '@/assets/images/shop/04.png'
import product5 from '@/assets/images/shop/05.png'
import product6 from '@/assets/images/shop/06.png'
import product7 from '@/assets/images/shop/07.png'
import product8 from '@/assets/images/shop/08.png'
import product9 from '@/assets/images/shop/09.png'

const categories: CategoryType[] = [
  {
    id: 'cat1',
    name: 'دسته‌بندی 1'
  }
]

export const products: ProductType[] = [
  {
    id: '1001',
    categoryId: categories[0].id,
    category: categories[0],
    name: 'هوشمندترین گوشی برای سبک‌های زندگی مدرن',
    images: [phoneImg6, phoneImg2, phoneImg1, phoneImg5],
    price: 215,
    sale: { discount: 20, type: 'percent' },
    stock: 100,
    attributes: {
      colors: [{ name: 'بنفش' }]
    },
    route: { name: 'shop.single', params: { id: '1001' } },
    tag: 'فناوری',
    review: {
      count: 345,
      stars: 4.5
    }
  },
  {
    id: '1002',
    name: 'تی‌شرت نخی گردن گرد',
    images: [product2],
    price: 103,
    attributes: {
      colors: [{ name: 'آبی متوسط' }],
      gender: 'مرد',
      size: ' XL, L, M, S'
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1003',
    name: 'کفش‌های میز دانگ لو',
    images: [product8],
    price: 103,
    attributes: {
      gender: 'مرد',
      size: '42'
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  }
]

export const trendingProducts: ProductType[] = [
  {
    id: '1010',
    name: 'تی‌شرت کلاسیک با یقه گرد',
    price: 103.0,
    tag: 'ویژه',
    images: [product2],
    review: {
      stars: 4.5,
      count: 1
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1011',
    name: 'کلاه بیسبال نخی با کیفیت بالا',
    price: 98.0,
    images: [product3],
    review: {
      stars: 4.5,
      count: 1
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1012',
    name: 'هدفون با عملکرد بالا و حذف نویز',
    price: 180.0,
    images: [product4],
    sale: { discount: 30, type: 'percent' },
    review: {
      stars: 4.5,
      count: 1
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1013',
    name: 'بطری آب استیل ضد زنگ با کیفیت بالا',
    price: 40.0,
    images: [product1],
    review: {
      stars: 4.5,
      count: 1
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1014',
    name: 'هوشمندترین گوشی برای سبک‌های زندگی مدرن',
    price: 215.0,
    images: [product5],
    review: {
      stars: 4.5,
      count: 1
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1015',
    name: 'اسپیکر رادیویی بلوتوثی با الهام از طراحی قدیمی',
    price: 142.0,
    images: [product6],
    review: {
      stars: 4.5,
      count: 1
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  }
]

export const collections: ProductType[] = [
  {
    id: '1021',
    images: [product8],
    name: 'میز دانگ لو',
    description: "کفش‌های تمرینی مردانه",
    price: 180.0,
    review: {
      count: 1,
      stars: 4.5
    },
    sale: { discount: 30, type: 'percent' },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1022',
    images: [product9],
    name: 'Mizz متکون راسل',
    description: "کفش‌های تمرینی زنانه",
    price: 160.0,
    review: {
      count: 1,
      stars: 4.5
    },
    sale: { discount: 20, type: 'percent' },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1023',
    images: [product7],
    name: 'ایرمکس پالس روآم',
    description: "لباس‌های ورزشی و غیررسمی مردانه",
    price: 245.0,
    review: {
      count: 1,
      stars: 4.5
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1024',
    images: [product7],
    name: 'جردن ویکتوری وانس',
    description: "صندل‌های چاپی مردانه",
    price: 86.0,
    sale: { discount: 45, type: 'percent' },
    review: {
      count: 1,
      stars: 4.5
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  }
]

export const productGrid: ProductType[] = [
  {
    id: '1030',
    name: 'تی‌شرت کلاسیک با یقه گرد',
    price: 103.0,
    tag: 'ویژه',
    images: [product2],
    review: {
      count: 1,
      stars: 4.5
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1031',
    name: "کفش‌های تمرینی مردانه",
    price: 180.0,
    sale: { discount: 20, type: 'percent' },
    images: [product8],
    review: {
      count: 1,
      stars: 4.5
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1032',
    name: 'بطری آب استیل ضد زنگ با کیفیت بالا',
    price: 40.0,
    images: [product1],
    review: {
      count: 1,
      stars: 4.5
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1033',
    name: 'هدفون با عملکرد بالا و حذف نویز',
    price: 180.0,
    sale: { discount: 30, type: 'percent' },
    images: [product4],
    review: {
      count: 1,
      stars: 4.5
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1034',
    name: 'هوشمندترین گوشی برای سبک‌های زندگی مدرن',
    price: 215.0,
    images: [product5],
    review: {
      count: 1,
      stars: 4.5
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1035',
    name: 'اسپیکر رادیویی بلوتوثی با الهام از طراحی قدیمی',
    price: 142.0,
    images: [product6],
    review: {
      count: 1,
      stars: 4.5
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1036',
    name: "کفش‌های تمرینی زنانه",
    price: 215.0,
    images: [product9],
    review: {
      count: 1,
      stars: 4.5
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1037',
    name: 'کلاه بیسبال نخی با کیفیت بالا',
    price: 98.0,
    images: [product3],
    review: {
      count: 1,
      stars: 4.5
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  },
  {
    id: '1038',
    name: 'ایرمکس پالس روآم',
    price: 142.0,
    images: [product7],
    review: {
      count: 1,
      stars: 4.5
    },
    route: { name: 'shop.single', params: { id: '1001' } }
  }
]
