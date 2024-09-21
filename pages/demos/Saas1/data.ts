import type { BlogType, FeatureType, PricingPlanType, StatisticType } from '@/types'
import { BIconCheckCircleFill } from 'bootstrap-icons-vue'

export const features: FeatureType[] = [
  {
    title: 'توضیح ارزش طراحی',
    description:
      "این چینش دقیق عناصر است که نه تنها جذابیت بصری را افزایش می‌دهد بلکه عملکرد، کارایی و تجربه کاربری را نیز بهبود می‌بخشد. طراحی موثر هویت برند شما را منتقل می‌کند، اعتماد را ایجاد می‌کند و می‌تواند تأثیر قابل توجهی بر نرخ تبدیل و وفاداری مشتری داشته باشد."
  },
  {
    title: 'منابعی برای دسترسی به رنگ‌ها کشف کنید',
    description:
      'ما مجموعه‌ای از ابزارها، راهنماها و بهترین شیوه‌ها را ارائه می‌دهیم تا به شما کمک کنیم طراحی‌ها، وبسایت‌ها و محتوایی را ایجاد کنید که شامل و قابل دسترس برای همه افراد، بدون توجه به توانایی‌های بصری آنها باشد.'
  },
  {
    title: 'بررسی کنتراست رابط کاربری برای استانداردهای دسترسی',
    description:
      'این فرآیند مهم اطمینان می‌دهد که محتوا به راحتی توسط افرادی با درجات مختلفی از اختلالات بینایی خوانا و قابل درک باشد. با رعایت استانداردهای دسترسی، شما تجربه‌ای جامع‌تر و کاربرپسندتر برای همه کاربران ایجاد می‌کنید، بدون توجه به توانایی‌های بصری آنها، و به یک محیط دیجیتال دسترس‌پذیرتر کمک می‌کنید.'
  },
  {
    title: 'بررسی دسترسی‌پذیری در مرورگرها',
    description:
      'با ارزیابی نحوه عملکرد محتوای دیجیتال و ویژگی‌های شما در مرورگرهای مختلف، می‌توانید مشکلات احتمالی دسترسی را شناسایی کرده و تنظیمات لازم را انجام دهید تا تجربه آنلاین روان و دسترس‌پذیری را برای کاربران فراهم کنید، بدون توجه به انتخاب مرورگر آنها.'
  }
]

export const statData: StatisticType[] = [
  {
    title: 'مدیریت پروژه در یک روز',
    number: 150,
    suffix: '+'
  },
  {
    title: 'صرفه‌جویی در زمان برای مشتری ما',
    number: 120,
    suffix: '+'
  },
  {
    title: 'نظرات مثبت کاربران',
    number: 10,
    suffix: 'میلیون+'
  },
  {
    title: 'مشتریان خوشحال',
    number: 600,
    suffix: '+'
  }
]

export const pricingData: PricingPlanType[] = [
  {
    title: 'برنامه پایه',
    price: 25,
    features: [
      { icon: BIconCheckCircleFill, title: 'دسترسی به ویژگی‌های پایه' },
      { icon: BIconCheckCircleFill, title: 'گزارش‌دهی و تحلیل پایه' },
      { icon: BIconCheckCircleFill, title: 'تا ۱۰ کاربر فردی' },
      { icon: BIconCheckCircleFill, title: '۲۰ گیگابایت داده فردی در هر سال' },
      { icon: BIconCheckCircleFill, title: 'پشتیبانی چت و ایمیل پایه' },
      { icon: BIconCheckCircleFill, title: 'بهترین روش‌ها و بازبینی‌های مداوم' }
    ]
  },
  {
    title: 'برنامه تجاری',
    isPopular: true,
    price: 50,
    features: [
      { icon: BIconCheckCircleFill, title: 'بیش از ۲۰۰ ادغام' },
      { icon: BIconCheckCircleFill, title: 'گزارش‌دهی و تحلیل پایه' },
      { icon: BIconCheckCircleFill, title: 'تا ۱۰ کاربر فردی' },
      { icon: BIconCheckCircleFill, title: '۴۰ گیگابایت داده فردی در هر سال' },
      { icon: BIconCheckCircleFill, title: 'پشتیبانی چت و ایمیل اولویت‌دار' },
      { icon: BIconCheckCircleFill, title: 'بهترین روش‌ها و بازبینی‌های مداوم' }
    ]
  },
  {
    title: 'برنامه سازمانی',
    price: 85,
    features: [
      { icon: BIconCheckCircleFill, title: 'فیلد سفارشی پیشرفته' },
      { icon: BIconCheckCircleFill, title: 'گزارش حسابرسی و تاریخچه داده' },
      { icon: BIconCheckCircleFill, title: 'کاربران فردی نهایی' },
      { icon: BIconCheckCircleFill, title: '۶۰ گیگابایت داده فردی در هر سال' },
      { icon: BIconCheckCircleFill, title: 'پشتیبانی چت و ایمیل پایه' },
      { icon: BIconCheckCircleFill, title: 'بهترین روش‌ها و بازبینی‌های مداوم' }
    ]
  }
]

export const blogs: BlogType[] = [
  {
    title: 'بوت‌استرپ به سادگی - سفارشی‌سازی قالب HTML شما مانند یک حرفه‌ای',
    publishedBy: {
      firstName: 'ژاکلین',
      lastName: 'میلر'
    },
    publishedAt: {
      date: 8,
      month: 'فروردین',
      year: 1402
    },
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'طراحی وب بدون زحمت با میزل - خلاقیت خود را آزاد کنید',
    publishedBy: {
      firstName: 'آلن',
      lastName: 'اسمیت'
    },
    publishedAt: {
      date: 13,
      month: 'فروردین',
      year: 1402
    },
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'تسلط بر قالب‌های وب‌سایت HTML - خلاقیت خود را با بوت‌استرپ آزاد کنید',
    publishedBy: {
      firstName: 'ژاکلین',
      lastName: 'میلر'
    },
    publishedAt: {
      date: 15,
      month: 'فروردین',
      year: 1402
    },
    route: { name: 'blog.single.v1' }
  }
]
