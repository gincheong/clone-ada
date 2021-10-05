export interface balloonState {
  currentIndex: number;
  data: Data[];
}

export interface Data {
  bot: string;
  user: Button[] | Input;
  type: 'button' | 'input';
}

interface Button {
  display: string;
  payload: string;
  placeholder?: never;
}

interface Input {
  display?: never;
  payload?: never;
  placeholder: string;
}
