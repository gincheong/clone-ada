import { BalloonAction } from '../reducers/BalloonSlice';
import {
  all,
  delay,
  fork,
  put,
  select,
  takeLeading,
} from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
// animations
import AnimationPreset from '../assets/animation';
import { RootState } from '../stores';

function* getState(reducer: keyof RootState) {
  const state: RootState = yield select();
  return state[reducer];
}

function* prevConversation() {
  const { conversationIdx, onLoading, onMovingNext } = yield* getState(
    'BalloonReducer',
  );

  if (conversationIdx > 0 && !onLoading && !onMovingNext) {
    yield put(BalloonAction.prevConversationSuccess());
    yield delay(AnimationPreset.prevBalloon.duration);

    yield put(BalloonAction.prevConversationEnd());
  }
}

function* watchPrevConversation() {
  yield takeLeading(BalloonAction.prevConversationStart, prevConversation);
}

function* nextConversation(action: PayloadAction<string>) {
  const { onMovingPrev } = yield* getState('BalloonReducer');

  if (onMovingPrev) {
    return;
  }

  try {
    // TODO 여기서 API call
    // TODO action.payload에 응답값 string으로 있음

    yield delay(1000);

    const randomNumber = Math.round(Math.random());
    if (randomNumber === 1) {
      yield put(
        BalloonAction.nextConversationSuccess({
          bot: `다람쥐 헌 쳇바퀴에 타고파 ${Math.random().toFixed(
            Math.floor(Math.random() * 10),
          )}`,
          user: {
            type: 'button',
            data: [
              {
                display: 'This is Button 1',
                value: 'Button 1 value',
              },
              {
                display: 'This is Button 2',
                value: 'Button 2 value',
              },
            ],
          },
          answer: '',
        }),
      );
    } else if (randomNumber === 0) {
      yield put(
        BalloonAction.nextConversationSuccess({
          bot: `다람쥐 헌 쳇바퀴에 타고파 ${Math.random().toFixed(
            Math.floor(Math.random() * 10),
          )}`,
          user: {
            type: 'input',
            data: {
              placeholder: 'this is input placeholder',
            },
          },
          answer: '',
        }),
      );
    }

    // * 새 대화 전달 후 애니메이션 기다림
    yield delay(AnimationPreset.balloon.duration);
  } catch (error) {
    console.error(error); // TODO nextConversationError로 인자 전달
    yield put(BalloonAction.nextConversationError());
  } finally {
    yield put(BalloonAction.nextConversationEnd());
  }
}

function* watchNextConversation() {
  yield takeLeading(BalloonAction.nextConversationStart, nextConversation);
}

export default function* BalloonSaga() {
  yield all([fork(watchPrevConversation), fork(watchNextConversation)]);
}
