/* 
this TabBar navigator is sourced from "https://reactnavigation.org/docs/bottom-tab-navigator/"
*/

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'


// icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear, faSackDollar, faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'

const getIcon = (routeName: any, isFocused: any) => {
  let iconColor = isFocused ? '#3562C7' : '#BBD0FF'

  switch (routeName) {
    case '(home)':
      return <FontAwesomeIcon icon={faSackDollar} size={25} color={iconColor}/>;
    case '(menu)':
      return <FontAwesomeIcon icon={faSquarePollHorizontal} size={25} color={iconColor}/>;
    case 'setting':
      return <FontAwesomeIcon icon={faGear} size={25} color={iconColor}/>;
    default:
      return <FontAwesomeIcon icon={faGear} size={25} color={iconColor}/>;
  }
};

export function TabBar({ state, descriptors, navigation } : BottomTabBarProps) {
  
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
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
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {getIcon(route.name, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 60,

  },

  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})