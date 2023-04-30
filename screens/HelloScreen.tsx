import { View, Text } from 'react-native';
import React, { FC, useEffect } from 'react';
import tw from 'tailwind-rn';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;

export const HelloScreen: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    console.log('mounted Hello');
    return () => {
      console.log('un-mounted Hello');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Hello</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to ReduxTK"
          onPress={() => navigation.navigate('ReduxTK')}
        />
      </View>
    </View>
  );
};
