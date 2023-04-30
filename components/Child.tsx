import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import React, { FC, memo } from 'react';
import { Button } from 'react-native-elements';

type Props = {
  printMsg: () => void;
};

const ChildMemo: FC<Props> = ({ printMsg }) => {
  console.log('Child rendered');
  return (
    <View>
      <Text style={tw('my-3')}>Child</Text>
      <Button title="print" onPress={printMsg} />
    </View>
  );
};

export const Child = memo(ChildMemo);
