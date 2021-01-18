import React from "react";
import { View, Text, Button } from "react-native";

const ListingItem = (params:any) => {
    return (
        <View>
            <Text>
                amount for today: {params.data}
            </Text>
            <Text>
                deductions:
            </Text>
            <Button onPress={() => null} title={'Edit'}/>
        </View>
    );
};

export default ListingItem;