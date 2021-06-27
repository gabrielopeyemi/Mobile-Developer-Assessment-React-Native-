/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

import {ButtonStyle, Container} from './Button.styles';

interface ButtonProps {
  children: string;
  onPress?: any;
  block?: boolean | undefined;
  textColor?: string;
}

const Button = ({children, onPress, block, textColor}: ButtonProps) => {
  return (
    <Container>
      <ButtonStyle onPress={onPress} block={block}>
        <Text style={{color: textColor, fontSize: 15}}>{children}</Text>
      </ButtonStyle>
    </Container>
  );
};

export default Button;
