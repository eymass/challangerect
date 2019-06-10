/*
 *
 * AuthProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { getDataFromStorage } from 'utils/cookies';
import isFuture from 'date-fns/is_future';
import {
  AUTHENTICATE,
  AUTHENTICATE_ERROR,
  AUTHENTICATE_SUCCESS,
  DEFAULT_ACTION,
  RESET_APP_STATE,
} from './constants';

// Get user token from storage
const { token, tokenExpiryTime, userData } = getDataFromStorage();
// Check if user is authenticated
const getIsAuthenticated = (_token, _tokenExpiryTime) => {
  if (_token && _tokenExpiryTime) {
    const tryResult = isFuture(Number(_tokenExpiryTime));
    return tryResult;
  }
  return false;
};

export const initialState = fromJS({
  token,
  tokenExpiryTime,
  userData,
  error: null,
  isAuthenticated: getIsAuthenticated(token, tokenExpiryTime),
});

function authProviderReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return state.set('error', null);
    /**
     * ====================
     * Authenticate Success
     * ====================
     */
    case AUTHENTICATE_SUCCESS: {
      const authenticated = getIsAuthenticated(
        action.response.token,
        action.response.tokenExpiryTime,
      );
      return state.withMutations(prevState =>
        prevState
          .set('userData', action.userData)
          .set('error', null)
          .set('token', action.response.token)
          .set('tokenExpiryTime', action.response.tokenExpiryTime)
          .set('isAuthenticated', authenticated),
      );
    }
    /**
     * ====================
     * Authenticate Error
     * ====================
     */
    case AUTHENTICATE_ERROR:
      return state.set('error', action.error.message);
    /**
     * ====================
     * Reset App
     * ====================
     */
    case RESET_APP_STATE:
      return state.withMutations(prevState =>
        prevState
          .set('userData', null)
          .set('error', null)
          .set('username', null)
          .set('token', '')
          .set('tokenExpiryTime', 0)
          .set('isAuthenticated', false),
      );
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default authProviderReducer;
