import { START_GAME } from '../../gameFlow/gameFlowState';
import { take, put, select } from 'redux-saga/effects';
import { messageAction } from '../../Message/messageState';

export const NEW_SOLUTION = 'NEW_SOLUTION';
const getSolutions = state => state.solutions;

export const solutionsReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_SOLUTION:
      return [...state, action.solution];
    case START_GAME:
      return [];
    default:
      return state;
  }
};

export const newSolutionAction = solution => ({
  type: NEW_SOLUTION,
  solution,
});

export const subscribeSolutions = (socket, emit) => {
  socket.on('newSolution', solution => emit(newSolutionAction(solution)));
};


export function* displaySolution() {
  while (true) {
    const { solution } = yield take(NEW_SOLUTION);
    const solutions = yield select(getSolutions);

    yield put(messageAction(
      `${solution.name.toUpperCase()} played a ${solution.solution.length}-letter word (${solutions.length})`,
    ));
  }
}
