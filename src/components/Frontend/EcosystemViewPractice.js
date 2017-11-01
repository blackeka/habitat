import React, { Component } from 'react';
import { View, StyleSheet, Animated, Dimensions, Image, PanResponder } from 'react-native';

export default class EcosystemViewPractice extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pan: new Animated.ValueXY(),
        count: 0
      }
      this.animate = this.animate.bind(this);
      this.panResponder = PanResponder.create({    //Step 2
      onStartShouldSetPanResponder : () => true,
    });
  }

  componentDidMount() {
    setInterval(this.animate, 1000)
  }

  animate() {
    let position = new Animated.ValueXY({x: Math.random() * 350, y:  Math.random() * 500})
      Animated.timing(position, {
				toValue: {x: Math.random() * 350, y: Math.random() * 500},
				duration: Math.random() * 2000 + 500,
				delay: 500
			}).start();
			return (
      <Animated.View style={position.getLayout()}>
				<Image source={ecobuddies[this.props.img][2][1]} style={{borderRadius: 50, width: 60, height: 50}}/>
			</Animated.View>
    )
  }

  render() {
      setInterval(this.animate, 1500);
    return (
      <View>
          {/* {this.animate()} */}
          {/* <Animated.Image
            {...this.panResponder.panHandlers}
            source={toast[2][1]}
            style={[this.state.pan.getLayout(), styles.image]}
          /> */}
          {this.animate()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  },
  square: {
      height: 60,
      width: 60,
      borderWidth: 30,
      borderColor: 'red'
  },
  image: {
    width: 100,
    height: 100
  }
})


const ecobuddies = [
  [
    [0, require("../assets/habit@/starfish-gray.png")],
    [1, require("../assets/habit@/starfish-sm.png")],
    [2, require("../assets/habit@/starfish-md.png")],
    [3, require("../assets/habit@/starfish-lg.png")]
  ],
  [
    [0, require("../assets/habit@/butterfly-gray.png")],
    [1, require("../assets/habit@/butterfly-sm.png")],
    [2, require("../assets/habit@/butterfly-md.png")],
    [3, require("../assets/habit@/butterfly-lg.png")]
  ],
  [
    [0, require("../assets/habit@/ladybug-gray.png")],
    [1, require("../assets/habit@/ladybug-sm.png")],
    [2, require("../assets/habit@/ladybug-md.png")],
    [3, require("../assets/habit@/ladybug-lg.png")]
  ]
]
