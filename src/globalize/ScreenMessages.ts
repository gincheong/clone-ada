import { loadMessages } from 'react-native-globalize';

const loadScreenMessages = () => {
  loadMessages({
    en: {
      screen: {
        profile: 'Profile',
        setting: 'Setting',
        language: 'Language',
      },
    },
    ko: {
      screen: {
        profile: '프로필',
        setting: '환경설정',
        language: '언어',
      },
    },
  });
};

export default loadScreenMessages;
