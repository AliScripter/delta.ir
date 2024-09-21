// type CurrencyType = '₹' | '$' | '€' | 'تومان';

// export const currency: CurrencyType = 'تومان';

// const lang = document.documentElement.lang;

// const dtf = new Intl.DateTimeFormat(document.documentElement.lang);
// const parts = dtf.formatToParts(new Date()).find(p => p.type === 'year');
// export const currentYear = parts?.value;

// export const developedByLink = '';

// export const developedBy = lang === 'fa' ? 'اِل تِم' : 'elTheme';

// export const buyLink = '';

// export const supportLink = 'mailto:support@eltheme.ir';
// !--------- new code :>
type CurrencyType = '₹' | '$' | '€' | 'تومان';

export const currency: CurrencyType = 'تومان';

let lang = 'fa'; // مقدار پیش‌فرض برای زبان

if (process.client) {
  const docLang = document.documentElement.lang;
  // بررسی اعتبار زبان و استفاده از مقدار پیش‌فرض در صورت نامعتبر بودن
  lang =
    docLang && Intl.DateTimeFormat.supportedLocalesOf([docLang]).length
      ? docLang
      : 'fa';
}

const dtf = process.client ? new Intl.DateTimeFormat(lang) : null;
const parts = dtf
  ? dtf.formatToParts(new Date()).find(p => p.type === 'year')
  : null;
export const currentYear = parts?.value || new Date().getFullYear();

export const developedByLink = '';

export const developedBy = lang === 'fa' ? 'اِل تِم' : 'elTheme';

export const buyLink = '';

export const supportLink = 'mailto:support@eltheme.ir';
