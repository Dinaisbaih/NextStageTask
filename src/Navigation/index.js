//React
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Navigate
import Home from "../Screens/Home";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default RootNavigator;
