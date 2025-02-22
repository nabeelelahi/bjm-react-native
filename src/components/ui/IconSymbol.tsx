import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";

// Add your MaterialIcons mappings here.
const MAPPING = {
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
} as const;

export type IconSymbolName = keyof typeof MAPPING;

interface IconSymbolProps {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
}

/**
 * An icon component that ensures consistent icons across platforms using react-native-vector-icons.
 *
 * Icon `name`s are based on a custom mapping from SF Symbols to MaterialIcons.
 */
export function IconSymbol({ name, size = 24, color, style }: IconSymbolProps) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
