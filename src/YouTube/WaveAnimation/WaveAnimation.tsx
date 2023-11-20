import {
  Canvas,
  Circle,
  Group,
  Path,
  Skia,
  rect,
  rrect,
  useClockValue,
  useComputedValue,
  useValue,
} from "@shopify/react-native-skia";
import { curveBasis, line } from "d3";
import React, { useEffect, useState } from "react";

export const Wave = ({ size = 256, progress = 10 }) => {
  const r = size / 2;
  const padding = size / 25;
  const outerCircleRadius = r - padding / 2;
  const innerCircleSize = size - padding * 2;
  const frequency = 5;
  const amplitude = 15;
  const verticalOffset = useValue(100);
  const clock = useClockValue();
  const [up, setUp]: any = useState(progress);

  useEffect(() => {
    console.log("Progress updated:", up);

    verticalOffset.current = (1 - up / 100) * innerCircleSize;
    console.log("Vertical Offset updated:", verticalOffset.current);
  }, [up, size, innerCircleSize]);

  //AnimatedDoth value,

  useEffect(() => {
    setTimeout(() => {
      setUp(Math.min(100, up + 5));
    }, 2000);

  }, [up]);

  const createAnimatedPath = (phase = 20) => {
    const d3Points = Array.from({ length: size }).map((_, i) => {
      const angle = (i / size) * (Math.PI * frequency) + phase;
      return [i, (Math.sin(angle) * amplitude) / 2 + verticalOffset.current];
    });
    const lineGenerator = line().curve(curveBasis);
    const wavePath = lineGenerator(d3Points as Iterable<[number, number]>);
    return `${wavePath} L ${size}, ${size} ${0}, ${size} Z`;
  };

  const animatedPath: any = useComputedValue(() => {
    const current = (clock.current / 250) % 200;
    const start = Skia.Path.MakeFromSVGString(createAnimatedPath(current));
    const end = Skia.Path.MakeFromSVGString(
      createAnimatedPath(current * Math.PI)
    );
    if (start && end) {
      return start.interpolate(end, 0.5);
    } else {
      return null;
    }
  }, [clock, progress, size]);

  const roundedRectangle = rrect(
    rect(padding, padding, innerCircleSize, innerCircleSize),
    r,
    r
  );

  return (
    <Canvas style={{ width: size, height: size }}>
      <Circle
        cx={r}
        cy={r}
        r={outerCircleRadius}
        style="stroke"
        strokeWidth={padding}
        color="#239"
      />
      <Group clip={roundedRectangle}>
        {animatedPath && <Path path={animatedPath} color="#119" />}
      </Group>
    </Canvas>
  );
};
