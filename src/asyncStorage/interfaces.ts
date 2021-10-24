// interfaces
import { Locales } from '../reducers/LocaleInterfaces';

export interface AsyncStorageProps {
  locale: Locales;
  profile: Profile[];
}

export const DefaultValue: AsyncStorageProps = {
  locale: 'en',
  profile: [],
};

export interface Profile {
  email: string;
  name: string;
  birth: Date;
}
