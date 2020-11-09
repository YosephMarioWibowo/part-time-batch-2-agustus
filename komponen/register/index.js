import React, {Component} from 'react';
import {TextInput, Button, View, StyleSheet, Text} from 'react-native';
import {AsyncStorage} from 'react-native';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      data: [],
      namaL: '',
      passwordL: '',
      dataJ: [{user: 1}],
    };
    // this.getData();
    // AsyncStorage.getItem('data', (error, result) => {
    //   if (result) {
    //     let resultParsed = JSON.parse(result);
    //     this.setState({
    //       namaL: resultParsed.user,
    //       passwordL: resultParsed.password,
    //     });
    //   }
    // });
  }
  login = () => {
    this.props.navigation.navigate('Login');
  };

  // storeData = async (value) => {
  //   // let data = this.state.data;
  //   try {
  //     const jsonValue = JSON.stringify(this.state.data);
  //     await AsyncStorage.setItem('data', jsonValue);
  //   } catch (e) {
  //     // saving error
  //     alert('gagal');
  //   }
  // };

  saveData = async () => {
    let user = this.state.user;
    let password = this.state.password;
    // let data = this.state.data;
    this.state.data.push({user, password});
    // alert(this.state.data);
    try {
      await AsyncStorage.setItem('data', JSON.stringify(this.state.data));
    } catch (e) {
      // saving error
      alert('gagal');
    }
    // alert('done');
    // this.storeData();
    // await AsyncStorage.setItem('data', JSON.stringify(data));
    // AsyncStorage.getItem('data', (err, result) => {
    //   console.log(result);
    // });
  };

  getData = async () => {
    try {
      // const jsonValue = await AsyncStorage.getItem('data');
      const data = await AsyncStorage.getItem('data');

      if (data !== null) {
        var parse = await JSON.parse(data);

        // alert(data);
      }
      this.setState({dataJ: parse});
      console.info(this.state.dataJ);
      // return jsonValue != null ? this.setState({dataJ: jsonValue}) : null;
    } catch (e) {
      // error reading value
      alert(this.getData);
    }
  };
  render() {
    return (
      <View style={style.View}>
        <TextInput
          placeholder="User Name"
          onChangeText={(user) => this.setState({user: user})}
          defaultValue={this.state.user}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(password) => this.setState({password: password})}
          defaultValue={this.state.password}
          secureTextEntry={true}
        />
        <Button title="Register" onPress={this.saveData} />
        <Button title="Register" onPress={this.getData} />
        <Text>{this.state.dataJ[0].user}</Text>
        {/* {this.getData()} */}
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

export default Register;
