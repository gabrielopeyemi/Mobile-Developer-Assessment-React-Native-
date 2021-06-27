import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
export const Container = styled.View``;

export const ButtonStyle = styled.TouchableOpacity<{
  block: boolean | undefined;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: ${width * 0.9}px;
  background-color: ${p => (p.block ? '#0bce83' : '#fff0')};
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
`;

