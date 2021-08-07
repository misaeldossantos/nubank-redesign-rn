import React from 'react';
import {Div, Text} from "react-native-magnus";
import {
    Extrapolate,
    interpolate,
    runOnJS,
    useAnimatedReaction,
    useDerivedValue,
    useSharedValue
} from "react-native-reanimated";
import {observer} from "mobx-react";
import moneyFormatter from "../../core/utils/moneyFormatter";
import LimitBar from "./LimitBar";
import Footer from "./Footer";
import Header from "./Header";
import useAdjustLimitCtrl from "./useAdjustLimitCtrl";
import AvailableRange from "./AvailableRange";
import UsedRange from "./UsedRange";
import AdjustedRange from "./AdjustedRange";

const AdjustLimitPage = (props) => {

    const limitAmount = 8000
    const usedAmount = 1000

    const ctrl = useAdjustLimitCtrl({limitAmount, usedAmount})

    const y = useSharedValue(ctrl.initialYValue);

    const adjustedPerc = useDerivedValue(() => {
        return interpolate(y.value, [0, -400], [ctrl.usedPerc, 100], Extrapolate.CLAMP)
    });

    useAnimatedReaction(() => adjustedPerc.value, value => {
        runOnJS(ctrl.setAdjustedPerc)(value)
    })

    return (
        <Div
            bg={"primary"}
            flex={1}
            justifyContent={"center"}
        >
            <Header/>

            <Div
                flex={1}
            >
                <Div
                    position={"absolute"}
                    right={0}
                    bottom={0}
                    left={0}
                    top={0}
                    justifyContent={"center"}
                >
                    <Div
                        alignSelf={"flex-end"}
                        position={"absolute"}
                        top={"3%"}
                        px={"lg"}
                    >
                        <Text
                            color={"white"}
                            fontSize={"2xl"}
                        >
                            {moneyFormatter(limitAmount)}
                        </Text>
                    </Div>
                    <Div
                        h={"80%"}
                        justifyContent={"flex-end"}
                    >
                        <AdjustedRange
                            ctrl={ctrl}
                        />

                        <AvailableRange
                            adjustedPerc={adjustedPerc}
                            ctrl={ctrl}
                        />

                        <UsedRange
                            usedAmount={usedAmount}
                            ctrl={ctrl}
                        />
                    </Div>
                </Div>

                <LimitBar
                    adjustedPerc={adjustedPerc}
                    usedPerc={ctrl.usedPerc}
                    y={y}
                />
            </Div>

            <Footer ctrl={ctrl}/>
        </Div>
    )
};

export default observer(AdjustLimitPage);
