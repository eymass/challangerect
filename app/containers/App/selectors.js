import { createSelector } from 'reselect';

const selectRouter = state => state.get('router');

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const selectAppDomain = state => state.get('app');

const makeSelectTheme = () =>
  createSelector(selectAppDomain, state => state.get('theme').toJS());

export { makeSelectLocation, makeSelectTheme };
