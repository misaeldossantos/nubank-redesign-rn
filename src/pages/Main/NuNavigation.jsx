import React, {useEffect, useRef} from 'react';
import {Div, Text} from "react-native-magnus";
import {Pressable, StatusBar, View} from "react-native";
import {observer, Observer, useLocalObservable} from "mobx-react";
import Animated, {
    runOnJS,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from "react-native-reanimated";
import {reaction} from "mobx";
import ViewPager from '@react-native-community/viewpager';
import AnimatedDiv from "./AnimatedDiv";

const Main = ({tabs}) => {

    const pagerRef = useRef()

    const tabAnimX = useSharedValue(0)
    const tabAnimWidth = useSharedValue(100)
    const outputXValue = useSharedValue([0, 0, 0, 0])

    const ctrl = useLocalObservable(() => {
        return {
            currentTab: 0,
            tabs
        }
    })

    function calculateWidthValue(value) {
        let nextTab = ctrl.currentTab
        const perc = value - ctrl.currentTab
        if (perc > 0.4 && perc < 0.8) {
            tabAnimWidth.value = 60
            return
        }
        if (perc > 0.5) {
            nextTab++
        }
        const d = ctrl.tabs[nextTab].dimensions || {}
        tabAnimWidth.value = d.width
    }

    useAnimatedReaction(() => tabAnimX.value, () => {
        runOnJS(calculateWidthValue)(tabAnimX.value)
    })

    useEffect(() => {
        return reaction(() => ctrl.tabs.map(tab => tab.dimensions.x || 0), (value) => {
            outputXValue.value = value
        })
    }, [])

    return (
        <Div
            bg={"primary"}
            flex={1}
        >
            <StatusBar
                barStyle={"light-content"}
                translucent
                backgroundColor={"transparent"}
            />
            <Div
                bg={"primary"}
                flex={1}
            >
                <ViewPager
                    ref={pagerRef}
                    style={{flex: 1, flexGrow: 1}}
                    initialPage={0}
                    onPageScroll={ev => {
                        tabAnimX.value = (ev.nativeEvent.position + ev.nativeEvent.offset)
                    }}
                    onPageSelected={ev => {
                        const position = ev.nativeEvent.position
                        setTimeout(() => {
                            ctrl.currentTab = position
                        }, 50)
                    }}
                >
                    {ctrl.tabs.map(tab => {
                        const Component = tab.component
                        return <View key={tab.title}>
                            <Component/>
                        </View>
                    })}
                </ViewPager>

            </Div>
            <Div
                p={"xl"}
                justifyContent={"space-evenly"}
                row
            >
                {ctrl.tabs.map((tab, index) => {
                    return <Observer key={tab.title}>
                        {() => {
                            return <TabItem
                                {...tab}
                                icon={tab.icon()}
                                onPress={() => {
                                    pagerRef.current.setPage(index)
                                }}
                                onLayout={ev => {
                                    tab.dimensions.x = ev.nativeEvent.layout.x
                                }}
                                widthAnim={tabAnimWidth}
                                selected={ctrl.currentTab === index}
                            />
                        }}
                    </Observer>
                })}
            </Div>
        </Div>
    )
};

function TabItem({icon, title, widthAnim, selected, onPress, onLayout, ...props}) {

    const style = useAnimatedStyle(() => {
        const width = withTiming(selected ? widthAnim.value : 60, {duration: 300})
        return {
            overflow: "hidden",
            alignItems: "center",
            position: "relative",
            width
        }
    })

    const blurStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(selected ? 1 : 0, {duration: 300})
        }
    })

    return <Animated.View style={style} onLayout={onLayout}>
        <Pressable onPress={onPress}>
            <Div
                px={"xl"}
                py={"md"}
                row
                rounded={"2xl"}
                overflow={"hidden"}
                {...props}
            >
                <AnimatedDiv
                    style={blurStyle}
                    position={"absolute"}
                    top={0}
                    right={0}
                    left={0}
                    bottom={0}
                    bg={"primary500"}
                />
                {icon}
                <Text
                    ml={"md"}
                    color={"white"}
                    fontSize={14}
                    numberOfLines={1}
                >
                    {title}
                </Text>
            </Div>
        </Pressable>
    </Animated.View>
}

export default observer(Main);
