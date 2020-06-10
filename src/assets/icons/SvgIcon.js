//import liraries
import React from 'react';
import {SvgCss} from 'react-native-svg';
import {
  homeIcon,
  cartIcon,
  notificationIcon,
  historyOrderIcon,
  profileIcon,
} from './icons';

// create a component
const SvgIcon = ({name, width, height, color}) => {
  let icon = '';
  switch (name) {
    case 'home':
      icon = homeIcon;
      break;
    case 'cart':
      icon = cartIcon;
      break;
    case 'notification':
      icon = notificationIcon;
      break;
    case 'historyOrder':
      icon = historyOrderIcon;
      break;
    case 'profile':
      icon = profileIcon;
      break;
  }

  return (
    <SvgCss
      xml={icon}
      width={width ? width : 25}
      height={height ? height : 25}
    />
  );
};

//make this component available to the app
export default SvgIcon;
