import React, { useEffect } from "react";
import { View, Animated, Easing, StyleSheet } from "react-native";

export const RotatingLogo = ({
  duration = 1000,
  rotationGrades = ["360deg", "0deg"],
}) => {
  const rotateValue = new Animated.Value(0);

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: duration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    rotateAnimation.start();

    return () => {
      rotateAnimation.stop();
    };
  }, [rotateValue]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: rotationGrades,
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, { transform: [{ rotate }] }]}
        source={require("./storewise-logo-cut.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
