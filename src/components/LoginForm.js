import React, { Component } from 'react';
import { Card, CardSection, ButtonComponent, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmil.com"
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
        <CardSection>
          <ButtonComponent
            text="Log In"
            onPress={() => console.log("Clicked!!!")}
          />
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
