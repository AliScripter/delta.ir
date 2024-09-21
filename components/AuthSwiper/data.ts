import auth1Img from '@/assets/images/auth/01.jpg'
import auth2Img from '@/assets/images/auth/02.jpg'
import auth3Img from '@/assets/images/auth/03.jpg'

const author = [
  {
    name: 'اما واتسون',
    image: auth1Img
  },
  {
    name: 'کارولین اورتیز',
    image: auth2Img
  },
  {
    name: 'دنیس بارنت',
    image: auth3Img
  }
]

type AuthorType = {
  name: string
  image: string
}

type SwiperType = {
  quote: string
  author: AuthorType
  position: string
}

export const swiperdata: SwiperType[] = [
  {
    quote:
      'با عزم راسخ، آن‌ها در پیچیدگی‌های صنعت حرکت می‌کنند، شراکت‌های استراتژیک ایجاد می‌کنند و تغییرات تحول‌آفرین را پیش می‌برند.',
    author: author[0],
    position: 'بنیانگذار، کاتالوگ'
  },
  {
    quote:
      'یک مدیرعامل برجسته آژانس یک دیدگاه‌دار است که به طور مداوم مرزهای خلاقیت را جلو می‌برد و تیم خود را به ارتفاعات جدیدی می‌رساند. آن‌ها با اشتیاق خود الهام‌بخش هستند و فرهنگی از اعتماد و احترام را پرورش می‌دهند.',
    author: author[1],
    position: 'مدیرعامل، میزِل'
  },
  {
    quote:
      'با همکاری و جهت‌گیری استراتژیک، آن‌ها آژانس را به سوی اهدافش هدایت می‌کنند و در منظره همیشه در حال تغییر با چابکی و لطف حرکت می‌کنند.',
    author: author[2],
    position: 'بنیانگذار، کاتالوگ'
  }
]
