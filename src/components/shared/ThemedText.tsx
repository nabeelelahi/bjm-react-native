import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/src/hooks/useThemeColor';
import { Colors } from '@/src/constants/Colors';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  title: {
    fontSize: 30,
    lineHeight: 30,
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: Colors.light.primary,
    fontFamily: 'Poppins-Regular',
  },
});
