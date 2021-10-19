import { loadMessages } from 'react-native-globalize';

const loadDrawerMessages = () => {
  loadMessages({
    en: {
      drawer: {
        setting: 'Setting',
        profile: 'Profile',
        restart: 'Restart',
        alertTitle: 'Warning',
        alertContent: 'Restart Conversation',
      },
    },
    ko: {
      drawer: {
        setting: '환경설정',
        profile: '프로필',
        restart: '대화 재시작',
        alertTitle: '경고',
        alertContent: '대화를 초기화합니다.',
      },
    },
  });
};

export default loadDrawerMessages;
