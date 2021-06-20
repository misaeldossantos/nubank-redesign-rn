import React, {useMemo} from 'react';
import {Div, Icon, Text, useTheme} from "react-native-magnus";
import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet} from "react-native";
import theme from "./src/core/styles/theme";
import chroma from 'chroma-js'

const Card = (props) => {

  const colors = useMemo(() => {
    const color = chroma(theme.colors.primary)
    return [color.luminance(0.1).css(), color.darken(0.5).css()]
  }, [theme.colors.primary])

  return (
    <Div
      p={"xl"}
      rounded={"xl"}
      overflow={"hidden"}
      shadow={"md"}
      h={210}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[StyleSheet.absoluteFill]}
      />
      <Div
        column
        flex={1}
        justifyContent={"space-between"}
      >
        <Div
          row
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Div
            row
            alignItems={"center"}
          >
            <Icon
              fontFamily={"AntDesign"}
              name={"creditcard"}
              color={"white"}
              fontSize={"md"}
            />
            <Text
              ml={"md"}
              fontSize={"md"}
              color={"white"}
              opacity={0.8}
              fontFamily={"light"}
            >
              FATURA
            </Text>
          </Div>
          <Text
            color={"white"}
            fontSize={"3xl"}
            letterSpacing={2}
            fontFamily={"bold"}
          >
            R$ 1.742,36
          </Text>
        </Div>

        <Div column>
          <Text
            color={"white"}
            fontSize={14}
            fontFamily={"thin"}
          >
            MISAEL B SANTOS
          </Text>
          <Div h={20}/>
          <Div
            row
            alignItems={"center"}
          >
            <Text
              color={"white"}
              fontSize={8}
              letterSpacing={8}
            >
              ●●●● ●●●● ●●●●
            </Text>
            <Text
              ml={10}
              color={"white"}
              fontSize={"xl"}
              opacity={0.8}
              letterSpacing={5}
            >
              9137
            </Text>
          </Div>
        </Div>
      </Div>
    </Div>
  )
};

export default Card;
