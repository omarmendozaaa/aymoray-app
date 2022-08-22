import { width } from "config/scaleAccordingToDevice";
import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Pagination } from "react-native-snap-carousel";
import { View, Button, Colors } from "react-native-ui-lib";
import { StyleSheet } from "react-native";
import { FONTS } from "config/FoundationConfig";

interface Props {
  index: number;
  onSkip: () => void;
  onNext: () => void;
  dotsLength: number;
}

const PaginationBottom = ({ index, onSkip, onNext, dotsLength }: Props) => {
  return (
    <View style={styles.container}>
      <Button
        label={index === dotsLength - 1 ? " " : "Saltar"}
        link
        color={Colors.contentW}
        labelStyle={styles.labelStyle}
        onPress={onSkip}
        disabled={index === dotsLength - 1}
        style={styles.btnLeft}
      />
      <Pagination
        dotsLength={dotsLength}
        activeDotIndex={index}
        containerStyle={styles.containerStyle}
        dotContainerStyle={styles.dotContainerStyle}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotScale={1}
      />
      <Button
        label={index !== dotsLength - 1 ? "Siguiente" : "Iniciar sesión"}
        link
        color={Colors.contentW}
        labelStyle={styles.labelStyle}
        onPress={onNext}
        style={styles.btnRight}
      />
    </View>
  );
};

export default PaginationBottom;
const styles = StyleSheet.create({
  container: {
    width: width,
    position: "absolute",
    bottom: getBottomSpace(),
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
  },
  containerStyle: {
    alignSelf: "center",
    paddingVertical: 0,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  dotContainerStyle: {
    marginRight: 0,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  inactiveDotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.9)",
    backgroundColor: "transparent",
  },
  labelStyle: {
    fontFamily: FONTS.heavy,
    fontSize: 14,
    fontWeight: "800",
  },
  btnLeft: {
    width: 120,
    justifyContent: "flex-start",
  },
  btnRight: {
    width: 120,
    justifyContent: "flex-end",
  },
});
