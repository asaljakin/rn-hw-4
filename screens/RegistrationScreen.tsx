import { FC, useState } from "react";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../navigation/StackNavigator";

import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { styles } from "../styles/css";

import Input from "../components/Input";
import Button from "../components/Button";
import AddIcon from "../icons/AddIcon";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "Registration">;

const RegistrationScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const handleLoginChange = (value: string) => {
    setLogin(value);
    setKeyboardStatus(true);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setKeyboardStatus(true);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setKeyboardStatus(true);
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onRegister = () => {
    navigation.navigate("Home");
  };

  const onLogin = () => {
    navigation.navigate("Login");
  };

  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>
        {isPasswordVisible ? "Показати" : "Приховати"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("../assets/images/bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.formContainer,
              height: keyboardStatus ? "60%" : "77%",
            }}
          >
            <View style={styles.avatarContainer}>
              <AddIcon width="25" height="25" style={styles.plusIcon}></AddIcon>
            </View>
            <Text style={styles.title}>Реєстрація</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={login}
                //autofocus={true}
                placeholder="Логін"
                onTextChange={handleLoginChange}
              />

              <Input
                value={email}
                //autofocus={true}
                placeholder="Адреса електронної пошти"
                onTextChange={handleEmailChange}
              />

              <Input
                value={password}
                placeholder="Пароль"
                rightButton={showButton}
                outerStyles={styles.passwordButton}
                onTextChange={handlePasswordChange}
                secureTextEntry={isPasswordVisible}
              />
            </View>

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onRegister}>
                <Text style={[styles.baseText, styles.buttonText]}>
                  Зареєстуватися
                </Text>
              </Button>

              <View style={styles.loginContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Вже є акаунт?&ensp;
                  <TouchableWithoutFeedback onPress={onLogin}>
                    <Text style={styles.linkText}>Увійти</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
