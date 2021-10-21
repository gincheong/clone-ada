export const languages = {
  en: 'English',
  ko: '한국어',
};

export interface LocaleState {
  locale: Locales;
}

export type Locales = keyof typeof languages;
