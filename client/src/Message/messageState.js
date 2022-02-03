export const MESSAGE = 'MESSAGE';

const messageTopReducer = (state = 'Presents Quirds, a fast game of making words', action) => {
  switch (action.type) {
    case MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export const messageAction = message => ({
  type: MESSAGE,
  message,
});

export default messageTopReducer;
