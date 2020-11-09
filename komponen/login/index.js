import React, {Component} from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  regis = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <View style={style.View}>
        <TextInput placeholder="User Name" />
        <TextInput placeholder="Password" />
        <Button title="Login" />
        <Button title="Register" onPress={this.regis} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  View: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10,
  },
});

export default Login;
