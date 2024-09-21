import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import type { TestimonialType } from '@/types'

export type ReviewType = {
  date: string
} & TestimonialType

export const reviews: ReviewType[] = [
  {
    user: {
      username: 'آلن اسمیت',
      avatar: avatar1
    },
    comment:
      'ضمانت‌ها به طور خصوصی و کامل برطرف شد. ناامیدی‌های لازم برای اعتراض به صورت محترمانه حل شد. احساسات آقای به طور عمده در تعاملات صمیمی به کار برده شد. ',
    date: '21 خرداد 1401، ساعت 6:01 صبح',
    rating: 4.5
  },
  {
    user: {
      username: 'لوئیس فرگوسن',
      avatar: avatar2
    },
    comment:
      'ناامیدی تحویل داده شده، اعتراض لازم است، آقای X پیروز شد. آقای X بیشتر احساس می‌کند که در انجام کارها دوستانه است. ',
    date: '24 خرداد 1401، ساعت 6:01 صبح',
    rating: 4.5
  }
]
