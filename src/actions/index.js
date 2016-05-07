export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';
export const UPDATE_COLORS = 'UPDATE_COLORS';

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE,
});

export const updateColors = (colors) => ({
  type: UPDATE_COLORS,
  colors,
});
