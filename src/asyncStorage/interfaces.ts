// interfaces
import { Locales } from '../reducers/LocaleInterfaces';

export interface AsyncStorageProps {
  locale: Locales;
}

export const DefaultValue: AsyncStorageProps = {
  locale: 'en',
};
