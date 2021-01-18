import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Button, Alert, ImageComponent, SafeAreaView } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { TotalAmountContainer } from '../containers/TotalAmountContainer';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import ListingItem from './ListingItem'

const Listing = ({navigation}:{navigation:any}) => {
  const {totalAmount} = TotalAmountContainer.useContainer();

  return (
    <SafeAreaView style={styles.container}>      
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
            {totalAmount}
        </Text>
          <FlatList style={styles.scrollElem} data={[1,2,3]} keyExtractor={(index) => `${index}`} renderItem={({item}) => <ListingItem data={item}/>}/>
       <Button
        title="Back"
        color="#f194ff"
        onPress={() => navigation.goBack(null)}
      />
    </SafeAreaView>
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
  scrollElem: {
    backgroundColor: 'pink',
    height: 50,
    flex:1 
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

export default Listing;