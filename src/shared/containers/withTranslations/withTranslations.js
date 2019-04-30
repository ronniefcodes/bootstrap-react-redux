import React from 'react';
import { connect, } from 'react-redux';
import { compose, } from 'redux';

const TranslationsProvider = WrappedComponent => props => {
  return (<WrappedComponent {...props} />);
};

const withTranslations = compose(
  connect(
    state => ({
      translate: key => {
        const translations = state.ui ? {
          ...state.ui.translations,
        } : {};

        return translations[key] || key;
      },
    })
  ),
  TranslationsProvider
);

export default withTranslations;
