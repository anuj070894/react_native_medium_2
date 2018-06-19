import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, ButtonComponent, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onLoginSuccess = () => {
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: '',
    });
  }

  onLoginFailure = () => {
    this.setState({
      error: 'Authentication Failed!',
      loading: false,
    });
  }

  handleButtonPress = () => {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFailure);
      });
  }

  renderButton = () => {
    if (this.state.loading) {
      return (<Spinner size="small" />);
    }
    return (<ButtonComponent
      text="Log In"
      onPress={this.handleButtonPress}
    />);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyles}>
          { this.state.error }
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyles: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  }
};

export default LoginForm;
