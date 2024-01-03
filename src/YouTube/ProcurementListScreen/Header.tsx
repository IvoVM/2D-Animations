import { View, StyleSheet, Animated, Text } from "react-native";
import { Svg, Path } from "react-native-svg";

interface HeaderProps {
  scrollY: Animated.Value;
}

export const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const HeaderTranslate = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 40],
    extrapolate: "clamp",
  });

  const HeaderHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 60],
    extrapolate: "clamp",
  });

  const iconOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const TitleSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [25, 15],
    extrapolate: "clamp",
  });
  const SubtitleSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [15, 25],
    extrapolate: "clamp",
  });
  const TitleFontWeight = scrollY.interpolate({
    inputRange: [0, 75],
    outputRange: ["800", "300"],
    extrapolate: "clamp",
  });

  const SubtitleFontWeight = scrollY.interpolate({
    inputRange: [0, 75],
    outputRange: ["300", "800"],
    extrapolate: "clamp",
  });

  return (
    <Animated.View style={{ ...styles.icons, height: HeaderHeight }}>
      <View>
        <Animated.View style={{ bottom: HeaderTranslate }}>
          <Animated.View style={{ opacity: iconOpacity }}>
            <Svg width="18" height="26" viewBox="0 0 18 26" fill="none">
              <Path
                d="M13 0L0 13L13 26L17.875 21.125L9.75 13L17.875 4.875L13 0Z"
                fill="black"
              />
            </Svg>
          </Animated.View>

          <Animated.Text
            style={{
              fontSize: TitleSize,
              marginTop: 2,
              fontWeight: TitleFontWeight,
            }}
          >
            Procurements
          </Animated.Text>

          <Animated.Text
            style={{
              fontSize: SubtitleSize,
              fontWeight: SubtitleFontWeight,
            }}
          >
            Almonds
          </Animated.Text>
        </Animated.View>
      </View>
      <Svg width={27} height={27} viewBox="0 0 27 27" fill="none">
        <Path
          d="M10.125 0V10.125H0V16.875H10.125V27H16.875V16.875H27V10.125H16.875V0H10.125Z"
          fill="black"
        />
      </Svg>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "relative",
    backgroundColor: "#fff",
  },
});
