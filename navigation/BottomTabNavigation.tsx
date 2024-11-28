import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";

import Login from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import Home from "../screens/Home";
import PostsScreen from "../screens/PostsScreen";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../styles/global";
import { styles } from "../styles/css";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";

const Tab = createBottomTabNavigator(); // вказує на групу навігаторів

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ navigation }) => ({
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerStyle: styles.tabHeader,
        headerTitleStyle: styles.tabHeaderTitle,
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        //headerStyle: styles.tabHeader,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabIcon,
        tabBarActiveBackgroundColor: colors.orange,
      })}
      backBehavior="history"
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: "Публікації",

          headerRight: () => (
            <TouchableOpacity style={styles.logoutBtn}>
              <MaterialIcons
                name="logout"
                size={24}
                color={colors.underline_grey}
                onPress={() =>
                  navigation.navigate("Login", { screen: "Login" })
                }
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color={focused ? colors.white : colors.underline_grey}
            />
          ),
        })}
      />

      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: "Створити публікацію",

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color={colors.underline_grey}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="plus"
              size={24}
              color={focused ? colors.white : colors.underline_grey}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "",

          headerRight: () => (
            <TouchableOpacity style={styles.logoutBtn}>
              <MaterialIcons
                name="logout"
                size={24}
                color={colors.underline_grey}
                onPress={() =>
                  navigation.navigate("Login", { screen: "Login" })
                }
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? colors.white : colors.underline_grey}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
