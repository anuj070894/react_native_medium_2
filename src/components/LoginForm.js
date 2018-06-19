import React, { Component } from 'react';
import { Card, CardSection, ButtonComponent } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />
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
