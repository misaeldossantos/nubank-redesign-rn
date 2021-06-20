import React from 'react';
import Card from "../../../Card";
import {Div, Icon, ScrollDiv, Text} from "react-native-magnus";
import {Column} from "react-smart-layout";
import {Divider} from "react-native-paper";
import {ScrollView} from "react-native";
import ListItem from "./ListItem";

const CreditCardSection = (props) => {
  return (
    <Div
      flex={1}
      p={"xl"}
    >
      <Card/>
      <Div h={30}/>
      <Column
        space={20}
        divider={<Divider/>}
      >
        <ListItem
          icon={<Icon
            fontFamily={"AntDesign"}
            color={"white"}
            name={"barschart"}
            fontSize={"xl"}
          />}
          label={"Resumo das faturas"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"AntDesign"}
            color={"white"}
            name={"creditcard"}
            fontSize={"xl"}
          />}
          label={"Limite disponível"}
          right={<Text color={"green600"} fontFamily={"bold"}>
            R$ 520,00
          </Text>}
        />
        <ListItem
          icon={<Icon
            fontFamily={"MaterialCommunityIcons"}
            color={"white"}
            name={"barcode-scan"}
            fontSize={"xl"}
          />}
          label={"Pagar fatura"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"Feather"}
            color={"white"}
            name={"credit-card"}
            fontSize={"xl"}
          />}
          label={"Cartão virtual"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"MaterialCommunityIcons"}
            color={"white"}
            name={"history"}
            fontSize={"xl"}
          />}
          label={"Antecipar parcelas"}
        />
      </Column>
    </Div>
  )
};

export default CreditCardSection;
