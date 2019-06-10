/*
 *
 * AuthProvider actions
 *
 */

import {
  DEFAULT_ACTION,
  AUTHENTICATE,
  AUTHENTICATE_ERROR,
  AUTHENTICATE_SUCCESS,
  LOGOUT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function authenticate() {
  return {
    type: AUTHENTICATE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function authenticateSuccess(response) {
  return {
    response,
    type: AUTHENTICATE_SUCCESS,
  };
}

export function authenticateError(error) {
  return {
    error,
    type: AUTHENTICATE_ERROR,
  };
}
