export const TRANSLATION_LOCALE_UPDATE = 'TRANSLATION_LOCALE_UPDATE';

export function updatedTranslationsLocale(locale) {
  return {
    type: TRANSLATION_LOCALE_UPDATE,
    locale,
  };
}
