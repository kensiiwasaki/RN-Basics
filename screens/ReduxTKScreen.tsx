import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import React, { useEffect } from 'react';

export const ReduxTKScreen = () => {
  useEffect(() => {
    console.log('mounted ReduxToolKit');
    return () => {
      console.log('un-mounted ReduxToolKit');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Redux ToolKit</Text>
    </View>
  );
};
