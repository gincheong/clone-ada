// interfaces
import { languages } from '../../reducers/LocaleInterfaces';

export interface LanguageListItemProps {
  locale: keyof typeof languages;
  display: string;
}
