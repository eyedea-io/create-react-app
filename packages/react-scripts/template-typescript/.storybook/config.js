import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { SmashingThemeProvider } from '@smashing/theme';
import { RootStoreContext } from '@app/utils/use-store';
import { MemoryRouter as Router } from 'react-router-dom';
import { RootStore } from '@app/store';
import Styles from '@app/styles';

addDecorator(story => (
  <SmashingThemeProvider theme={{}}>
    <RootStoreContext.Provider value={RootStore.create()}>
      <Styles />
      <Router>{story()}</Router>
    </RootStoreContext.Provider>
  </SmashingThemeProvider>
));

configure(require.context('../workspaces', true, /\.stories\.tsx$/), module);
