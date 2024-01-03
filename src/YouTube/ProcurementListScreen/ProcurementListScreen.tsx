import { View, Text, Animated } from "react-native";
import { Header } from "./Header";
import { ScrollView } from "react-native-gesture-handler";
import { useRef } from "react";

export const ProcurementListScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Header scrollY={scrollY} />
      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptates vero optio minima temporibus mollitia quis dolor!
          Laudantium, accusantium error distinctio sed eius veritatis? Numquam
          sequi temporibus asperiores sit repudiandae?
        </Text>
      </ScrollView>
    </View>
  );
};
