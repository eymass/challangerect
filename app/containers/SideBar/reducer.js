/*
 *
 * SideBar reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS({
  sideBarButtons: [
    {
      id: 1,
      label: 'All Clients',
      role: 'admin',
    },
    {
      id: 2,
      label: 'All Transactions',
      role: 'user',
    },
  ],
});

function sideBarReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default sideBarReducer;
