import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { DayAllowance } from "./Listing";

const ListingModalContent = ({
  allowanceObj,
  closeModalHandler,
}: {
  allowanceObj: DayAllowance;
  closeModalHandler: () => void;
}) => {
  return (
    <View style={styles.modalView}>
      <Text>Your allowance for {allowanceObj.id}</Text>
      <Text>{allowanceObj.allowance}</Text>
      <Button title="Hide Modal" onPress={closeModalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default ListingModalContent;
