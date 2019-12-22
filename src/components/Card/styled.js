import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Footer = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 13px;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 32px;
  color: #333;
  margin-top: 3px;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;
