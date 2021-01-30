import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";
import NotFoundScreen from "../../screens/NotFoundScreen";
import { DayAllowance } from "./Listing";

const ListingItem = ({item, onPressHandler, index}:{item:DayAllowance, onPressHandler: (val:any, index:any) => void, index:any}) => {
    const [deductionValue, setDeductionValue] = useState<string>('0');
    const [additionValue, setAdditionValue] = useState<string>('0');
    
    const onDeductValue = (value:string) => setDeductionValue(value);
    const onAddValue = (value:string) => setAdditionValue(value);
    
    const clickHandle = () => {
        onPressHandler(deductionValue, index)
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
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, backgroundColor:'#f0f0f0' }}
                keyboardType={'numeric'}
                onChangeText={amount => onDeductValue(amount)}
                value={deductionValue}
                placeholder='Deduct this much'
                placeholderTextColor='#000'
            />
            <Button title={'deduct'} onPress={clickHandle}/>
        </View>
    </TouchableOpacity>

    );
};

export default ListingItem;
