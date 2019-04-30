import React from 'react';
import classNames from 'classnames';

import './TextButton.scss';

const TextButton = ({
  children,
  className,
  ...others
} = {}) => {
  return (
    <button
      className={classNames('text-button', className)}
      type="button"
      {...others}
    >
      {children}
    </button>
  );
};

export default TextButton;
