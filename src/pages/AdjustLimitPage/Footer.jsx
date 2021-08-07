import React from 'react'
import {Button, Div, Icon, Text} from "react-native-magnus";
import {Observer} from "mobx-react";

function Footer({ ctrl }) {
    return <Div
        px={"xl"}
        pb={"xl"}
    >
        <Button
            block
            bg={"primary"}
            mb={"lg"}
        >
            PEDIR NOVO LIMITE MÁXIMO
        </Button>

        <Observer>
            {() => {
                return <Button
                    block
                    disabled={ctrl.initialAdjustedAmount === ctrl.adjustedAmount}
                    bg={"primary500"}
                    suffix={<Icon name="check" pr={"md"} fontSize={"lg"} color="white"/>}
                >
                    <Text
                        flex={1}
                        textAlign={"center"}
                        color={"white"}
                        fontSize={"lg"}
                    >
                        AJUSTAR LIMITE
                    </Text>
                </Button>
            }}
        </Observer>
    </Div>
}

export default Footer