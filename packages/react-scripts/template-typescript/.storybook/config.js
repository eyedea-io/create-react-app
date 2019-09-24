import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { SmashingThemeProvider } from '@smashing/theme';
import { RootStoreContext, store } from '@app/store';
import { theme } from '@app/themes/theme';
import Styles from '@app/styles';

addDecorator(story => (
  <SmashingThemeProvider theme={theme}>
    <RootStoreContext.Provider value={store}>
      <Styles />
      {story()}
    </RootStoreContext.Provider>
  </SmashingThemeProvider>
));

configure(require.context('../workspaces', true, /\.stories\.tsx$/), module);
