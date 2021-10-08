export interface balloonState {
  currentIndex: number;
  // prevChat?: Data;
  // currentChat: Data;
  data: Data[];
}

export interface Data {
  bot: string;
  user: Button[] | Input;
  type: 'button' | 'input';
}

export interface Button {
  display: string;
  payload: string;
  placeholder?: never;
}

export interface Input {
  display?: never;
  payload?: never;
  placeholder: string;
}
