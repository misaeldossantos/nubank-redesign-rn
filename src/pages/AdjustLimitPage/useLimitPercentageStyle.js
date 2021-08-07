import {useAnimatedStyle} from "react-native-reanimated";

export default function useLimitPercentageStyle(adjustedPerc) {
    return useAnimatedStyle(() => {
        return {
            height: adjustedPerc.value + "%"
        };
    });
}
