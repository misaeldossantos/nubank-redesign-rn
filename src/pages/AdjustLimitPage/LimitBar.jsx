import React from 'react'
import AnimatedDiv from "../Main/AnimatedDiv";
import {PanGestureHandler} from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import {Div} from "react-native-magnus";
import useLimitPercentageStyle from "./useLimitPercentageStyle";

function LimitBar({ adjustedPerc, usedPerc, y }) {
    const moving = useSharedValue(0);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = y.value;
            moving.value = 1
        },
        onActive: (event, ctx) => {
            y.value = ctx.startY + event.translationY;
        },
        onEnd: (_) => {
            moving.value = 0
        },
    });

    const wrapperAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                scale: withSpring(moving.value === 1 ? 1.05 : 1)
            }]
        };
    });

    const indicatorStyle = useLimitPercentageStyle(adjustedPerc)

    return <Div
        position={"absolute"}
        right={0}
        bottom={0}
        top={0}
        alignItems={"center"}
        justifyContent={"center"}
        px={"xl"}
    >
        <AnimatedDiv
            style={wrapperAnimatedStyle}
            w={70}
            height={"80%"}
            bg={"primary100"}
            shadow={"lg"}
            borderRadius={20}
            flexDir={"column"}
            overflow={"hidden"}
        >
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={{flex: 1, justifyContent: "flex-end"}}>
                    <LevelIndicator
                        color={"#69c750"}
                        animStyle={indicatorStyle}
                    />
                    <LevelIndicator
                        color={"#f26550"}
                        percentage={usedPerc}
                    />
                </Animated.View>
            </PanGestureHandler>
        </AnimatedDiv>
    </Div>
}

function LevelIndicator({color, percentage, animStyle}) {

    return <AnimatedDiv
        style={animStyle}
        w={"100%"}
        position={"absolute"}
        bg={color}
        bottom={0}
        h={`${percentage}%`}
    />
}


export default LimitBar