import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import React, { FC, useEffect } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>;

export const ReduxTKScreen: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    console.log('mounted ReduxToolKit');
    return () => {
      console.log('un-mounted ReduxToolKit');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Redux ToolKit</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to FlexBox"
          onPress={() => navigation.navigate('FlexBox')}
        />
      </View>
    </View>
  );
};
