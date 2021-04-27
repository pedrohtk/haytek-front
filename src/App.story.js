import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import App from './App';

storiesOf('App example', module)
  .add('basic render', () => (
    <App />
  ))
  .add('render app with old props', () => (
    <App
      someProp='123'
      anotherProp='abc'
    />
  ))
  .add('render app with new props', () => (
    <App
      someProp='456'
      anotherPro='anotherPro'
      buttonFunction={action('button clicked')}
    />
  ))
