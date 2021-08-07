import React from 'react';
import {Div, Icon, Text} from "react-native-magnus";
import CardContainer from "./CardContainer";
import {Column} from "react-smart-layout";
import {useAnimatedStyle, withTiming} from "react-native-reanimated";
import AnimatedDiv from "./AnimatedDiv";

const CreditCard = ({animStyle, scrollY}) => {

    const bottomStyle = useAnimatedStyle(() => {
        const opened = scrollY.value < 50
        return {
            opacity: withTiming(opened ? 1 : 0, {duration: 300})
        }
    })

    return (
        <CardContainer
            bg={"white"}
            animStyle={animStyle}
        >
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
                            name={"wallet"}
                            color={"gray800"}
                            fontSize={"md"}
                        />
                        <Text
                            ml={"md"}
                            fontSize={"md"}
                            color={"gray800"}
                            opacity={0.8}
                            fontFamily={"light"}
                        >
                            SALDO
                        </Text>
                    </Div>
                    <Text
                        color={"gray800"}
                        fontSize={"3xl"}
                        letterSpacing={2}
                        fontFamily={"bold"}
                    >
                        R$ 1.000,00
                    </Text>
                </Div>

                <AnimatedDiv style={bottomStyle} row justifyContent={"space-between"}>
                    <Column space={5}>
                        <Text
                            color={"gray800"}
                            fontSize={14}
                        >
                            Empréstimo
                        </Text>
                        <Text
                            color={"gray800"}
                            fontSize={"2xl"}
                        >
                            R$ 0,00
                        </Text>
                    </Column>
                    <Column space={5} style={{alignItems: "flex-end"}}>
                        <Text
                            color={"gray800"}
                            fontSize={14}
                        >
                            Guardado
                        </Text>
                        <Text
                            color={"gray800"}
                            fontSize={"2xl"}
                        >
                            R$ 100,00
                        </Text>
                    </Column>
                </AnimatedDiv>
            </Div>
        </CardContainer>
    )
};

export default CreditCard;
