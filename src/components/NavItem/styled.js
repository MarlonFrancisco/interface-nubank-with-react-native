import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #fff;
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;
