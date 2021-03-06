import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { DayAllowance } from "./Listing";
import useAllowances from "../../hooks/useAllowance";
import { DailyAllowancesContainer } from "../../containers/DailyAllowancesContainer";

const ListingModalContent = ({
  allowanceObj,
  closeModalHandler,
}: {
  allowanceObj: DayAllowance;
  closeModalHandler: (updatedObj:any) => any;
}) => {

  const { dailyAllowances, SaveAllowances } = DailyAllowancesContainer.useContainer();
  const [,DeductFromAllowance] = useAllowances();
  const [updatedAllowance, setUpdatedAllowance] = useState<DayAllowance>();

  const deductionHandler = () => {
    // const result = DeductFromAllowance(dailyAllowances,20, 7);
    // SaveAllowances(result)
    const allowance = allowanceObj.allowance as number - 4;
    const deductions = [...allowanceObj.deductions, 4];
    setUpdatedAllowance({...allowanceObj, allowance, deductions})
}

  return (
    <View style={styles.modalView}>
      <Text>Your allowance for {allowanceObj.id}</Text>
      <Text>{parseFloat(allowanceObj.allowance as string).toFixed(2)}</Text>
      <Button title="deduct" onPress={deductionHandler} />
      <Button title="Hide Modal" onPress={closeModalHandler(updatedAllowance)} />
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
