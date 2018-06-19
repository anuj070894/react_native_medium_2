import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Spinner, ButtonComponent, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDWmpcSmeQvxmfwuFKyQ0OPhYkvRxyGdPY',
      authDomain: 'authentication-fe411.firebaseapp.com',
      databaseURL: 'https://authentication-fe411.firebaseio.com',
      projectId: 'authentication-fe411',
      storageBucket: 'authentication-fe411.appspot.com',
      messagingSenderId: '573855702632',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <ButtonComponent
                text="Log Out"
                onPress={() => firebase.auth().signOut()}
              />
            </CardSection>
          </Card>);
      case false:
        return <LoginForm />;
      default:
        return (
          <Card>
            <CardSection>
              <Spinner
                size="large"
              />
            </CardSection>
          </Card>);
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
