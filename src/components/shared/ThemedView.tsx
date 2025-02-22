import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '../../hooks/useThemeColor';
import { baseShadow } from '../../assets/styles/shadow';
import { baseRadius } from '../../assets/styles/radius';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  shadow?: boolean;
  radius?: boolean;
};

export function ThemedView({ style, shadow, radius, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style, shadow && baseShadow, radius && baseRadius ]} {...otherProps} />;
}
