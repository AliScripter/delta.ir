import github from '@/assets/images/elements/github.svg'
import dropbox from '@/assets/images/elements/dropbox.svg'
import reddit from '@/assets/images/elements/reddit.svg'
import mailchimp from '@/assets/images/elements/mailchimp.svg'
import shopify from '@/assets/images/elements/shopify.svg'
import slack from '@/assets/images/elements/slack.svg'
import drive from '@/assets/images/elements/google-drive.svg'
import webflow from '@/assets/images/elements/webflow.svg'
import type { ServiceType } from '@/types'

export const gridData: ServiceType[] = [
  {
    image: github,
    title: 'گیت‌هاب',
    description:
      'گیت‌هاب از Git استفاده می‌کند، سیستمی توزیع‌شده برای کنترل نسخه، تا تغییرات کد را در طول زمان پیگیری کند.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: dropbox,
    title: 'دراپ باکس',
    description:
      'ادغام دراپ باکس با راه‌حل‌های پشتیبان‌گیری می‌تواند لایه اضافی از حفاظت داده را فراهم کند.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: reddit,
    title: 'ردیت',
    description:
      'با ادغام با ردیت، می‌توانید به راحتی پست‌ها یا نظرات ردیت را در بلاگ‌ها یا وب‌سایت‌های مشابه به اشتراک بگذارید.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: mailchimp,
    title: 'میل‌چیمپ',
    description:
      'ادغام با ابزارهای تحلیل داده امکان تقسیم‌بندی عمیق‌تر و پیام‌رسانی شخصی‌سازی شده را فراهم می‌آورد.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: shopify,
    title: 'شاپیفای',
    description:
      'شاپیفای از Git استفاده می‌کند، سیستمی توزیع‌شده برای کنترل نسخه، تا تغییرات کد را در طول زمان پیگیری کند.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: slack,
    title: 'اسلک',
    description:
      'ادغام اسلک با ابزارهای مدیریت پروژه مانند Trello، Asana یا Jira به تیم‌ها امکان دریافت پیام‌ها را می‌دهد.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: drive,
    title: 'درایو',
    description:
      'گیت‌هاب از Git استفاده می‌کند، سیستمی توزیع‌شده برای کنترل نسخه، تا تغییرات کد را در طول زمان پیگیری کند.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: webflow,
    title: 'وب‌فلاو',
    description:
      'ادغام وب‌فلاو با سیستم‌های CRM مانند HubSpot یا Salesforce امکان همگام‌سازی بی‌وقفه داده‌ها را فراهم می‌آورد.',
    route: {
      name: 'saas.integration-single'
    }
  }
]
