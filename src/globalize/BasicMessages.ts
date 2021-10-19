import { loadMessages } from 'react-native-globalize';

const loadBasicMessages = () => {
  loadMessages({
    en: {
      ok: 'Ok',
      cancel: 'Cancel',
    },
    ko: {
      ok: '확인',
      cancel: '취소',
    },
  });
};

export default loadBasicMessages;
