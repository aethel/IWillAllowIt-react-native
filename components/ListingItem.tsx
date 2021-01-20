import React from "react";
import { View, Text, Button } from "react-native";
import { DayAllowance } from "./Listing";

const ListingItem = ({data}:{data:DayAllowance}) => {
    return (
        <View>
            <Text>
                Date: {data.id}
            </Text>
            <Text>
                amount for today: {parseFloat(data.allowance as string).toFixed(2)}
            </Text>
            {!!data.deductions.length && <Text>
                deductions: {data.deductions}
            </Text>}
            {!!data.additions.length && <Text>
                deductions: {data.additions}
            </Text>}
            <Button onPress={() => null} title={'Edit'}/>
        </View>
    );
};

export default ListingItem;