// import React, { useRef, useEffect } from "react";
// import { View, StyleSheet, Animated, Easing } from "react-native";

// export const CircleFillAnimation = () => {
//   const circleRadius = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     const fillCircle = () => {
//       Animated.timing(circleRadius, {
//         toValue: 1,
//         duration: 5000,
//         easing: Easing.linear,
//         useNativeDriver: false, 
//       }).start();
//     };

//     fillCircle();
//   }, []);

//   const circleSize = circleRadius.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 200],
//   });

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[styles.circle, { width: circleSize, height: circleSize }]}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   circle: {
//     backgroundColor: "red",
//     borderColor: "black",
//     borderRadius: 100,
//     borderWidth: 2,
//   },
// });

// export default CircleFillAnimation;
