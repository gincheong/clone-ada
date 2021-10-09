export interface BalloonState {
  conversation: Conversation[];
}

export interface Conversation {
  bot: string;
  user: UserData;
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
