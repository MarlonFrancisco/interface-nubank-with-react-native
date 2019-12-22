import React from 'react';
import {TabItem, TabText} from './styled';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({text, icon}) => {
  return (
    <>
      <TabItem>
        <Icon name={icon} size={26} color="#fff" />
        <TabText>{text}</TabText>
      </TabItem>
    </>
  );
};
