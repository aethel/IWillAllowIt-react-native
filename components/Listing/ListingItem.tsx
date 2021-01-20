import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { DayAllowance } from "./Listing";

const ListingItem = ({item, onPress}:{item:DayAllowance, onPress: () => void}) => {
    return (
        <TouchableOpacity onPress={onPress}>
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
        </View>
    </TouchableOpacity>

    );
};

export default ListingItem;
