import en from '../translations/en';

export const getLocalizedResourceStrings = (locale = 'en') => {
  switch (locale) {
    default:
      return en;
  }
};
