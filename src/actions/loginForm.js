export const updateLoginForm = (formData) => ({
  type: 'UPDATE_LOGIN_FORM',
  formData,
});

export const resetLoginForm = () => ({
  type: 'RESET_LOGIN_FORM',
});
