import React from 'react'
import {Div, Icon, Text} from "react-native-magnus";
import {Column} from "react-smart-layout";

function ListItem({label, icon, description, right}) {
  return <Div
    row
    py={"md"}
    justifyContent={"space-between"}
  >
    <Div
      row
      alignItems={"center"}
      flex={1}
    >
      <Div w={20}>
        {icon}
      </Div>
      <Column style={{flexWrap: "wrap"}}>
        <Text
          ml={10}
          color={"white"}
          fontSize={"xl"}
          numberOfLines={1}
          ellipsizeMode={"tail"}
          fontFamily={"light"}
        >
          {label}
        </Text>
        {description && <Text
          ml={10}
          ellipsizeMode={"tail"}
          numberOfLines={1}
          color={"white"}
          fontFamily={"thin"}
          fontSize={"md"}
        >
          {description}
        </Text>}
      </Column>
    </Div>
    {right? right: <Icon
      fontFamily={"MaterialIcons"}
      color={"white"}
      name={"arrow-forward-ios"}
    />}
  </Div>
}

export default ListItem;
