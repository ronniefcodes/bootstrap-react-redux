import { TRANSLATION_LOCALE_UPDATE, } from '../actions/ui';
import { getLocalizedResourceStrings, } from '../utils/translations';

const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSLATION_LOCALE_UPDATE:
      return {
        ...state,
        currentLocale: action.locale,
        translations: getLocalizedResourceStrings(action.locale),
      };
    default:
      return state;
  }
};

export default uiReducer;
