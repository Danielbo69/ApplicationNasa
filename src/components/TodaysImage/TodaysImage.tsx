import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { PostImage, RootStackParams } from "../../types/index";
import Loader from "../Loader";
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>

const TodaysImage: FC<PostImage> = ({
  date,
  title,
  url,
  explanation,
}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation})
  }

  return (
    <View style={styles.container}>
      {url? (
        <Image source={{ uri: url }} style={styles.image} />
      ) : (
        <Loader />
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleViewPress}>
          <Text style={{ fontWeight: "bold", color: "#fff" }}>VIEW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodaysImage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 32,
    marginVertical: 16,
    marginHorizontal: 24,
    backgroundColor: "#8ecae694",
  },
  image: {
    width: "100%",
    height: 190,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#fff",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 12,
  },
  date: {
    fontSize: 16,
    color: "#f2f2f2",
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: "flex-end",
    padding: 5
  },
});
