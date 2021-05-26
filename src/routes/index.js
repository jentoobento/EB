import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';

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
    </Scene>
  </Stack>
);

export default Index;
