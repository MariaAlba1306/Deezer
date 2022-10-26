import i18next from 'https://deno.land/x/i18next/index.js';
import enTranslation from './locales/en/translation.json' assert { type: 'json' };
import deTranslation from './locales/de/translation.json' assert { type: 'json' };

const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

i18next.use(Backend).init({
  // debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: enTranslation,
    },
    de: {
      translation: deTranslation,
    },
  },
});

export default (lng: string | undefined | null) =>
  i18next.getFixedT(lng || systemLocale);
