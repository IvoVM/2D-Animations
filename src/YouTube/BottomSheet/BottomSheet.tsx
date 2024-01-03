// import React, { useCallback, useRef } from "react";
// import { View, StyleSheet, Button } from "react-native";
// import {
//   BottomSheetModal,
//   BottomSheetModalProvider,
// } from "@gorhom/bottom-sheet";

// import { Home } from "../Home";
// import { BottomSheetMenu } from "./Menu";

// export const BotomSheet = () => {
//   // ref
//   const bottomSheetRef = useRef<any>(null);

//   // variables
//   const snapPoints = ["90%"];

//   // callbacks
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log("handleSheetChanges", index);
//   }, []);

//   const handlePresentModal = () => {
//     bottomSheetRef.current?.present();
//   };

//   return (
//     <BottomSheetModalProvider>
//       <View style={styles.container}>
//         <Button title="Present Modal" onPress={handlePresentModal} />
//         <BottomSheetModal
//           ref={bottomSheetRef}
//           snapPoints={snapPoints}
//           index={0}
//         >
//           <BottomSheetMenu />
//         </BottomSheetModal>
//       </View>
//     </BottomSheetModalProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: "grey",
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: "center",
//   },
// });
