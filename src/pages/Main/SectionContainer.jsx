import React from 'react';
import {Div} from "react-native-magnus";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue
} from "react-native-reanimated";
import TopHeader from "./TopHeader";

const SectionContainer = ({children, card, title, cardHeight, shortCardHeight = 0}) => {
    const translationY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translationY.value = event.contentOffset.y;
    });

    const cardStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(translationY.value, [0, 200], [cardHeight, shortCardHeight], Extrapolate.CLAMP)
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
                position={"relative"}
            >
                <Card animStyle={cardStyle} scrollY={translationY}/>
            </Div>

            <Animated.ScrollView
                contentContainerStyle={{flexGrow: 1, zIndex: -100}}
                showsVerticalScrollIndicator={false}
                onScroll={scrollHandler}
                fadingEdgeLength={FADING_EDGE_LENGTH}
                overScrollMode={"never"}
            >
                <Div
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

const FADING_EDGE_LENGTH = 50

export default SectionContainer;
