import { takeLatest, call, select, put } from 'redux-saga/effects';
import { saveDataToStorage, clearDataFromStorage } from 'utils/cookies';
import {
  AUTHENTICATE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_ERROR,
  LOGOUT,
  RESET_APP_STATE,
} from './constants';
import {
  makeSelectLoginPagePassword,
  makeSelectLoginPageUsername,
} from '../LoginPage/selectors';
import { syncAuth } from './AuthSync';

/**
 * Send Authentication request
 * Evaluate response
 * Save authentication data to storage
 * Sync authentication with browser
 *
 * Error handling
 * @function
 */
function* authenticateUser() {
  // prepare request
  const username = yield select(makeSelectLoginPageUsername());
  const password = yield select(makeSelectLoginPagePassword());
  /*  const request = {
    username,
    password,
  }; */
  // post request
  try {
    // const response = yield call(postData, 'login', request);
    let response = {};
    if (username === 'admin' && password === 'admin') {
      response = {
        token: 'CDGfasdas3232323',
        tokenExpiryTime: 1580176000 * 1000,
        role: 'admin',
      };
      yield put({ type: AUTHENTICATE_SUCCESS, response });
      yield call(saveDataToStorage, {
        token: response.token,
        tokenExpiryTime: response.tokenExpiryTime,
      });
      yield call(syncAuth, response);
    }
    if (username === 'redfire' && password === 'redfire') {
      response = {
        token: 'CDGfasdas3232323',
        tokenExpiryTime: 1580176000 * 1000,
        role: 'user',
      };
      yield put({ type: AUTHENTICATE_SUCCESS, response });
      yield call(saveDataToStorage, {
        token: response.token,
        tokenExpiryTime: response.tokenExpiryTime,
      });
      yield call(syncAuth, response);
    }
    if (
      !(username === 'admin' && password === 'admin') &&
      !(username === 'redfire' && password === 'redfire')
    ) {
      throw new Error('WRONG_CREDENTIALS');
    }
  } catch (error) {
    yield put({ type: AUTHENTICATE_ERROR, error });
    yield put({ type: RESET_APP_STATE });
  }
}

/**
 * Logout User
 * @generator
 */
function* logoutUser() {
  yield call(clearDataFromStorage);
  yield put({ type: RESET_APP_STATE });
}

/**
 * Authentication Watcher
 * @watcher
 */
function* authProviderSaga() {
  yield takeLatest(AUTHENTICATE, authenticateUser);
  yield takeLatest(LOGOUT, logoutUser);
}

export default authProviderSaga;
