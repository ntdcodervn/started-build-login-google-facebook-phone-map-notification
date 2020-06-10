import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import SvgIcon from './../assets/icons/SvgIcon';
import {colors} from './../shared/styleShare';

const BottomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        width: '100%',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const _renderIcon = () => {
          switch (route.name) {
            case 'HomeTab':
              return <SvgIcon name="home" />;
            case 'CartTab':
              return <SvgIcon name="cart" />;
            case 'HistoryOrderTab':
              return <SvgIcon name="search" />;
            case 'NotificationTab':
              return <SvgIcon name="notification" />;
            case 'ProfileTab':
              return <SvgIcon name="cart" />;
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              borderColor: '#e0e0e0',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopWidth: 0.3,
              backgroundColor: isFocused ? colors.primary : '#FFF',
            }}>
            {_renderIcon()}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
