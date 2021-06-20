import React from 'react';
import CreditCard from "./CreditCard";
import {Icon, Text} from "react-native-magnus";
import {Column} from "react-smart-layout";
import {Divider} from "react-native-paper";
import ListItem from "./ListItem";
import SectionContainer from "./SectionContainer";

const CreditCardSection = (props) => {
  return (
    <SectionContainer
      title={"Cartão"}
      card={CreditCard}
      cardHeight={200}
      shortCardHeight={90}
    >
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
        <ListItem
          icon={<Icon
            fontFamily={"MaterialCommunityIcons"}
            color={"white"}
            name={"help"}
            fontSize={"xl"}
          />}
          label={"Relatar problema"}
        />
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
        <ListItem
          icon={<Icon
            fontFamily={"MaterialCommunityIcons"}
            color={"white"}
            name={"help"}
            fontSize={"xl"}
          />}
          label={"Relatar problema"}
        />
      </Column>
    </SectionContainer>
  )
};

export default CreditCardSection;
