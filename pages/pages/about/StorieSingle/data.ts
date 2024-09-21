import stories1 from '@/assets/images/stories/01.jpg'
import stories3 from '@/assets/images/stories/03.jpg'
import client2 from '@/assets/images/client/logo-listkit.svg'
import client3 from '@/assets/images/client/logo-nephos.svg'
import { string } from 'yup'
import type { ServiceType } from '@/types'

export type StoryType = {
  logo: string
} & ServiceType

export const story: StoryType[] = [
  {
    logo: stories1,
    image: client2,
    description:
      'من به شدت میزل را به هر کسی که به دنبال یک قالب بوت‌استرپ با کیفیت بالا است، توصیه می‌کنم. دره به سوی بیست به طور مستقیم به من هدایت کرد. برای حل مشکلات صبحانه، به طور کامل یا به درستی.',
    title: 'اما واتسون'
  },
  {
    logo: stories3,
    image: client3,
    description:
      'دو نفر قبل از آنکه به تنگنا بیفتند، به جز لحظه‌ای از خودشان به کمک دیگران وابسته نشدند. ناامیدی و اطمینان همسر راه را روشن کردند و در نهایت هیچ راهی برای جبران باقی نماند.',
    title: 'لوئیس فرگوسن'
  }
]
