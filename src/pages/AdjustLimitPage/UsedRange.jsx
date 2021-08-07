import React from 'react'
import {Div, Text} from "react-native-magnus";
import moneyFormatter from "../../core/utils/moneyFormatter";

function UsedRange({ ctrl, usedAmount }) {
    return <Div
        h={ctrl.usedPerc + "%"}
        position={"absolute"}
        bottom={0}
        bg={"primary"}
        w={"100%"}
    >
        <Div
            column
            p={"xl"}
            mb={ctrl.usedPerc + "%"}
        >
            <Text
                color={"red500"}
            >
                USADO
            </Text>
            <Text
                color={"white"}
                fontSize={"3xl"}
            >
                {moneyFormatter(usedAmount)}
            </Text>
        </Div>
    </Div>
}

export default UsedRange