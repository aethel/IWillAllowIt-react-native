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
import { DailyAllowancesContainer } from "../../containers/DailyAllowancesContainer";
import { useNavigation } from "@react-navigation/native";

export type DayAllowance = {
  id: number;
  allowance: number | string;
  deductions: any[];
  additions: any[];
};

const Listing = () => {
  const { totalAmount } = TotalAmountContainer.useContainer();
  const { dailyAllowances, SaveAllowances } = DailyAllowancesContainer.useContainer();
  const [dayOfMonth, dayOfMonthPlusOne, NumberOfDaysInMonth] = useDays();
  // const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [RecalculateAllowances, DeductFromAllowance] = useAllowances();
  const navigation = useNavigation();
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
    
    useEffect(() => {
      const updatedData = RecalculateAllowances(allowanceDays);
      SaveAllowances(updatedData);
    }, [totalAmount])

    const deductionHandler = (value:any, index:any) => {
      const blah = DeductFromAllowance(dailyAllowances, index, value);
      SaveAllowances(blah)
  }

  const renderItem = ({ item, index }: { item: any, index:any }) => {
    return (
      <ListingItem
        item={item}
        index={index}
        onPressHandler={deductionHandler}
      />
    );
  };


  return (
    <SafeAreaView style={styles.container}>
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
        keyExtractor={(item,index) => `${index}`}
        renderItem={renderItem}
        extraData={totalAmount}
      />
      <Button
        title="Back"
        color="#f194ff"
        onPress={() => navigation.goBack()}
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
