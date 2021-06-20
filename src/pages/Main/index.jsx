import React, {useEffect, useRef} from 'react';
import {Div, Icon, Image, Text} from "react-native-magnus";
import {Pressable, StatusBar, View} from "react-native";
import CreditCardSection from "./CreditCardSection";
import NuAccountSection from "./NuAccountSection";
import {observer, Observer, useLocalObservable} from "mobx-react";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import {reaction} from "mobx";
import ActivitySection from "./ActivitySection";
import ProfileSection from "./ProfileSection";
import ViewPager from '@react-native-community/viewpager';

const Main = (props) => {

  const pagerRef = useRef()

  const tabAnimX = useSharedValue(0)
  const tabAnimWidth = useSharedValue(100)
  const outputXValue = useSharedValue([0, 0, 0, 0])

  const ctrl = useLocalObservable(() => {
    return {
      currentTab: 0,
      tabs: [{
        title: "Cartão",
        icon: () => <Icon
          fontFamily={"AntDesign"}
          name={"creditcard"}
          color={"white"}
          fontSize={"md"}
        />,
        dimensions: {
          width: 150
        },
        selected: true
      }, {
        title: "Conta",
        icon: () => <Icon
          fontFamily={"AntDesign"}
          name={"wallet"}
          color={"white"}
          fontSize={"xl"}
        />,
        dimensions: {
          width: 150
        },
      },
        {
          title: "Atividade",
          icon: () => <Icon
            fontFamily={"MaterialCommunityIcons"}
            name={"lightning-bolt"}
            color={"white"}
            fontSize={"xl"}
          />,
          dimensions: {
            width: 150
          },
        }, {
          title: "Perfil",
          icon: () => <Icon
            fontFamily={"Feather"}
            name={"user"}
            color={"white"}
            fontSize={"xl"}
          />,
          dimensions: {
            width: 150
          }
        }]
    }
  })

  const numberOfTabs = ctrl.tabs.length

  function calculateWidthValue(value) {
    let nextTab = ctrl.currentTab
    const perc = value - ctrl.currentTab
    if (perc > 0.4 && perc < 0.8) {
      tabAnimWidth.value = 60
      return
    }
    if (perc > 0.5) {
      nextTab++
    }
    const d = ctrl.tabs[nextTab].dimensions || {}
    tabAnimWidth.value = d.width
  }

  useAnimatedReaction(() => tabAnimX.value, () => {
    runOnJS(calculateWidthValue)(tabAnimX.value)
  })

  // useEffect(() => {
  //   return reaction(() => ctrl.currentTab, tab => {
  //     const d = getDimensionFromIndex(tab)
  //     tabAnimX.value = d.x
  //   })
  // }, [])

  useEffect(() => {
    return reaction(() => ctrl.tabs.map(tab => tab.dimensions.x || 0), (value) => {
      outputXValue.value = value
    })
  }, [])

  const tabAnimStyle = useAnimatedStyle(() => {
    return {
      height: 50,
      borderRadius: 10,
      overflow: "hidden",
      width: withTiming(tabAnimWidth.value, {duration: 300}),
      position: "absolute",
      top: 15,
      left: interpolate(tabAnimX.value, [0, 1, 2, 3], outputXValue.value),
    }
  })

  return (
    <Div
      bg={"primary"}
      flex={1}
    >
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={"transparent"}
      />
      <Div
        bg={"primary"}
        flex={1}
      >
        <ViewPager
          ref={pagerRef}
          style={{flex: 1, flexGrow: 1}}
          initialPage={0}
          onPageScroll={ev => {
            tabAnimX.value = ev.nativeEvent.position + ev.nativeEvent.offset
          }}
          onPageSelected={ev => {
            ctrl.currentTab = ev.nativeEvent.position
          }}
        >
          <View>
            <CreditCardSection/>
          </View>
          <View>
            <NuAccountSection/>
          </View>
          <View>
            <ActivitySection/>
          </View>
          <View>
            <ProfileSection/>
          </View>
        </ViewPager>

      </Div>
      <Div
        p={"xl"}
        justifyContent={"space-evenly"}
        row
      >
        <Animated.View
          style={tabAnimStyle}
        >
          <Div
            flex={1}
            bg={"primary500"}
          />
        </Animated.View>

        {ctrl.tabs.map((tab, index) => {
          return <Observer key={tab.title}>
            {() => {
              return <TabItem
                {...tab}
                icon={tab.icon()}
                onPress={() => {
                  pagerRef.current.setPage(index)
                }}
                onLayout={ev => {
                  tab.dimensions.x = ev.nativeEvent.layout.x
                }}
                widthAnim={tabAnimWidth}
                selected={ctrl.currentTab === index}
              />
            }}
          </Observer>
        })}
      </Div>
    </Div>
  )
};

function TabItem({icon, title, widthAnim, selected, onPress, onLayout, ...props}) {

  const style = useAnimatedStyle(() => {
    return {
      overflow: "hidden",
      alignItems: "center",
      width: withTiming(selected ? widthAnim.value : 60, {duration: 300}),
    }
  })

  return <Animated.View style={style} onLayout={onLayout}>
    <Pressable onPress={onPress}>
      <Div
        px={"xl"}
        py={"md"}
        row
        {...props}
      >
        {icon}
        <Text
          ml={"md"}
          color={"white"}
          fontSize={14}
          numberOfLines={1}
        >
          {title}
        </Text>
      </Div>
    </Pressable>
  </Animated.View>
}

export default observer(Main);
