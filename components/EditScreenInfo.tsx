import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Button, Alert } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { TotalAmountContainer } from '../containers/TotalAmountContainer';
import { useNavigation } from '@react-navigation/native';

const EditScreenInfo = () => {
  const [value, onChangeValue] = useState<string>('0');
  const totalAmount = TotalAmountContainer.useContainer();
  const navigation = useNavigation();
  return (
    <View>      
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Enter your amount
        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          {value}
        </Text>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
        keyboardType={'numeric'}
        onChangeText={amount => onChangeValue(amount)}
        onBlur={() => totalAmount.handleTotalAmount(+value)}
        value={value}
       />
       <Button
        title="Calculate"
        color="#f194ff"
        onPress={ () => navigation.navigate('Listing')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    flexDirection: 'column',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});

export default EditScreenInfo;