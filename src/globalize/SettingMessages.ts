import { loadMessages } from 'react-native-globalize';

const loadSettingMessages = () => {
  loadMessages({
    en: {
      setting: {
        setting: 'Setting',
        settingDesc: 'Everything regarding your login',
        privacy: 'Privacy',
        privacyDesc: 'Manage your personal health data',
        notification: 'Notification',
        notificationDesc: 'Manage communications with Ada',
        language: 'Language',
        languageDesc: "Change Ada's Language",
      },
    },
    ko: {
      setting: {
        setting: '설정',
        settingDesc: '로그인에 대한 모든 것',
        privacy: '개인정보',
        privacyDesc: '개인 건강 정보 관리',
        notification: '알림 설정',
        notificationDesc: 'Ada와의 커뮤니케이션 관리',
        language: '언어',
        languageDesc: 'Ada의 언어 변경',
      },
    },
  });
};

export default loadSettingMessages;
