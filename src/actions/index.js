export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';
export const SET_COLOR_LIST = 'SET_COLOR_LIST';

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE,
});

export const setColorList = colors => ({
  type: SET_COLOR_LIST,
  colors
});
