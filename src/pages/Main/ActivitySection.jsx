import React from 'react';
import {Div, Icon, Text} from "react-native-magnus";
import CardContainer from "./CardContainer";
import {Divider} from "react-native-paper";
import ListItem from "./ListItem";
import {Column} from "react-smart-layout";
import SectionContainer from "./SectionContainer";

const ActivitySection = (props) => {
    return (
        <SectionContainer
            title={"Sua atividade"}
            card={() => <CardContainer
                h={65}
                p={0}
                bg={"white"}
                row
            >
                <Div bg={"gray200"} flex={1} alignItems={"center"} row justifyContent={"center"}>
                    <Text color={"gray800"} fontSize={"xl"} textAlign={"center"}>
                        Todas
                    </Text>
                </Div>
                <Div flex={1} alignItems={"center"} row justifyContent={"center"}>
                    <Text color={"gray800"} fontSize={"xl"} textAlign={"center"}>
                        Cartão
                    </Text>
                </Div>
                <Div flex={1} alignItems={"center"} row justifyContent={"center"}>
                    <Text color={"gray800"} fontSize={"xl"} textAlign={"center"}>
                        Conta
                    </Text>
                </Div>
            </CardContainer>}
        >
            <Column
                space={20}
                divider={<Divider/>}
            >
                <ListItem
                    icon={<Icon
                        fontFamily={"Entypo"}
                        color={"white"}
                        name={"video"}
                        fontSize={"xl"}
                    />}
                    label={"Netflix"}
                    description={"Compra no crédito"}
                    right={<RightItem price={"R$ 41,00"} date={"Hoje, 8h"}/>}
                />

                <ListItem
                    icon={<Icon
                        fontFamily={"FontAwesome5"}
                        color={"white"}
                        name={"piggy-bank"}
                        fontSize={"xl"}
                    />}
                    label={"Depósito"}
                    description={"Crédito em conta"}
                    right={<RightItem price={"R$ 100"} date={"Ontem, 19h"}/>}
                />

                <ListItem
                    icon={<Icon
                        fontFamily={"AntDesign"}
                        color={"white"}
                        name={"creditcard"}
                        fontSize={"xl"}
                    />}
                    label={"Pagamento da fatura"}
                    description={"Limite liberado"}
                    right={<RightItem price={"R$ 900"} date={"16 jun, 19h"}/>}
                />

                <ListItem
                    icon={<Icon
                        fontFamily={"AntDesign"}
                        color={"white"}
                        name={"creditcard"}
                        fontSize={"xl"}
                    />}
                    label={"Fatura gerada"}
                    description={"Fechamento de ciclo"}
                    right={<RightItem price={"R$ 900"} date={"15 jun, 19h"}/>}
                />

                <ListItem
                    icon={<Icon
                        fontFamily={"AntDesign"}
                        color={"white"}
                        name={"car"}
                        fontSize={"xl"}
                    />}
                    label={"Uber"}
                    description={"Compra no crédito"}
                    right={<RightItem price={"R$ 20"} date={"11 jun, 19h"}/>}
                />
                <ListItem
                    icon={<Icon
                        fontFamily={"Entypo"}
                        color={"white"}
                        name={"video"}
                        fontSize={"xl"}
                    />}
                    label={"Netflix"}
                    description={"Compra no crédito"}
                    right={<RightItem price={"R$ 41,00"} date={"Hoje, 8h"}/>}
                />

                <ListItem
                    icon={<Icon
                        fontFamily={"FontAwesome5"}
                        color={"white"}
                        name={"piggy-bank"}
                        fontSize={"xl"}
                    />}
                    label={"Depósito"}
                    description={"Crédito em conta"}
                    right={<RightItem price={"R$ 100"} date={"Ontem, 19h"}/>}
                />

                <ListItem
                    icon={<Icon
                        fontFamily={"AntDesign"}
                        color={"white"}
                        name={"creditcard"}
                        fontSize={"xl"}
                    />}
                    label={"Pagamento da fatura"}
                    description={"Limite liberado"}
                    right={<RightItem price={"R$ 900"} date={"16 jun, 19h"}/>}
                />

                <ListItem
                    icon={<Icon
                        fontFamily={"AntDesign"}
                        color={"white"}
                        name={"creditcard"}
                        fontSize={"xl"}
                    />}
                    label={"Fatura gerada"}
                    description={"Fechamento de ciclo"}
                    right={<RightItem price={"R$ 900"} date={"15 jun, 19h"}/>}
                />

                <ListItem
                    icon={<Icon
                        fontFamily={"AntDesign"}
                        color={"white"}
                        name={"car"}
                        fontSize={"xl"}
                    />}
                    label={"Uber"}
                    description={"Compra no crédito"}
                    right={<RightItem price={"R$ 20"} date={"11 jun, 19h"}/>}
                />
            </Column>
        </SectionContainer>
    )
};

function RightItem({price, date}) {
    return <Column space={5} style={{alignItems: "flex-end"}}>
        <Text color={"white"} fontFamily={"light"} fontSize={"xl"}>{price}</Text>
        <Text color={"white"} fontFamily={'thin'} fontSize={"md"}>{date}</Text>
    </Column>
}

export default ActivitySection;
