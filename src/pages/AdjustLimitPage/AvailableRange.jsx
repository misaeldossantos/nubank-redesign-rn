import React from 'react'
import {Observer} from "mobx-react";
import AnimatedDiv from "../Main/AnimatedDiv";
import {Text} from "react-native-magnus";
import moneyFormatter from "../../core/utils/moneyFormatter";
import useLimitPercentageStyle from "./useLimitPercentageStyle";
import {Extrapolate, interpolate, useAnimatedStyle} from "react-native-reanimated";

function AvailableRange({ adjustedPerc, ctrl }) {
    const bgLimitStyle = useLimitPercentageStyle(adjustedPerc)

    const availableStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: interpolate(adjustedPerc.value, [ctrl.usedPerc + 25, ctrl.usedPerc], [0, 130], Extrapolate.CLAMP)
            }]
        }
    })

    return <AnimatedDiv
        style={bgLimitStyle}
        bg={"primary500"}
        w={"100%"}
        justifyContent={"flex-end"}
    >

        <Observer>
            {() => {
                return <AnimatedDiv
                    style={availableStyle}
                    column
                    p={"xl"}
                    pb={40}
                    mb={ctrl.usedPerc + "%"}
                >
                    <Text
                        color={"green300"}
                    >
                        DISPONÍVEL
                    </Text>
                    <Observer>
                        {() => {
                            return <Text
                                color={"white"}
                                fontSize={"3xl"}
                            >
                                {moneyFormatter(ctrl.availableAmount)}
                            </Text>
                        }}
                    </Observer>
                </AnimatedDiv>
            }}
        </Observer>
    </AnimatedDiv>
}

export default AvailableRange