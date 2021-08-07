import React from 'react'
import {Div, Text} from "react-native-magnus";
import {Observer} from "mobx-react";
import moneyFormatter from "../../core/utils/moneyFormatter";

function AdjustedRange({ ctrl }) {
    return <Div
        column
        p={"xl"}
    >
        <Text
            color={"white"}
        >
            LIMITE AJUSTADO
        </Text>
        <Observer>
            {() => {
                return <Text
                    color={ctrl.adjustAmountIsLimit ? "green300" : "white"}
                    fontSize={"3xl"}
                >
                    {moneyFormatter(ctrl.adjustedAmount)}
                </Text>
            }}
        </Observer>
    </Div>
}

export default AdjustedRange