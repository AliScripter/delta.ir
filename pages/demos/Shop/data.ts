import type { CategoryType, FeatureType } from '@/types'
import {
  bagIcon,
  bookIcon,
  electronicIcon,
  fashionIcon,
  gameIcon,
  mobileIcon
} from '@/assets/data/icons'
import { BIconFire, BIconHeadset, BIconLightningChargeFill, BIconRadar } from 'bootstrap-icons-vue'

export const categories: CategoryType[] = [
  {
    id: '1',
    name: 'مد',
    icon: fashionIcon
  },
  {
    id: '2',
    name: 'الکترونیک',
    icon: electronicIcon
  },
  {
    id: '3',
    name: 'بازی‌ها',
    icon: gameIcon
  },
  {
    id: '4',
    name: 'کتاب‌ها',
    icon: bookIcon
  },
  {
    id: '5',
    name: 'موبایل‌ها',
    icon: mobileIcon
  },
  {
    id: '6',
    name: 'کیف‌ها',
    icon: bagIcon
  }
]

export type ProductFeatureType = {
  variant: string
} & FeatureType

export const features: ProductFeatureType[] = [
  {
    title: 'تحویل سریع و قابل اعتماد',
    description: 'خدمات تحویل به موقع و قابل اعتماد را برای برآورده کردن انتظارات مشتری تضمین کنید.',
    icon: BIconLightningChargeFill,
    variant: 'info'
  },
  {
    title: 'ردیابی بسته',
    description:
      'اطلاعات ردیابی در زمان واقعی ارائه دهید تا مشتریان بتوانند وضعیت محموله‌های خود را پیگیری کنند.',
    icon: BIconRadar,
    variant: 'warning'
  },
  {
    title: 'بازگشت‌ها و تعویض‌ها',
    description:
      'سیاست بازگشت و تعویض خود را به وضوح مشخص کنید تا مشتریان به راحتی بتوانند بازگشت‌ها را آغاز کنند.',
    icon: BIconFire,
    variant: 'danger '
  },
  {
    title: 'پشتیبانی مشتری',
    description:
      'پشتیبانی مشتری پاسخگو برای حل سوالات و مشکلات مرتبط با حمل و نقل ارائه دهید.',
    icon: BIconHeadset,
    variant: 'primary'
  }
]
