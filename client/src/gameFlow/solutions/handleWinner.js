import { delay } from 'redux-saga';
import {
  put, select, call, fork, all,
} from 'redux-saga/effects';
import { getMaxLengthScore, getWinnerSolution } from './findWinner';
import { messageAction } from '../../Message/messageState';
import { lookupAction } from '../../Definitions/definitionsState';
import transition from '../../GameDnd/LetterDisplay/transition';

const getSolutions = state => state.solutions;
export const getValidWords = state => state.gameData.validWords;

function* bestUserWord() {
  const solutions = yield select(getSolutions);
  if (solutions.length) {
    const { name, solution } = getWinnerSolution(solutions);
    const submission_count = solutions.length
    yield all([
      put(messageAction(`Of ${submission_count} submitted, The winner ${name.toUpperCase()} played`)),
      fork(transition, solution),
      put(lookupAction(solution)),
    ]);
  } else {
    yield put(messageAction('No solutions were received'));
  }
}

function* bestWord() {
  const validWords = yield select(getValidWords);
  const bestSolution = getMaxLengthScore(validWords)[0];
  yield all([
    put(lookupAction(bestSolution)),
    put(messageAction('The best possible word was')),
    call(transition, bestSolution),
  ]);
}

function* handleWinner() {
  yield call(bestUserWord);
  yield call(delay, 4000);
  yield call(bestWord);
}

export default handleWinner;
