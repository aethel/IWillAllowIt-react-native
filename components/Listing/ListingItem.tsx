import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import NotFoundScreen from "../../screens/NotFoundScreen";
import { DayAllowance } from "./Listing";

const ListingItem = ({item, onPressHandler, index}:{item:DayAllowance, onPressHandler: (val:any, index:any) => void, index:any}) => {
   
    const clickHandle = () => {
        onPressHandler(1, index)
    }
   
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
            <Button title={'deduct'} onPress={clickHandle}/>
        </View>
    </TouchableOpacity>

    );
};

export default ListingItem;
