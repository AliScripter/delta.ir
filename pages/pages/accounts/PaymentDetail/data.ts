import masterCardImg from '@/assets/images/elements/mastercard.svg'
import visaImg from '@/assets/images/elements/visa.svg'
import type { PortfolioType } from '@/types'
import type { BaseColorVariant } from 'bootstrap-vue-next'

type PaymentType = {
  reference?: string
  number: string
  expiration: string
} & PortfolioType

type MethodType = {
  image: string
  number: string
}

type TransactionType = {
  reference: string
  paymentMethod: MethodType
  status: string
  amount: string
  date: string
  variant: keyof BaseColorVariant
}

export const paymentData: PaymentType[] = [
  {
    title: 'مسترکارت',
    number: '•••• 1569',
    badge: 'primary',
    expiration: '12/26',
    image: masterCardImg
  },
  {
    title: 'ویزا کارت',
    number: '•••• 5620',
    expiration: '02/35',
    image: visaImg
  }
]

export const transactions: TransactionType[] = [
  {
    reference: '#23458',
    paymentMethod: {
      image: masterCardImg,
      number: '****4568'
    },
    status: 'در انتظار',
    amount: '215',
    date: '۱۶/۸/۱۴۰۲',
    variant: 'warning'
  },
  {
    reference: '#23458',
    paymentMethod: {
      image: masterCardImg,
      number: '****4568'
    },
    status: 'لغو',
    amount: '199',
    date: '۲۱/۷/۱۴۰۲',
    variant: 'danger'
  },
  {
    reference: '#3158',
    paymentMethod: {
      image: visaImg,
      number: '****5620'
    },
    status: 'پرداخت شده',
    amount: '380',
    date: '۵/۷/۱۴۰۲',
    variant: 'success'
  }
]
