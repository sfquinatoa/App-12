import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GaleriaScreen from "../screen/GaleriaScreen";
import CamaraScreen from "../screen/CamaraScreen";
import AudioScreen from "../screen/AudioScreen";

const Tabs = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Galeria" component={GaleriaScreen} />
      <Tabs.Screen name="Camara" component={CamaraScreen} />
      <Tabs.Screen name="Audio" component={AudioScreen} />

    </Tabs.Navigator>
  );
}

export default function Navegator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}