import { Button, Input, UserData } from '../../reducers/interfaces';

export interface BotProps {
  message: string;
}

export interface UserProps {
  message: UserData;
}

export interface UserButtonProps {
  button: Button[];
}

export interface UserInputProps {
  input: Input;
}
