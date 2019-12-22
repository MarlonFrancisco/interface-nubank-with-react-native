import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native';

export const Container = styled(Animated.ScrollView).attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
`;

export const QRCode = styled.Image`
  width: 120px;
  height: 120px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #fff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
