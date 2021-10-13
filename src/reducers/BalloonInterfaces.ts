export interface BalloonState {
  // 다음 대화로 이동하는 동안 true
  onMovingNext: boolean;
  // 이전 대화로 이동하는 동안 true
  onMovingPrev: boolean;
  onLoading: boolean;
  conversationIdx: number;
  conversations: Conversation[];
}

export interface Conversation {
  bot: string;
  user: UserData;
  answer: string;
}

export interface Button {
  display: string;
  value: string;
}

export interface Input {
  placeholder: string;
}

export type UserData =
  | {
      type: 'button';
      data: Button[];
    }
  | {
      type: 'input';
      data: Input;
    };
