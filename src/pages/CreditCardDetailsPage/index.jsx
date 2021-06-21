import React from 'react';
import {Div, Icon} from "react-native-magnus";
import {SharedElement} from "react-navigation-shared-element";
import CreditCard from "../Main/CreditCard";
import {TouchableRipple} from "react-native-paper";

const CreditCardDetailsPage = ({navigation}) => {
  return (
    <Div
      bg={"primary"}
      flex={1}
      p={"xl"}
      justifyContent={"center"}
    >

      <Div
        position={"absolute"}
        top={30}
        left={10}
        bg={"rgba(255, 255, 255, 0.6)"}
        p={"md"}
        m={"md"}
        rounded={"2xl"}
      >
        <TouchableRipple onPress={navigation.goBack}>
          <Icon
            name={"close"}
            fontSize={"2xl"}
            color={"white"}
          />
        </TouchableRipple>
      </Div>
      <SharedElement id={"creditCard"}>
        <CreditCard animStyle={{height: 200, width: "100%"}}/>
      </SharedElement>
    </Div>
  )
};

export default CreditCardDetailsPage;
