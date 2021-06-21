import React from 'react';
import CreditCard from "./CreditCard";
import {Icon, Text} from "react-native-magnus";
import {Column} from "react-smart-layout";
import {Divider} from "react-native-paper";
import ListItem from "./ListItem";
import SectionContainer from "./SectionContainer";
import {SharedElement} from "react-navigation-shared-element";
import {useNavigation} from '@react-navigation/native';
import {Pressable} from "react-native";
import {Switch} from 'react-native-paper';

const CreditCardSection = (props) => {

  const navigation = useNavigation()

  return (
    <SectionContainer
      title={"Cartão"}
      card={props => <Pressable onPress={() => {
        navigation.push("CreditCardDetails")
      }}>
        <SharedElement id={"creditCard"}>
          <CreditCard
            {...props}
          />
        </SharedElement>
      </Pressable>}
      cardHeight={200}
      shortCardHeight={70}
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
            fontFamily={"MaterialCommunityIcons"}
            color={"white"}
            name={"block-helper"}
            fontSize={"xl"}
          />}
          right={<Switch />}
          label={"Bloquear cartão"}
        />
      </Column>
    </SectionContainer>
  )
};

export default CreditCardSection;
