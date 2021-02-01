import * as React from 'react';
import {Dimensions, Text, View, StyleSheet, Image } from 'react-native';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ITEM_WIDTH = WIDTH * 0.8;
const ITEM_HEIGHT = HEIGHT / 4;

interface ItemProps {
    _id: string,
    index: number,
    guid: string,
    isActive: boolean,
    balance: string,
    picture: string,
    age: number,
}


const Item = (props: ItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{props._id}</Text>
      <Text>{props.age}</Text>
      <Text>{props.balance}</Text>
      <Text>{props.guid}</Text>
      <Text>{props.index}</Text>
      <Text>{props.isActive}</Text>
      <Image style={styles.img} source={{uri: props.picture}} />
    </View>
  );
};

export default React.memo(Item);

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignSelf: "center"
  },
  img :{
      width: 70,
      height: 70,
  }
});
