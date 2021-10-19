export const languages = {
  en: 'English',
  ko: '한국어',
};

export interface LocaleState {
  locale: keyof typeof languages;
}
