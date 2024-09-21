import {
  BIconBasket,
  BIconBell,
  BIconBriefcase,
  BIconHeart,
  BIconPerson,
  BIconShieldLock,
  BIconTrash,
  BIconWallet
} from 'bootstrap-icons-vue'

import type { IconType, RouteType } from '@/types'

type AccountMenuType = {
  title: string
  route: RouteType
  icon: IconType
}

export const accountMenu: AccountMenuType[] = [
  {
    title: 'پروفایل من',
    route: { name: 'account.profile' },
    icon: BIconPerson
  },
  {
    title: 'امنیت',
    route: { name: 'account.security' },
    icon: BIconShieldLock
  },
  {
    title: 'اعلان',
    route: { name: 'account.notifications' },
    icon: BIconBell
  },
  {
    title: 'پروژه‌های من',
    route: { name: 'account.projects' },
    icon: BIconBriefcase
  },
  {
    title: 'جزئیات پرداخت',
    route: { name: 'account.payment-details' },
    icon: BIconWallet
  },
  {
    title: 'تاریخچه سفارشات',
    route: { name: 'account.order-history' },
    icon: BIconBasket
  },
  {
    title: 'لیست علاقه‌مندی‌ها',
    route: { name: 'account.wishlist' },
    icon: BIconHeart
  },
  {
    title: 'حذف پروفایل',
    route: { name: 'account.delete-profile' },
    icon: BIconTrash
  }
]
