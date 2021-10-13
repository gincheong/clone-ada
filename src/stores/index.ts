import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { all, call } from '@redux-saga/core/effects';
// reducers
import { BalloonReducer } from '../reducers/BalloonSlice';
import { DrawerReducer } from '../reducers/DrawerSlice';
// sagas
import BalloonSaga from '../sagas/BalloonSaga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([call(BalloonSaga)]);
}

const store = configureStore({
  reducer: {
    BalloonReducer,
    DrawerReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
