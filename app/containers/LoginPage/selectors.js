import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.get('loginPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(selectLoginPageDomain, substate => substate.toJS());

const makeSelectLoginPagePassword = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('password'));

const makeSelectLoginPageUsername = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('username'));

export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  makeSelectLoginPagePassword,
  makeSelectLoginPageUsername,
};
