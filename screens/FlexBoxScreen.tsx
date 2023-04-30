import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import React, { useEffect } from 'react';

export const FlexBoxScreen = () => {
  useEffect(() => {
    console.log('mounted FlexBox');
    return () => {
      console.log('un-mounted FlexBox');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>FlexBox</Text>
    </View>
  );
};
