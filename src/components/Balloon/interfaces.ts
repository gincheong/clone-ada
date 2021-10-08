// interfaces
import { Button, Data, Input } from '../../reducers/interfaces';

interface Props {
  viewHeight: number;
}

export type BalloonProps = Data & Props;

export type UserButtonProps = Button;

export type UserInputProps = Input;
