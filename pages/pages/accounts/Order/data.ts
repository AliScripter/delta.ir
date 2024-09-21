import shop2Img from '@/assets/images/shop/02.png'
import shop3Img from '@/assets/images/shop/03.png'
import shop1Img from '@/assets/images/shop/01.png'
import type { CategoryType } from '@/types'
import { BIconCheckCircleFill, BIconXCircleFill } from 'bootstrap-icons-vue'

type ProductsType = {
  orderNo: string
  size?: string
  shippedDate: string
  status: string
  trackOrderButton?: boolean
  expectedLocation?: string
  totalAmount: string
  variant: string
  category: CategoryType
}

export const productItems: ProductsType[] = [
  {
    category: {
      id: 1,
      image: shop2Img,
      name: 'تی‌شرت نخی گردن گرد',
      icon: BIconCheckCircleFill
    },
    orderNo: '#458795',
    size: 'L',
    shippedDate: '۱۰ نوامبر ۱۴۰۲',
    status: 'تحویل داده شده',
    totalAmount: '103.00',
    variant: 'success'
  },
  {
    category: {
      id: 2,
      image: shop3Img,
      name: 'کلاه بیسبال مردانه',
      icon: BIconXCircleFill
    },
    orderNo: '#548762',
    size: 'S',
    shippedDate: '۰۵ نوامبر ۱۴۰۲',
    status: 'لغو شده',
    totalAmount: '115.00',
    variant: 'danger'
  },
  {
    category: {
      id: 3,
      image: shop1Img,
      name: 'قطره‌های مراقبت از پوست زنان',
      icon: BIconCheckCircleFill
    },
    orderNo: '#248795',
    shippedDate: '۰۵ نوامبر ۱۴۰۲',
    status: 'در حال پردازش',
    trackOrderButton: true,
    expectedLocation: 'نیویورک، آمریکا',
    totalAmount: '98.00',
    variant: 'warning'
  }
]
