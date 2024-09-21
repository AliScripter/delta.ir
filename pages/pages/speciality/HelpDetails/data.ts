import type { ServiceType } from '@/types'
import { BIconEnvelopeOpen, BIconHeadset, BIconTicketPerforated } from 'bootstrap-icons-vue'

export const helpData: string[] = [
  'Gulp و سفارشی‌سازی',
  'تنظیمات رنگ و لوگو',
  'حالت تاریک، نسخه RTL',
  'به‌روزرسانی‌ها و پشتیبانی',
  'توصیف فروشگاه شما'
]

export const supportlinkData: ServiceType[] = [
  {
    icon: BIconHeadset,
    title: 'تماس با پشتیبانی',
    description: 'کمک مورد نیاز خود را پیدا نمی‌کنید؟'
  },
  {
    icon: BIconTicketPerforated,
    title: 'ارسال بلیط',
    description: 'تأخیر در برداشت موفق'
  },
  {
    icon: BIconEnvelopeOpen,
    title: 'ایمیل بزنید به ما',
    description: 'با ما تماس بگیرید در'
  }
]
