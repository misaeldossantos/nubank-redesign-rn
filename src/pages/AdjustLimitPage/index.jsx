import React from 'react';
import {Button, Div, Icon, Text} from "react-native-magnus";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import {PanGestureHandler} from "react-native-gesture-handler";
import AnimatedDiv from "../Main/AnimatedDiv";
import {Pressable} from "react-native";
import {observer, Observer, useLocalObservable} from "mobx-react";
import moneyFormatter from "../../core/utils/moneyFormatter";

const AdjustLimitPage = ({navigation}) => {

  const limitAmount = 8000
  const usedAmount = 1000

  const ctrl = useLocalObservable(() => {
    const adjustedPerc = 40;
    return {
      adjustedPerc,
      initialAdjustedAmount: limitAmount * (adjustedPerc / 100),
      usedPerc: (100 * usedAmount) / limitAmount,
      setAdjustedPerc(value) {
        ctrl.adjustedPerc = value
      },
      get adjustedAmount() {
        return limitAmount * (ctrl.adjustedPerc / 100)
      },
      get availableAmount() {
        return ctrl.adjustedAmount - usedAmount
      }
    }
  })

  const y = useSharedValue(0);
  const adjustedPerc = useSharedValue(0);
  const moving = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = y.value;
      moving.value = 1
    },
    onActive: (event, ctx) => {
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      moving.value = 0
    },
  });

  useAnimatedReaction(() => y.value, value => {
    adjustedPerc.value = interpolate(value, [0, -300], [40, 100], Extrapolate.CLAMP)
  })

  useAnimatedReaction(() => adjustedPerc.value, value => {
    runOnJS(ctrl.setAdjustedPerc)(value)
  })

  const wrapperAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        scale: withSpring(moving.value === 1 ? 1.05 : 1)
      }]
    };
  });

  const indicatorStyle = useLimitPercentageStyle(adjustedPerc)
  const bgLimitStyle = useLimitPercentageStyle(adjustedPerc)

  return (
    <Div
      bg={"primary"}
      flex={1}
      justifyContent={"center"}
    >
      <Div
        mb={'2xl'}
      >
        <Div
          row
          pl={'xl'}
          pt={50}
          alignItems={"center"}
        >
          <Pressable onPress={navigation.goBack}>
            <Icon
              name={'left'}
              fontFamily={'AntDesign'}
              fontSize={"xl"}
              color={'white'}
            />
          </Pressable>
          <Div
            alignItems={'center'}
            justifyContent={'center'}
            flex={1}
            mr={'2xl'}
          >
            <Text
              fontSize={'2xl'}
              color={"white"}
              fontFamily={"regular"}
            >
              Ajustar limite
            </Text>
          </Div>
        </Div>
      </Div>

      <Div
        flex={1}
      >
        <Div
          position={"absolute"}
          right={0}
          bottom={0}
          left={0}
          top={0}
          justifyContent={"center"}
        >
          <Div
            alignSelf={"flex-end"}
            position={"absolute"}
            top={"3%"}
            px={"lg"}
          >
            <Text
              color={"white"}
              fontSize={"2xl"}
            >
              {moneyFormatter(limitAmount)}
            </Text>
          </Div>
          <Div
            h={"80%"}
            justifyContent={"flex-end"}
          >
            <Div
              column
              p={"xl"}
            >
              <Text
                color={"white"}
              >
                LIMITE AJUSTADO
              </Text>
              <Observer>
                {() => {
                  return <Text
                    color={"white"}
                    fontSize={"3xl"}
                  >
                    {moneyFormatter(ctrl.adjustedAmount)}
                  </Text>
                }}
              </Observer>
            </Div>
            <AnimatedDiv
              style={bgLimitStyle}
              bg={"primary500"}
              w={"100%"}
              justifyContent={"flex-end"}
            >

              <Div
                column
                p={"xl"}
                pb={40}
                mb={ctrl.usedPerc + "%"}
              >
                <Text
                  color={"green300"}
                >
                  DISPONÍVEL
                </Text>
                <Observer>
                  {() => {
                    return <Text
                      color={"white"}
                      fontSize={"3xl"}
                    >
                      {moneyFormatter(ctrl.availableAmount)}
                    </Text>
                  }}
                </Observer>
              </Div>
            </AnimatedDiv>
            <Div
              h={ctrl.usedPerc + "%"}
              position={"absolute"}
              bottom={0}
              bg={"primary"}
              w={"100%"}
            >
              <Div
                column
                p={"xl"}
                mb={ctrl.usedPerc + "%"}
              >
                <Text
                  color={"red500"}
                >
                  USADO
                </Text>
                <Text
                  color={"white"}
                  fontSize={"3xl"}
                >
                  {moneyFormatter(usedAmount)}
                </Text>
              </Div>
            </Div>
          </Div>
        </Div>

        <Div
          position={"absolute"}
          right={0}
          bottom={0}
          top={0}
          alignItems={"center"}
          justifyContent={"center"}
          px={"xl"}
        >
          <AnimatedDiv
            style={wrapperAnimatedStyle}
            w={70}
            height={"80%"}
            bg={"primary"}
            shadow={"lg"}
            borderRadius={20}
            flexDir={"column"}
            overflow={"hidden"}
          >
            <PanGestureHandler onGestureEvent={gestureHandler}>
              <Animated.View style={{flex: 1, justifyContent: "flex-end"}}>
                <LevelIndicator
                  color={"#8EDFC0"}
                  animStyle={indicatorStyle}
                />
                <LevelIndicator
                  color={"#63CE98"}
                  percentage={ctrl.usedPerc}
                />
              </Animated.View>
            </PanGestureHandler>
          </AnimatedDiv>

        </Div>
      </Div>

      <Div
        px={"xl"}
        pb={"xl"}
      >
        <Button
          block
          bg={"primary"}
          mb={"lg"}
        >
          PEDIR NOVO LIMITE MÁXIMO
        </Button>

        <Observer>
          {() => {
            return <Button
              block
              disabled={ctrl.initialAdjustedAmount === ctrl.adjustedAmount}
              bg={"primary500"}
              suffix={<Icon name="check" pr={"md"} fontSize={"lg"} color="white"/>}
            >
              <Text
                flex={1}
                textAlign={"center"}
                color={"white"}
                fontSize={"lg"}
              >
                AJUSTAR LIMITE
              </Text>
            </Button>
          }}
        </Observer>
      </Div>
    </Div>
  )
};


function useLimitPercentageStyle(adjustedPerc) {
  return useAnimatedStyle(() => {
    return {
      height: adjustedPerc.value + "%"
    };
  });
}

function LevelIndicator(
  {
    color, percentage, animStyle
  }
) {
  return <AnimatedDiv
    bg={color}
    style={animStyle}
    w={"100%"}
    position={"absolute"}
    bottom={0}
    h={`${percentage}%`}
  />
}

export default observer(AdjustLimitPage);
