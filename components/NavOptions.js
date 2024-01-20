import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { Icon } from "@rneui/base";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tailwind`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-45 rounded-md`}
        >
          <View>
            <Image
              style={{
                width: 120,
                height: 120,
              }}
              source={{
                uri: item.image,
              }}
            />
            <Text style={tailwind`mt-2 text-lg font-semibold`}>
              {item.title}
            </Text>
            <Icon
              style={tailwind`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
