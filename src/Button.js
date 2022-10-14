import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Button = ({ onPress, title, titleStyle }) => {
  return (
    <View>
      <TouchableOpacity accessible={false} onPress={onPress}>
        <Text style={titleStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
