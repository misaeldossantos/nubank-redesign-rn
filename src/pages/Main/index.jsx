import React, {useMemo} from 'react';
import {Icon} from "react-native-magnus";
import CreditCardSection from "./CreditCardSection";
import NuAccountSection from "./NuAccountSection";
import {observer} from "mobx-react";
import ActivitySection from "./ActivitySection";
import ProfileSection from "./ProfileSection";
import NuNavigation from "./NuNavigation";

const Main = (props) => {

  const tabs = useMemo(() => {
    return [{
      component: CreditCardSection,
      title: "Cartão",
      icon: () => <Icon
        fontFamily={"AntDesign"}
        name={"creditcard"}
        color={"white"}
        fontSize={"2xl"}
      />,
      dimensions: {
        width: 150
      },
      selected: true
    }, {
      component: NuAccountSection,
      title: "Conta",
      icon: () => <Icon
        fontFamily={"AntDesign"}
        name={"wallet"}
        color={"white"}
        fontSize={"2xl"}
      />,
      dimensions: {
        width: 150
      },
    },
      {
        component: ActivitySection,
        title: "Atividade",
        icon: () => <Icon
          fontFamily={"MaterialCommunityIcons"}
          name={"lightning-bolt"}
          color={"white"}
          fontSize={"2xl"}
        />,
        dimensions: {
          width: 150
        },
      }, {
      component: ProfileSection,
      title: "Perfil",
      icon: () => <Icon
        fontFamily={"Feather"}
        name={"user"}
        color={"white"}
        fontSize={"2xl"}
      />,
      dimensions: {
        width: 150
      }
    }]
  }, [])

  return <NuNavigation
    tabs={tabs}
  />
};

export default observer(Main);
