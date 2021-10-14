import { scale } from "./scale";
import { Dimensions } from "react-native";

export const very_large_scale=scale(43)
export const extra_large_scale = scale(23)
export const large_scale = scale(19)
export const medium_scale = scale(17)
export const small_scale = scale(13)
export const semi_small_scale =  scale(10);
export const tiny_scale= scale(7)
export const full_width = Dimensions.get('screen').width
export const full_height = Dimensions.get('screen').height
