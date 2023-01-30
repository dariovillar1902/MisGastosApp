import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Hello from "./Hello";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DetailsScreen, HomeScreen } from "../App";
import Overview from "./Overview";
import PeopleList from "./PeopleList";
import GroupList from "./GroupList";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Mis Gastos":
                iconName = focused ? "cash" : "cash-outline";
                break;

              case "Personas":
                iconName = focused ? "person" : "person-outline";
                break;

              case "Grupos":
                iconName = focused ? "people" : "people-outline";
                break;

              case "Presupuesto":
                iconName = focused ? "wallet" : "wallet-outline";
                break;

              default:
                break;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "indianred",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Mis Gastos" component={Overview} />
        <Tab.Screen name="Personas" component={PeopleList} />
        <Tab.Screen name="Grupos" component={GroupList} />
        <Tab.Screen name="Presupuesto" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
