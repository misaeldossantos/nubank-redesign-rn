import React from 'react';
import {Icon, Image, Text} from "react-native-magnus";
import CardContainer from "./CardContainer";
import {Divider} from "react-native-paper";
import ListItem from "./ListItem";
import {Column} from "react-smart-layout";
import SectionContainer from "./SectionContainer";
import {Extrapolate, interpolate, useAnimatedStyle} from "react-native-reanimated";

const ProfileSection = (props) => {

  return (
    <SectionContainer
      title={"Misael dos Santos"}
      card={({ scrollY }) => {

        const animStyle = useAnimatedStyle(() => {
          return {
            transform: [{
              scale: interpolate(scrollY.value, [0, 100], [1, 0.9], Extrapolate.CLAMP)
            }],
          }
        })

        return <CardContainer
          h={100}
          bg={"white"}
          alignItems={"center"}
          animStyle={animStyle}
          row
        >
          <Image
            source={{uri: "https://sites.usp.br/comcirp/wp-content/uploads/sites/385/2018/05/qrcode.lmim_.png"}}
            h={60}
            w={60}
          />
          <Column>
            <Text
              color={"gray800"}
            >
              Banco Nu. Pagamentos S.A
            </Text>
            <Text
              color={"gray800"}
            >
              Agência: 0001
            </Text>
            <Text
              color={"gray800"}
            >
              Conta: 0000331900-3
            </Text>
          </Column>
        </CardContainer>
      }}
    >
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
          label={"Me ajuda"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"MaterialCommunityIcons"}
            color={"white"}
            name={"barcode-scan"}
            fontSize={"xl"}
          />}
          label={"Meus dados"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"MaterialCommunityIcons"}
            color={"white"}
            name={"swap-horizontal"}
            fontSize={"xl"}
          />}
          label={"Configurar conta"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"piggy-bank"}
            fontSize={"xl"}
          />}
          label={"Pedir conta PJ"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"donate"}
            fontSize={"xl"}
          />}
          label={"Configuração do app"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"donate"}
            fontSize={"xl"}
          />}
          label={"Serviços"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"donate"}
            fontSize={"xl"}
          />}
          label={"Acessar outra conta"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"donate"}
            fontSize={"xl"}
          />}
          label={"Acessar outra conta"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"donate"}
            fontSize={"xl"}
          />}
          label={"Acessar outra conta"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"donate"}
            fontSize={"xl"}
          />}
          label={"Configuração do app"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"donate"}
            fontSize={"xl"}
          />}
          label={"Serviços"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"donate"}
            fontSize={"xl"}
          />}
          label={"Acessar outra conta"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"donate"}
            fontSize={"xl"}
          />}
          label={"Acessar outra conta"}
        />
        <ListItem
          icon={<Icon
            fontFamily={"FontAwesome5"}
            color={"white"}
            name={"donate"}
            fontSize={"xl"}
          />}
          label={"Acessar outra conta"}
        />
      </Column>
    </SectionContainer>
  )
};

export default ProfileSection;
