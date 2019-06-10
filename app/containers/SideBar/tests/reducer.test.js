import { fromJS } from 'immutable';
import sideBarReducer from '../reducer';

describe('sideBarReducer', () => {
  it('returns the initial state', () => {
    expect(sideBarReducer(undefined, {})).toEqual(fromJS({}));
  });
});
