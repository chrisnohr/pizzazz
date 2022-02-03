import { all } from 'redux-saga/effects';
import socketIO from '../socketIO/socketIO';
import gameSaga from '../gameFlow/gameSaga';
import transition from '../GameDnd/LetterDisplay/transition';


function* rootSaga() {
  yield all([
    transition('quirds '),
    socketIO(),
    gameSaga(),
  ]);
}

export default rootSaga;
