import React from 'react';
import { storiesOf } from '@storybook/react';

import TextButton from './TextButton';
storiesOf('<TextButton>', module)
  .add('Default', () => <TextButton/>)
  .add('with Text', () => <TextButton>This a text button</TextButton>);
