import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CheckBox from '@react-native-community/checkbox';
import styles from './LoginStyle';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }
  handleEmail = value => {
    this.setState({
      email: value,
    });
  };
  handlePassword = value => {
    this.setState({
      password: value,
    });
  };

  validate = () => {
    this.setState({
      error: '',
    });
    const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!expression.test(this.state.email)) {
      this.setState({
        error: 'Invalid Email',
      });
      return false;
    } else if (this.state.password.length === 0) {
      this.setState({
        error: 'Password cannot be empty',
      });
      return false;
    } else if (this.state.password.length < 9) {
      this.setState({
        error: 'Password is too short',
      });
    }

    return true;
  };

  submit = () => {
    if (this.validate()) {
      this.props.navigation.navigate('HomeScreen', {
        email: this.state.email,
      });
      console.log('Successfull');
    }
  };
  render() {
    //const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle="light-content" backgroundColor={'#2C313A'} />
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <View style={styles.headerContainer}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login1Screen')}
          >
          <View style={styles.iconContainer}>
              <Feather
                name="chevron-left"
                size={25}
                color={'#fff'}
                
              />
              <Text style={styles.iconText}>Back</Text>
            </View>
          </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>
                Log Into Your {'\n'}
                Account
              </Text>
            </View>
          </View>

<View style={{flex:0.75}}>
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
              autoCapitalize="none"
              onChangeText={this.handleEmail}
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
                alignItems: 'center',
                marginRight: 55,
              }}>
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry
                keyboardType="default"
                onChangeText={this.handlePassword}
              />
              <Text style={{}}>Forgot?</Text>
            </View>
          </View>
          <View style={styles.textInputLine} />
          <View style={styles.midContainer}>
            {/* <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            style={styles.checkBox}
            onCheckColor="#17181A"
            onFillColor="#17181A"
          />
          <Text style={styles.rememberText}>Remember Me</Text> */}

          {/* Error Handling */}
          <View style={{justifyContent:"center",alignItems:"center"}}>
            {this.state.error.length === 0 ? null : (
              <Text style={styles.error}>{this.state.error}</Text>
            )}
          </View>
          {/* Error Handling Ends */}
          </View>
         
            <View style={styles.btnContainer}>
            <TouchableOpacity
            onPress={this.submit}
            activeOpacity={0.7}>
              <Text style={styles.btnText}>Signin with Email</Text>
              </TouchableOpacity>
            </View>
        
        
</View>
      </SafeAreaView>
    );
  }
}
