import { fromJS } from 'immutable';
import { DEFAULT_LOCALE, localeData } from 'utils/languageDefaults';
import { getTheme } from './theme';
import { REINITIALIZE_APP, UPDATE_THEME } from './constants';

const defaultFontAndDirection = localeData[DEFAULT_LOCALE];

export const initialState = fromJS({
  theme: getTheme(defaultFontAndDirection),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    // Update Theme
    // ============
    case UPDATE_THEME: {
      const newTheme = getTheme(action);
      return state.set('theme', fromJS(newTheme));
    }
    // REINITIALIZE app
    // ================
    case REINITIALIZE_APP:
      return initialState;
    default:
      return state;
  }
}

export default appReducer;
