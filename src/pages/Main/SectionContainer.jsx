import React from 'react';
import {Div} from "react-native-magnus";
import Animated, {
 useAnimatedScrollHandler,
 useAnimatedStyle,
 useSharedValue,
 withTiming
} from "react-native-reanimated";
import TopHeader from "./TopHeader";

const SectionContainer = ({ children, card, title, cardHeight, shortCardHeight = 0}) => {
 const translationY = useSharedValue(0);

 const scrollHandler = useAnimatedScrollHandler((event) => {
  translationY.value = event.contentOffset.y;
 });

 const cardStyle = useAnimatedStyle(() => {
  const closed = translationY.value >= 50? 1: 0
  return {
   position: "absolute",
   right: 0,
   left: 0,
   overflow: 'hidden',
   height: withTiming(closed === 1? shortCardHeight: cardHeight, { duration: 300 })
   // transform: [{
   //  scale: interpolate(translationY.value, [0, 300], [1, 0.9], Extrapolate.CLAMP)
   // }],
  }
 })

 const scrollStyle = useAnimatedStyle(() => {
  return {
   marginTop: shortCardHeight,
   paddingTop: cardHeight - shortCardHeight? shortCardHeight: 0
  }
 })

 const Card = card

 return (
   <Div
     flex={1}
     position={"relative"}
   >
    <TopHeader
      title={title}
      scrollY={translationY}
    />

     <Div
       m={"xl"}
     >
      <Card animStyle={cardStyle} scrollY={translationY} />
     </Div>

    <Animated.ScrollView
      style={scrollStyle}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      onScroll={scrollHandler}
      fadingEdgeLength={50}
      overScrollMode={"never"}
    >
     <Div
       bg={"primary"}
       zIndex={1000}
       px={"xl"}
       pt={0}
       rounded={"2xl"}
     >
      <Div h={30}/>
      {children}
     </Div>
    </Animated.ScrollView>
   </Div>
 )
};

export default SectionContainer;
