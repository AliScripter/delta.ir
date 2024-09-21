import shop2Img from '@/assets/images/shop/02.png'
import shop1Img from '@/assets/images/shop/01.png'
import type { ProductType } from '@/types'

type ProductsType = {
  image: string
  stockStatus: string
  gender: string
  color?: string
  size: string
} & ProductType

export const productItems: ProductsType[] = [
  {
    image: shop2Img,
    name: 'تی‌شرت نخی گردن گرد',
    stockStatus: 'موجود در انبار',
    gender: 'مرد',
    color: 'آبی متوسط',
    size: 'XL, L, M, S',
    price: 103
  },
  {
    image: shop1Img,
    name: 'قطره‌های مراقبت از پوست زنان',
    stockStatus: 'در دسترس در ۵ روز',
    gender: 'زن',
    size: '100ml',
    price: 98
  }
]
