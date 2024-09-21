import { BIconEarbuds, BIconFire, BIconShieldFillCheck, BIconTruck } from 'bootstrap-icons-vue'
import type { FeatureType, ProductType } from '@/types'

import product3 from '@/assets/images/products/03.png'
import product4 from '@/assets/images/products/04.png'
import product5 from '@/assets/images/products/05.png'

export const products: ProductType[] = [
  {
    id: '1',
    name: 'ایرپادز Drop 2',
    price: 305,
    sale: {
      type: 'amount',
      discount: 80
    },
    images: [product3],
    route: { name: '' }
  },
  {
    id: '2',
    name: 'ایرپادز پرو Drop',
    price: 350,
    images: [product4],
    route: { name: '' }
  },
  {
    id: '3',
    name: 'ایرپادز پرو مکس',
    price: 350,
    sale: {
      type: 'amount',
      discount: 35
    },
    images: [product5],
    route: { name: '' }
  },
  {
    id: '4',
    name: 'ایرپادز پرو Drop',
    price: 350,
    images: [product4],
    route: { name: '' }
  },
  {
    id: '5',
    name: 'ایرپادز پرو ۲.۰',
    price: 285,
    images: [product5],
    route: { name: '' }
  }
]

export const features: FeatureType[] = [
  {
    title: 'اتصال بی‌وقفه',
    description: 'با ایرپادهای خود به راحتی به دستگاه‌های خود متصل شوید و از گوش دادن بدون دردسر لذت ببرید.',
    icon: BIconFire
  },
  {
    title: 'تحویل انعطاف‌پذیر',
    description: 'تحویل رایگان یا دریافت از فروشگاه ایرپادز خود را دریافت کنید.',
    icon: BIconTruck
  },
  {
    title: 'لوازم جانبی و سفارشی‌سازی',
    description: 'یک طیف از لوازم جانبی و گزینه‌های سفارشی‌سازی برای ایرپادزهای خود را بررسی کنید.',
    icon: BIconEarbuds
  },
  {
    title: 'گارانتی بدون نگرانی',
    description:
      'با یک گارانتی جامع که ایرپادزهای شما را در برابر نقص‌ها پوشش می‌دهد، با آرامش خاطر استراحت کنید.',
    icon: BIconShieldFillCheck
  }
]
