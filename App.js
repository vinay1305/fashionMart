import 'react-native-gesture-handler';
//dont remove above import in any case

import React, {useEffect} from 'react';

import {LogBox} from 'react-native';
import MyStack from './Navigation/MyStack';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
    "EventEmitter.removeListener('didUpdateDimensions', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`."
  
]);

export default function App() {
  
  return <MyStack />;
}
