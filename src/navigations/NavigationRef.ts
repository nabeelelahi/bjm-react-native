import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: never) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...([name, params] as never));
  }
}
