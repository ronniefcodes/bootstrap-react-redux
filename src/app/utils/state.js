import { getLocalizedResourceStrings, } from './translations';

export const generateInitialState = (config = {}) => {
  const locale = config.locale || 'en';

  return {
    config,
    ui: {
      currentLocale: locale,
      translations: getLocalizedResourceStrings(locale),
    },
  };
}
