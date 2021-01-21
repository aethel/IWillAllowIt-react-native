import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  ImageComponent,
  SafeAreaView,
  Modal,
} from "react-native";

import Colors from "../../constants/Colors";
import { MonoText } from "../StyledText";
import { Text, View } from "../Themed";
import { TotalAmountContainer } from "../../containers/TotalAmountContainer";
import {
  ScrollView,
  FlatList,
  TouchableHighlight,
} from "react-native-gesture-handler";
import ListingItem from "./ListingItem";
import useDays from "../../hooks/useDays";
import ListingModalContent from "./ListingModalContent";
import useAllowances from "../../hooks/useAllowance";

export type DayAllowance = {
  id: number;
  allowance: number | string;
  deductions: any[];
  additions: any[];
};

const Listing = ({ navigation }: { navigation: any }) => {
  const { totalAmount } = TotalAmountContainer.useContainer();
  const [dayOfMonth, dayOfMonthPlusOne, NumberOfDaysInMonth] = useDays();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const allowanceDays = [...new Array(NumberOfDaysInMonth())].map(
    (val: any, index: number): DayAllowance => {
      return {
        id: index + 1,
        allowance: totalAmount / NumberOfDaysInMonth(),
        deductions: [],
        additions: [],
      };
    }
    );
    const {dailyAllowances, RecalculateAllowances} = useAllowances(allowanceDays);
    
    useEffect(() => {
      console.debug('recalc')
      RecalculateAllowances(allowanceDays);
    }, [])
    

  const renderItem = ({ item }: { item: any }) => {
    return (
      <ListingItem
        item={item}
        onPress={async () => {
          await setSelectedId(item.id);
          setModalVisible(!modalVisible);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        {selectedId && (
          <ListingModalContent
            allowanceObj={allowanceDays[selectedId!]}
            closeModalHandler={() => setModalVisible(!modalVisible)}
          />
        )}
      </Modal>

      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {totalAmount} {dayOfMonth} wut{dayOfMonthPlusOne} ddd{" "}
        {NumberOfDaysInMonth()}
      </Text>
      <FlatList
        style={styles.scrollElem}
        data={dailyAllowances}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        extraData={selectedId}
      />
      <Button
        title="Back"
        color="#f194ff"
        onPress={() => navigation.goBack(null)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
    flexDirection: "column",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  scrollElem: {
    backgroundColor: "pink",
    height: 50,
    flex: 1,
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});

export default Listing;
