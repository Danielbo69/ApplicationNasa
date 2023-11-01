import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { PostImage as LastPostImage, RootStackParams } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Detail"
>;

const PostImage: FC<LastPostImage> = ({ title, date, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleViewPress}>
          <Text style={{ color: "#fff", padding: 10 }}>VIEW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "rgba(18,39,113, 0.8)",
    borderRadius: 28,
    marginBottom: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    marginBottom: 3,
  },
  date: {
    fontSize: 15,
    marginBottom: 3,
    color: "#f2f2f2",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});
