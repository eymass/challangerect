/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, LOGIN_FIELD_CHANGE } from './constants';

export const initialState = fromJS({
  username: '',
  password: '',
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_FIELD_CHANGE: {
      if (action.fieldName === 'password') {
        return state.set('password', action.value);
      }
      return state.set('username', action.value);
    }
    default:
      return state;
  }
}

export default loginPageReducer;
