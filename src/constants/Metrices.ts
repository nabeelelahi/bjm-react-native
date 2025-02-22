import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const WIDTH = (percentage: number) => (width * percentage) / 100;
export const HEIGHT = (percentage: number) => (height * percentage) / 100;