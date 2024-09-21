import type { PricingPlanType } from '@/types'
import { faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import type { BaseColorVariant } from 'bootstrap-vue-next'

type AccountType = {
  buttonVariant: keyof BaseColorVariant
  buttonText: string
  bgColor?: string
  iconText: string
} & PricingPlanType

export const account: AccountType[] = [
  {
    title: 'گوگل',
    description: 'شما با موفقیت به حساب گوگل خود متصل شدید',
    buttonVariant: 'danger',
    buttonText: 'فراخوانی',
    bgColor: 'success',
    iconText: 'google-icon'
  },
  {
    title: 'لینکدین',
    description: 'با حساب لینکدین برای تجربه‌ای شخصی‌سازی شده متصل شوید',
    icon: faLinkedinIn,
    buttonVariant: 'dark',
    buttonText: 'اتصال به لینکدین',
    iconText: 'linkedin'
  },
  {
    title: 'فیسبوک',
    description: 'با حساب فیسبوک برای تجربه‌ای شخصی‌سازی شده متصل شوید',
    icon: faFacebook,
    buttonVariant: 'dark',
    buttonText: 'اتصال به فیسبوک',
    iconText: 'facebook'
  }
]
