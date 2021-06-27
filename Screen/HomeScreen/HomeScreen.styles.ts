import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const height = Dimensions.get('window').height;
export const Container = styled.View`
  background-color: #ffff00;
  height: ${height}px;
`;
