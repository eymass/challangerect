import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authProvider state domain
 */

const selectAuthProviderDomain = state =>
  state.get('authProvider', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthProvider
 */

const makeSelectAuthProvider = () =>
  createSelector(selectAuthProviderDomain, substate => substate.toJS());

const makeSelectIsAuthenticated = () =>
  createSelector(selectAuthProviderDomain, substate =>
    substate.get('isAuthenticated'),
  );

const makeSelectUseData = () =>
  createSelector(selectAuthProviderDomain, substate =>
    substate.get('userData'),
  );

const makeSelectError = () =>
  createSelector(selectAuthProviderDomain, substate => substate.get('error'));

export default makeSelectAuthProvider;
export {
  selectAuthProviderDomain,
  makeSelectIsAuthenticated,
  makeSelectError,
  makeSelectUseData,
};
