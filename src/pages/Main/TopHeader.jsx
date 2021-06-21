import React, {useMemo} from 'react';
import {Div, Image, Text} from "react-native-magnus";
import Animated, {Extrapolate, interpolate, useAnimatedStyle, withTiming} from "react-native-reanimated";
import {TouchableOpacity} from "react-native";

const TopHeader = ({scrollY, title}) => {

  const titleWidth = useMemo(() => {
    return title.length * 12
  }, [title])

  const titleStyle = useAnimatedStyle(() => {
    const closed = scrollY.value < 80
    return {
      width: withTiming(closed? 0: titleWidth, {duration: 300}),
      elevation: withTiming(closed? 0: 10, {duration: 300}),
    }
  })
  return (
    <Div
      row
      alignSelf={"center"}
      alignItems={"center"}
      mt={"2xl"}
    >
      <Image
        source={require("../../../assets/icon-white.png")}
        w={60}
        h={50}
        resizeMode={"contain"}
      />
      <Animated.View style={titleStyle}>
        <Text
          ml={"md"}
          color={"white"}
          fontSize={"xl"}
          ellipsizeMode={"clip"}
          numberOfLines={1}
        >
          {title}
        </Text>
      </Animated.View>
    </Div>
  )
};

export default TopHeader;
