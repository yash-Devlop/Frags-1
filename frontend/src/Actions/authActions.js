export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

const apiUrl = process.env.REACT_APP_API_URL;

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (data.status === 'ok') {
        dispatch({ type: LOGIN_SUCCESS, payload: data })
      } else {
        dispatch({ type: LOGIN_FAILURE, error: data });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, error: error.message });
    }
  };
};



export const logout = () => {
  return { type: LOGOUT };
};