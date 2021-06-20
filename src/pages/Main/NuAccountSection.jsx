import React from 'react';
import {Div, Icon} from "react-native-magnus";
import NuAccountCard from "./NuAccountCard";
import {Column} from "react-smart-layout";
import {Divider} from "react-native-paper";
import ListItem from "./ListItem";

const CreditCardSection = (props) => {
  return (
    <Div
      flex={1}
      p={"xl"}
    >
      <NuAccountCard/>
      <Div h={30}/>
      <Column
        space={20}
        divider={<Divider/>}
      >
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"coins"}
            fontSize={"xl"}
          />}
          label={"Depositar"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"MaterialCommunityIcons"}
            color={"white"}
            name={"barcode-scan"}
            fontSize={"xl"}
          />}
          label={"Pagar"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"MaterialCommunityIcons"}
            color={"white"}
            name={"swap-horizontal"}
            fontSize={"xl"}
          />}
          label={"Transferir"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"piggy-bank"}
            fontSize={"xl"}
          />}
          label={"Guardar dinheiro"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"donate"}
            fontSize={"xl"}
          />}
          label={"Empréstimo"}
        />
      </Column>
    </Div>
  )
};

export default CreditCardSection;
