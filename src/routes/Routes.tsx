import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";
import Main from "../views/Main/Main";
import Detail from "../views/Details/Details";

const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "#003a99",
    height: 20
  },
  headerTitleStyle: {
    color: '#fff'
  }
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Main"
      >
        <Stack.Screen name="Main" component={Main} options={routeScreenDefaultOptions}/>
        <Stack.Screen name="Detail" component={Detail} options={routeScreenDefaultOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
