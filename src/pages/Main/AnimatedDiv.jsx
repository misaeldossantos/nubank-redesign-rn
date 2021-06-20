import {Div} from "react-native-magnus";
import React, {Component} from "react";
import Animated from 'react-native-reanimated'

class BaseDiv extends Component {
  render() {
    return <Div {...this.props} />
  }
}

export default Animated.createAnimatedComponent(BaseDiv)
