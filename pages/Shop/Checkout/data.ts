import visa from '@/assets/images/elements/visa.svg'
import mastercard from '@/assets/images/elements/mastercard.svg'
import paypal from '@/assets/images/elements/paypal.svg'
import type { BSIconType } from '@/types'
import { BIconTruck } from 'bootstrap-icons-vue'

export type PaymentType = {
  title: string
  subTitle: string
  image?: string
  icon?: BSIconType
}

export const paymentOptions: PaymentType[] = [
  {
    title: 'ویزا با شماره پایان ۱۲۴۵',
    subTitle: 'انقضا ۰۸/۲۰۲۴',
    image: visa
  },
  {
    title: 'مسترکارت با شماره پایان ۱۲۴۵',
    subTitle: 'انقضا ۰۶/۲۰۲۴',
    image: mastercard
  },
  {
    title: 'پرداخت با استفاده از پی‌پال',
    subTitle: 'سریع، آسان و امن',
    image: paypal
  },
  {
    title: 'پرداخت در محل',
    subTitle: 'شما باید ۲۵ تومان برای تحویل پرداخت کنید.',
    icon: BIconTruck
  }
]
