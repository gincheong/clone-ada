import { loadMessages } from 'react-native-globalize';

const loadProfileMessages = () => {
  loadMessages({
    en: {
      profile: {
        add: 'Add New Profile',
      },
    },
    ko: {
      profile: {
        add: '새 프로필 추가',
      },
    },
  });
};

export default loadProfileMessages;
