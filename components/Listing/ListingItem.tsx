import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { DayAllowance } from "./Listing";

const ListingItem = ({item, onPress}:{item:DayAllowance, onPress: () => void}) => {
    // const deductionHandler = () => {
    //     // const result = DeductFromAllowance(dailyAllowances,20, 7);
    //     // SaveAllowances(result)
    //     const allowance = item.allowance as number - 4;
    //     const deductions = [...item.deductions, 4];
    //     return ({...item, allowance, deductions})
    // }
    return (
        <TouchableOpacity>
        <View>
            <Text>
                Date: {item.id}
            </Text>
            <Text>
                amount for today: {parseFloat(item.allowance as string).toFixed(2)}
            </Text>
            {!!item.deductions.length && <Text>
                deductions: {item.deductions}
            </Text>}
            {!!item.additions.length && <Text>
                deductions: {item.additions}
            </Text>}
            <Button title={'deduct'} onPress={onPress}/>
        </View>
    </TouchableOpacity>

    );
};

export default ListingItem;
