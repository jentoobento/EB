import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';

import { ArticlesForm, ArticlesList, ArticlesSingle } from '../containers';

import Home from '../components/Home/Home';
import ListView from '../components/ListView/ListView';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Stack key="home" title="Sign in to your account">
        <Scene key="home" component={Home} />
      </Stack>
      <Stack key="listView" title="Your items">
        <Scene key="listView" component={ListView} />
      </Stack>

      <Stack
        key="articlesList"
        title="Articles List"
        icon={() => <Icon name="list" {...DefaultProps.icons} />}
        {...DefaultProps.navbarProps}
      >
        <Scene key="articlesList" component={ArticlesList} />
        <Scene key="articlesSingle" component={ArticlesSingle} back />
      </Stack>

      <Stack
        key="form"
        title="Articles Form"
        icon={() => <Icon name="add" {...DefaultProps.icons} />}
        {...DefaultProps.navbarProps}
      >
        <Scene key="form" component={ArticlesForm} />
      </Stack>
    </Scene>
  </Stack>
);

export default Index;
