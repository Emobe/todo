import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import AddTodo from '../NewTodo/NewTodo'



storiesOf('Add Todo', module)
  .add('default', () => (
		<AddTodo />
  ))
