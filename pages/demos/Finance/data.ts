import { barChartIcon, dollarIcon, donutChartIcon, homeIcon, stackIcon } from '@/assets/data/icons'
import { BIconBug, BIconCupStraw, BIconGem, BIconRocketTakeoff } from 'bootstrap-icons-vue'
import type { ServiceType, StepType } from '@/types'

export type FinanceServiceType = {
  features: string[]
} & ServiceType

export const services: FinanceServiceType[] = [
  {
    title: 'برنامه‌ریزی مالی',
    features: [
      'ارزیابی مالی شخصی‌سازی‌شده',
      'تنظیم اهداف سفارشی',
      'نقشه راه مالی متناسب'
    ],
    icon: donutChartIcon,
    route: { name: '' }
  },
  {
    title: 'برنامه‌ریزی بازنشستگی',
    features: [
      'تحلیل درآمد و هزینه',
      'استراتژی سرمایه‌گذاری متناسب',
      'تنظیم اهداف بازنشستگی'
    ],
    icon: barChartIcon,
    route: { name: '' }
  },
  {
    title: 'برنامه‌ریزی و بهینه‌سازی مالیاتی',
    features: ['استراتژی‌های برنامه‌ریزی مالیاتی استراتژیک', 'راهنمایی سرمایه‌گذاری کارآمد از نظر مالیاتی'],
    icon: stackIcon,
    route: { name: '' }
  },
  {
    title: 'برنامه‌ریزی املاک',
    features: ['وصیت‌نامه‌ها و اعتمادها', 'استراتژی‌های حفاظت از دارایی', 'برنامه‌ریزی جانشینی'],
    icon: homeIcon,
    route: { name: '' }
  },
  {
    title: 'مدیریت و بیمه',
    features: ['ارزیابی و تحلیل ریسک', 'بیمه سفارشی', 'پشتیبانی مدیریت مطالبات'],
    icon: dollarIcon,
    route: { name: '' }
  }
]

export const financeSteps: StepType[] = [
  {
    title: 'رویکرد شخصی‌سازی‌شده',
    description: 'دریافت راه‌حل‌های مالی متناسب با نیازها و اهداف شما.',
    icon: BIconRocketTakeoff
  },
  {
    title: 'راهنمایی کارشناسانه',
    description: 'بهره‌مند شدن از تخصص و درک عمیق کارشناسان.',
    icon: BIconGem
  },
  {
    title: 'تمرکز بر مشتری',
    description: 'از خدمات استثنایی با تمرکز بر روابط بلندمدت لذت ببرید.',
    icon: BIconCupStraw
  },
  {
    title: 'راه‌حل‌های جامع',
    description: 'دسترسی به طیف وسیعی از خدمات تحت یک سرمایه‌گذاری',
    icon: BIconBug
  }
]
