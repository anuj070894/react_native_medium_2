import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDWmpcSmeQvxmfwuFKyQ0OPhYkvRxyGdPY',
      authDomain: 'authentication-fe411.firebaseapp.com',
      databaseURL: 'https://authentication-fe411.firebaseio.com',
      projectId: 'authentication-fe411',
      storageBucket: 'authentication-fe411.appspot.com',
      messagingSenderId: '573855702632',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
