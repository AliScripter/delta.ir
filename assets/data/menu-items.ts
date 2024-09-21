import type { MegaMenuType, MenuItemType, ResourceMenuType } from '@/helpers/menu'
import {
  BIconBasket,
  BIconBell,
  BIconBlockquoteRight,
  BIconBoxes,
  BIconBriefcase,
  BIconBullseye,
  BIconCalendar3Week,
  BIconChatLeft,
  BIconEmojiSunglasses,
  BIconEnvelope,
  BIconFileEarmarkText,
  BIconFileText,
  BIconHeart,
  BIconLock,
  BIconMask,
  BIconPerson,
  BIconQuestionCircle,
  BIconRocket,
  BIconShieldLock,
  BIconStar,
  BIconStickies,
  BIconTrash,
  BIconWallet
} from 'bootstrap-icons-vue'

import slackImg from '@/assets/images/elements/slack.svg'
import webflowImg from '@/assets/images/elements/webflow.svg'
import mailchimpImg from '@/assets/images/elements/mailchimp.svg'
import redditImg from '@/assets/images/elements/reddit.svg'
import blogImg2 from '@/assets/images/blog/4by4/02.jpg'
import blogImg1 from '@/assets/images/blog/4by4/01.jpg'
import blogImg3 from '@/assets/images/blog/4by4/03.jpg'
import blog2 from '@/assets/images/blog/02.jpg'

export const ACCOUNT_VERTICAL_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'account-profile',
    label: 'پروفایل من',
    route: { name: 'account.profile' },
    parentKey: 'pages-account',
    icon: BIconPerson
  },
  {
    key: 'account-security',
    label: 'امنیت',
    route: { name: 'account.security' },
    parentKey: 'pages-account',
    icon: BIconShieldLock
  },
  {
    key: 'account-notifications',
    label: 'اعلان‌ها',
    route: { name: 'account.notifications' },
    parentKey: 'pages-account',
    icon: BIconBell
  },
  {
    key: 'account-projects',
    label: 'پروژه‌ها',
    route: { name: 'account.projects' },
    parentKey: 'pages-account',
    icon: BIconBriefcase
  },
  {
    key: 'account-payment-details',
    label: 'جزئیات پرداخت',
    route: { name: 'account.payment-details' },
    parentKey: 'pages-account',
    icon: BIconWallet
  },
  {
    key: 'account-order-history',
    label: 'تاریخچه سفارش',
    route: { name: 'account.order-history' },
    parentKey: 'pages-account',
    icon: BIconBasket
  },
  {
    key: 'account-wishlist',
    label: 'فهرست علاقه‌مندی‌ها',
    route: { name: 'account.wishlist' },
    parentKey: 'pages-account',
    icon: BIconHeart
  },
  {
    key: 'account-delete-profile',
    label: 'حذف پروفایل',
    route: { name: 'account.delete-profile' },
    parentKey: 'pages-account',
    icon: BIconTrash
  }
]

export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'demos',
    label: 'دموها',
    children: [
      {
        key: 'demo-classic-default',
        label: 'پیش‌فرض کلاسیک',
        route: { name: 'demos.classic' },
        parentKey: 'demos'
      },
      {
        key: 'demo-creative-agency',
        label: 'آژانس خلاق',
        route: { name: 'demos.agency.creative' },
        parentKey: 'demos'
      },
      {
        key: 'demo-digital-agency',
        label: 'آژانس دیجیتال',
        route: { name: 'demos.agency.digital' },
        parentKey: 'demos',
        badge: 'جدید'
      },
      {
        key: 'demo-design-agency',
        label: 'آژانس طراحی',
        route: { name: 'demos.agency.design' },
        parentKey: 'demos',
        badge: 'جدید'
      },
      {
        key: 'demo-seo-agency',
        label: 'آژانس سئو',
        route: { name: 'demos.agency.seo' },
        parentKey: 'demos',
        badge: 'جدید'
      },
      {
        key: 'demo-product-landing',
        label: 'صفحه لندینگ محصول',
        route: { name: 'demos.product-landing' },
        parentKey: 'demos'
      },
      {
        key: 'demo-mobile-app',
        label: 'نمایشگاه اپلیکیشن موبایل',
        route: { name: 'demos.mobile-app' },
        parentKey: 'demos'
      },
      {
        key: 'demo-saas-v1',
        label: 'SaaS نسخه 1',
        route: { name: 'saas.v1' },
        parentKey: 'demos'
      },
      {
        key: 'demo-saas-v2',
        label: 'SaaS نسخه 2',
        route: { name: 'saas.v2' },
        parentKey: 'demos'
      },
      {
        key: 'demo-saas-v3',
        label: 'SaaS نسخه 3',
        route: { name: 'saas.v3' },
        parentKey: 'demos'
      },
      {
        key: 'demo-saas-v4',
        label: 'SaaS نسخه 4',
        route: { name: 'saas.v4' },
        parentKey: 'demos'
      },
      {
        key: 'demo-saas-v5',
        label: 'SaaS نسخه 5',
        route: { name: 'saas.v5' },
        parentKey: 'demos'
      },
      {
        key: 'demo-finance-consulting',
        label: 'مشاوره مالی',
        route: { name: 'demos.finance-consulting' },
        parentKey: 'demos',
        badge: 'جدید'
      },
      {
        key: 'demo-shop-index',
        label: 'شاخص فروشگاه',
        route: { name: 'shop.index' },
        parentKey: 'demos'
      }
    ]
  },
  {
    key: 'pages',
    label: 'صفحات',
    children: [
      {
        key: 'pages-about',
        label: 'درباره',
        parentKey: 'pages',
        children: [
          {
            key: 'about-v1',
            label: 'درباره نسخه 1',
            route: { name: 'about.v1' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-v2',
            label: 'درباره نسخه 2',
            route: { name: 'about.v2' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-v3',
            label: 'درباره نسخه 3',
            route: { name: 'about.v3' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-team',
            label: 'تیم',
            route: { name: 'pages.team' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-services-v1',
            label: 'خدمات نسخه 1',
            route: { name: 'services.v1' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-services-v2',
            label: 'خدمات نسخه 2',
            route: { name: 'services.v2' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-services-single',
            label: 'خدمت تک',
            route: { name: 'services.single' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-customer-stories',
            label: 'داستان‌های مشتری',
            route: { name: 'customer.stories' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-customer-story-single',
            label: 'داستان مشتری - تک',
            route: { name: 'customer.story-single' },
            parentKey: 'pages-about'
          },
          {
            key: 'about-career',
            label: 'حرفه‌ای',
            route: { name: 'career' },
            parentKey: 'pages-about',
            badge: '2 شغل'
          },
          {
            key: 'about-career-single',
            label: 'تک‌کار',
            route: { name: 'career.single' },
            parentKey: 'pages-about'
          }
        ]
      },
      {
        key: 'pages-contact-1',
        label: 'تماس نسخه 1',
        route: { name: 'contact.v1' },
        parentKey: 'pages'
      },
      {
        key: 'pages-contact-2',
        label: 'تماس نسخه 2',
        route: { name: 'contact.v2' },
        parentKey: 'pages'
      },
      {
        key: 'pages-saas',
        label: 'صفحات SaaS',
        parentKey: 'pages',
        children: [
          {
            key: 'saas-features',
            label: 'ویژگی‌ها',
            route: { name: 'saas.feature' },
            parentKey: 'pages-saas'
          },
          {
            key: 'saas-feature-single',
            label: 'ویژگی تک',
            route: { name: 'saas.feature-single' },
            parentKey: 'pages-saas'
          },
          {
            key: 'saas-integrations',
            label: 'ادغام‌ها',
            route: { name: 'saas.integrations' },
            parentKey: 'pages-saas'
          },
          {
            key: 'saas-integration-single',
            label: 'یکپارچگی تک',
            route: { name: 'saas.integration-single' },
            parentKey: 'pages-saas'
          }
        ]
      },
      {
        key: 'pages-shop',
        label: 'فروشگاه',
        parentKey: 'pages',
        children: [
          {
            key: 'shop-grid',
            label: 'شبکه فروشگاه',
            route: { name: 'shop.grid' },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-single',
            label: 'فروشگاه تک',
            route: { name: 'shop.single', params: { id: '1001' } },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-cart',
            label: 'سبد خرید',
            route: { name: 'shop.cart' },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-empty-cart',
            label: 'سبد خرید خالی فروشگاه',
            route: { name: 'shop.empty-cart' },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-checkout',
            label: 'تسویه‌حساب فروشگاه',
            route: { name: 'shop.checkout' },
            parentKey: 'pages-shop'
          }
        ]
      },
      {
        key: 'pages-blog',
        label: 'وبلاگ',
        parentKey: 'pages',
        children: [
          {
            key: 'blog-grid',
            label: 'شبکه وبلاگ',
            route: { name: 'blog.grid' },
            parentKey: 'pages-blog'
          },
          {
            key: 'blog-list-sidebar',
            label: 'پانل جانبی لیست وبلاگ',
            route: { name: 'blog.list-sidebar' },
            parentKey: 'pages-blog'
          },
          {
            key: 'blog-single-v1',
            label: 'بلاگ تک v.1',
            route: { name: 'blog.single.v1' },
            parentKey: 'pages-blog'
          },
          {
            key: 'blog-single-v2',
            label: 'بلاگ تک v.2',
            route: { name: 'blog.single.v2' },
            parentKey: 'pages-blog'
          }
        ]
      },
      {
        key: 'pages-specialty',
        label: 'صفحات تخصصی',
        parentKey: 'pages',
        children: [
          {
            key: 'specialty-help-center',
            label: 'مرکز راهنما',
            route: { name: 'help.center' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-help-detail',
            label: 'جزئیات مرکز کمک',
            route: { name: 'help.detail' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-pricing',
            label: 'قیمت‌گذاری',
            route: { name: 'pricing' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-faq',
            label: 'پرسش‌های متداول',
            route: { name: 'faqs' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-error-404',
            label: 'خطای 404',
            route: { name: 'not-found' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-coming-soon',
            label: 'به‌زودی',
            route: { name: 'coming-soon' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-terms-&-conditions',
            label: 'شرایط و ضوابط',
            route: { name: 'terms-conditions' },
            parentKey: 'pages-specialty'
          }
        ]
      },
      {
        key: 'pages-auth',
        label: 'احراز هویت',
        parentKey: 'pages',
        children: [
          {
            key: 'auth-sign-up',
            label: 'ثبت‌نام',
            route: { name: 'auth.sign-up' },
            parentKey: 'pages-auth'
          },
          {
            key: 'auth-sign-in',
            label: 'ورود',
            route: { name: 'auth.sign-in' },
            parentKey: 'pages-auth'
          },
          {
            key: 'auth-forgot-pass',
            label: 'فراموشی رمز عبور',
            route: { name: 'auth.forgot-password' },
            parentKey: 'pages-auth'
          }
        ]
      },
      {
        key: 'pages-account',
        label: 'حساب',
        parentKey: 'pages',
        children: ACCOUNT_VERTICAL_MENU_ITEMS
      }
    ]
  },
  {
    key: 'portfolio',
    label: 'نمونه کارها',
    children: [
      {
        key: 'portfolio-masonry',
        label: 'پایه‌گذاری نمونه کارها',
        route: { name: 'portfolio.masonry' },
        parentKey: 'portfolio'
      },
      {
        key: 'portfolio-showcase',
        label: 'نمایشگاه پورتفولیو',
        route: { name: 'portfolio.showcase' },
        parentKey: 'portfolio'
      },
      {
        key: 'portfolio-list',
        label: 'لیست نمونه کارها',
        route: { name: 'portfolio.list' },
        parentKey: 'portfolio'
      },
      {
        key: 'portfolio-case-study-v1',
        label: 'مطالعه موردی پورتفولیو v.1',
        route: { name: 'portfolio.case-study.v1' },
        parentKey: 'portfolio'
      },
      {
        key: 'portfolio-case-study-v2',
        label: 'مطالعه موردی پورتفولیو v.2',
        route: { name: 'portfolio.case-study.v2' },
        parentKey: 'portfolio'
      }
    ]
  }
]

export const MEGA_MENU_ITEMS: MegaMenuType = {
  usefulLinks: [
    'تحقیقات بازار',
    'تبلیغات',
    'رفتار مصرف‌کننده',
    'بازاریابی دیجیتال',
    'اخلاق بازاریابی',
    'بازاریابی در رسانه‌های اجتماعی'
  ],
  company: [
    {
      icon: BIconBoxes,
      title: 'درباره ما',
      description: 'در مورد داستان ما، بیانیه مأموریت و نقشه راه ما بیاموزید.'
    },
    {
      icon: BIconRocket,
      title: 'شغل',
      badge: '3 شغل',
      description: "ما همیشه به دنبال افراد بااستعداد هستیم. به تیم ما بپیوندید!"
    },
    {
      icon: BIconEmojiSunglasses,
      title: 'داستان‌های مشتریان',
      description: 'بیاموزید که چگونه مشتریان ما تغییرات بزرگی در تکنولوژی خود ایجاد می‌کنند.'
    }
  ],
  integration: [
    {
      logo: slackImg,
      name: 'اسلک'
    },
    {
      logo: webflowImg,
      name: 'وب‌فلاو'
    },
    {
      logo: mailchimpImg,
      name: 'میل‌چیمپ'
    },
    {
      logo: redditImg,
      name: 'ردیت'
    }
  ],
  recentBlogs: [
    {
      image: blogImg2,
      title: '۱۰ چیزی که باید درباره میزل بدانید',
      link: '/blog/single/v1'
    },
    {
      image: blogImg1,
      title: 'قدرت شکرگزاری: پرورش شادی و فراوانی',
      link: '/blog/single/v2'
    },
    {
      image: blogImg3,
      title: 'توسعه وب بدون زحمت با میزل',
      link: '/blog/single/v1'
    }
  ]
}

export const RESOURCES_MENU_ITEMS: ResourceMenuType = {
  usefulLinks: [
    { icon: BIconFileText, name: 'راهنماها' },
    { icon: BIconChatLeft, name: 'پشتیبانی‌ها' },
    { icon: BIconCalendar3Week, name: 'جامعه و رویدادها' },
    { icon: BIconBlockquoteRight, name: 'وبلاگ‌ها' },
    { icon: BIconLock, name: 'امنیت' },
    { icon: BIconStar, name: 'آموزش‌ها' },
    { icon: BIconQuestionCircle, name: 'مرکز کمک' },
    { icon: BIconEnvelope, name: 'خبرنامه توسعه‌دهندگان' }
  ],
  keyFeatures: [
    {
      title: 'مستندسازی',
      description: 'با استفاده از مستندات، می‌توانید به‌راحتی پروژه‌ها را توسعه دهید',
      icon: BIconFileEarmarkText
    },
    {
      title: 'قطعه کدها',
      description: 'راهنماهای توسعه برای ساخت پروژه‌ها با میزل',
      icon: BIconStickies
    },
    {
      title: 'لیست تغییرات',
      description: 'انتشار و اعلام ویژگی‌های جدید. ببینید چگونه تغییرات انجام می‌شود.',
      icon: BIconBullseye
    },
    {
      title: 'نکات Playwright',
      description: 'نکات و راهنمای جامع برای اتوماسیون مرورگر بدون سر',
      icon: BIconMask
    }
  ],
  featureResource: {
    title: 'عنوان برجسته در اینجا',
    description: 'ترک‌ها به اشتباه تنظیم شده بودند و درخشان اعتقاد به او داشتند که همه پشتیبانی کرده بودند.',
    image: blog2
  }
}
