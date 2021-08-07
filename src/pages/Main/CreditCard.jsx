import React, {useMemo} from 'react';
import {Div, Icon, Text} from "react-native-magnus";
import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet} from "react-native";
import chroma from 'chroma-js'
import CardContainer from "./CardContainer";
import theme from "../../core/styles/theme";
import {useAnimatedStyle, withTiming} from "react-native-reanimated";
import AnimatedDiv from "./AnimatedDiv";

const CreditCard = ({animStyle, onPress, scrollY}) => {

    const colors = useMemo(() => {
        const color = chroma(theme.colors.primary)
        return [color.luminance(0.1).css(), color.darken(0.5).css()]
    }, [theme.colors.primary])

    const bottomStyle = useAnimatedStyle(() => {
        if (!scrollY) {
            return {}
        }
        const opened = scrollY.value < 100
        return {
            opacity: withTiming(opened ? 1 : 0, {duration: 300})
        }
    })

    return (
        <CardContainer animStyle={animStyle} scrollY={scrollY}>
            <LinearGradient
                // Background Linear Gradient
                colors={colors}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={[StyleSheet.absoluteFill]}
            />
            <Div
                column
                flex={1}
                justifyContent={"space-between"}
            >
                <Div
                    row
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Div
                        row
                        alignItems={"center"}
                    >
                        <Icon
                            fontFamily={"AntDesign"}
                            name={"creditcard"}
                            color={"white"}
                            fontSize={"md"}
                        />
                        <Text
                            ml={"md"}
                            fontSize={"md"}
                            color={"white"}
                            opacity={0.8}
                            fontFamily={"light"}
                        >
                            FATURA
                        </Text>
                    </Div>
                    <Text
                        color={"white"}
                        fontSize={"3xl"}
                        letterSpacing={2}
                        fontFamily={"bold"}
                    >
                        R$ 1.000,00
                    </Text>
                </Div>

                <AnimatedDiv
                    column
                    style={bottomStyle}
                    position={"absolute"}
                    bottom={0}
                >
                    <Text
                        color={"white"}
                        fontSize={14}
                        fontFamily={"thin"}
                    >
                        MISAEL B SANTOS
                    </Text>
                    <Div h={20}/>
                    <Div
                        row
                        alignItems={"center"}
                    >
                        <Text
                            color={"white"}
                            fontSize={8}
                            letterSpacing={8}
                        >
                            ●●●● ●●●● ●●●●
                        </Text>
                        <Text
                            ml={10}
                            color={"white"}
                            fontSize={"xl"}
                            opacity={0.8}
                            letterSpacing={5}
                        >
                            9137
                        </Text>
                    </Div>
                </AnimatedDiv>
            </Div>
        </CardContainer>
    )
};

export default CreditCard;
