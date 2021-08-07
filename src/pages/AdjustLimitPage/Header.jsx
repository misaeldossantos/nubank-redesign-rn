import React from 'react'
import {Div, Icon, Text} from "react-native-magnus";
import {Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";

function Header(props) {

    const navigation = useNavigation()

    return <Div
        mb={'2xl'}
    >
        <Div
            row
            pl={'xl'}
            pt={50}
            alignItems={"center"}
        >
            <Pressable onPress={navigation.goBack}>
                <Icon
                    name={'left'}
                    fontFamily={'AntDesign'}
                    fontSize={"xl"}
                    color={'white'}
                />
            </Pressable>
            <Div
                alignItems={'center'}
                justifyContent={'center'}
                flex={1}
                mr={'2xl'}
            >
                <Text
                    fontSize={'2xl'}
                    color={"white"}
                    fontFamily={"regular"}
                >
                    Ajustar limite
                </Text>
            </Div>
        </Div>
    </Div>
}

export default Header