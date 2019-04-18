import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NavBar from '../Component/SingPageNav/NavBar';

storiesOf('NavBar', module).add('NavBar', () => <NavBar />);