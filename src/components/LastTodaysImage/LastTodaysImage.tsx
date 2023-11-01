import React, { FC } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PostImage as PostImagesTypes } from "../../types";
import PostImage from "../PostImage";

const LastTodaysImage: FC<{postImages?: PostImagesTypes[]}> = ({postImages}) => {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last Five Days</Text>
      <ScrollView style={styles.scroll}>
        {postImages?.map(postImage => (
          <PostImage key={postImage.title} {...postImage}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default LastTodaysImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 20,
    paddingVertical: 10,
    color: '#fff'
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 24
  }
});
