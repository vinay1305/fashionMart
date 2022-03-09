import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './SignupStyle';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';
export default function SignupScreen({navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={'#2C313A'} />

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login1Screen')}>
          <View style={styles.iconContainer}>
            <Feather name="chevron-left" size={25} color={'#fff'} />
            <Text style={styles.iconText}>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            Create Your {'\n'}
            Account
          </Text>
        </View>
      </View>

      <View style={{flex: 0.75}}>
        <View style={styles.inputContainer}>
          <Icon
            name="verified-user"
            size={20}
            // color={COLORS.light}
            style={styles.inputIcon}
          />
          <TextInput placeholder="John Doe" style={styles.textInput} />
        </View>
        <View style={styles.textInputLine} />
        <View style={styles.inputContainer}>
          <Icon
            name="mail-outline"
            size={20}
            // color={COLORS.light}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="john@exmaple.com"
            style={styles.textInput}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.textInputLine} />
        <View style={styles.inputContainer}>
          <Entypo
            name="phone"
            size={20}
            //  color={COLORS.light}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Enter PhoneNo"
            style={styles.textInput}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.textInputLine} />
        <View style={styles.inputContainer}>
          <Icon
            name="lock-outline"
            size={20}
            //color={COLORS.light}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry
            onChangeText={this.handlePassword}
          />
        </View>
        <View style={styles.textInputLine} />
        <View style={styles.inputContainer}>
          <Icon
            name="lock-outline"
            size={20}
            // color={COLORS.light}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            secureTextEntry
          />
        </View>
        <View style={styles.textInputLine} />
        <View style={styles.midContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            style={styles.checkBox}
            onCheckColor="#17181A"
            onFillColor="#17181A"
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            activeOpacity={0.7}>
            <Text style={styles.signupText}>Signup With Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
