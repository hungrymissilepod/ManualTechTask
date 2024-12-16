import { I18n } from 'i18n-js';

export const i18n = new I18n();
i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.enableFallback = true;

const translationGetters = {
  en: () => require('../assets/i18n/en.json'),
};

export const setupI18nConfig = () => {
  i18n.translations = { 'en': translationGetters['en']() };
};