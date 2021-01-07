import React, { useRef } from 'react';

import AppNavigator from './AppNavigator';

const NavigationContainer = () => {
  const navRef = useRef();

  return <AppNavigator ref={navRef} />;
};

export default NavigationContainer;
