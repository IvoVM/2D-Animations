// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { Home } from "../Home";
// import {
//   AnimationScreenNames,
//   allScreens,
// } from "../NavigationHelpers/NavigationHelpers";

// const Stack = createStackNavigator();

// const getScreenConfig = (screen: string) => {
//   switch (screen) {
//     case AnimationScreenNames.WAVE_METER:
//     case AnimationScreenNames.BENDING_CIRCLE:
//       return {
//         headerTintColor: "#fff",
//         headerStyle: {
//           backgroundColor: "black",
//         },
//       };
//     case AnimationScreenNames.GRADIENT_CLOCK:
//       return {
//         headerShown: false,
//       };
//     default:
//       return undefined;
//   }
// };

// export const BottomSheetMenu = () => {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator initialRouteName="YouTube Demos">
//         <Stack.Screen name="YouTube Demos" component={Home} />
//         {allScreens.map((screen: any, index: any) => (
//           <Stack.Screen
//             key={index}
//             name={screen.name}
//             component={screen.component}
//             options={getScreenConfig(screen.name)}
//           />
//         ))}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
