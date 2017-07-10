export const emailChanged = (text) => ({type: 'email_changed', payload: text});

export const passwordChanged = (text) => ({type: 'password_changed', payload: text});

export const loginFormSubmit = ({email, password}) => ({
  type: 'loginForm_submit',
  payload: {
    email,
    password
  }
});