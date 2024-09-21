import github from '@/assets/images/elements/github.svg'
import dropbox from '@/assets/images/elements/dropbox.svg'
import reddit from '@/assets/images/elements/reddit.svg'
import type { ServiceType } from '@/types'

export const grid: ServiceType[] = [
  {
    image: github,
    title: 'گیت‌هاب',
    description:
      'گیت‌هاب از Git استفاده می‌کند، سیستمی توزیع‌شده برای کنترل نسخه، تا تغییرات کد را در طول زمان پیگیری کند.'
  },
  {
    image: dropbox,
    title: 'دراپ باکس',
    description:
      'ادغام دراپ باکس با راه‌حل‌های پشتیبان‌گیری می‌تواند لایه اضافی از حفاظت داده را فراهم کند.'
  },
  {
    image: reddit,
    title: 'ردیت',
    description:
      'با ادغام با ردیت، می‌توانید به راحتی پست‌ها یا نظرات ردیت را در بلاگ‌ها یا وب‌سایت‌های مشابه به اشتراک بگذارید.'
  }
]

export const list: string[] = [
  `دریافت اعلان‌های فوری در میزل هرگاه که در اسلک به‌روزرسانی یا عملی صورت گیرد`,
  `به‌راحتی وظایف را در هر دو پلتفرم ایجاد، اختصاص و مدیریت کنید تا از از دست رفتن هیچ چیزی اطمینان حاصل شود.`,
  `تمام داده‌های خود را سازگار و به‌روز نگه دارید، چه اطلاعات مشتری، جزئیات پروژه، یا پیام‌های مهم باشد.`
]

export const list2: string[] = ['اعلان‌های فوری', 'اشتراک‌گذاری فایل', 'ارتباط بدون درز']
