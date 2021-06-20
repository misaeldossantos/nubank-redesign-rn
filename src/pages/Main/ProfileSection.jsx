import React from 'react';
import {Div, Icon, Image, Text} from "react-native-magnus";
import NuAccountCard from "./NuAccountCard";
import CardContainer from "./CardContainer";
import {Divider} from "react-native-paper";
import ListItem from "./ListItem";
import {Column} from "react-smart-layout";

const ProfileSection = (props) => {
  return (
    <Div
      flex={1}
      p={"xl"}
    >
      <CardContainer
        h={100}
        bg={"white"}
        alignItems={"center"}
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
      </Column>
    </Div>
  )
};

function RightItem({price, date}) {
  return <Column space={5} style={{ alignItems: "flex-end" }}>
    <Text color={"white"} fontFamily={"light"} fontSize={"xl"}>{price}</Text>
    <Text color={"white"} fontFamily={'thin'} fontSize={"md"}>{date}</Text>
  </Column>
}

export default ProfileSection;
