import { View } from "react-native";
import React from "react";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";


const Card = () => {
    return (
        <View>

            <View className="flex flex-col gap-1 w-full h-32 bg-slate-900 rounded-md p-4">

            </View>
            <View className="flex flex-col gap-1 mt-4">
                <Text >The Nintendo Switch gaming console is a compact device that can be taken everywhere. This portable super device is also equipped with 2 gamepads. Read more</Text>
                <Button>Add to cart</Button>
            </View>

        </View>
    );
};

export default Card;
