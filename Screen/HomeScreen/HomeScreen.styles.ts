import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

export const Container = styled(LinearGradient).attrs({
  colors: ['#0000ff', '#00008B'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  height: ${height}px;
`;

export const TopView = styled.View`
  margin: 20px;
  height: 60px;
  width: 60px;
  background-color: #cdffb6;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  border-radius: 50px;
  padding: 0;
`;


export const FooterTab = styled.View`
  background-color: #f6f5f5;
  height: ${height * 0.7}px;
  width: ${width}px;
  position: absolute;
  bottom: 0px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const BottomTap = styled.View`
  position: absolute;
  bottom: 10px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
export const Paragraph = styled.Text`
  text-align: center;
  margin: 20px 0 50px;
  font-size: 20px;
  color: grey;
`;

export const Title = styled.Text`
  text-align: center;
  margin: 20px 0 10px;
  font-size: 45px;
  font-weight: 900;
`;

export const IconDiv = styled.View`
  background-color: #fff;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0;
  text-align: center;
  border-radius: 50px;
`;
