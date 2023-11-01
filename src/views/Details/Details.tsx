import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { FC } from "react";
import { PostImage, RootStackParams } from "../../types";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader";

const Details: FC<PostImage> = () => {
  const {
    params: { title, date, url, explanation },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();
  console.log(title);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.cardDetail}>
        {url ? (
          <Image source={{ uri: url }} style={styles.image} />
        ):(
          <Loader />
        )}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={{marginVertical: 20}}>
          <Text style={styles.description}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003a99",
  },
  cardDetail: {
    flex: 1,
    backgroundColor: "#8ecae694",
    padding: 20,
    borderRadius: 32,
    marginHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 32,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "auto",
    marginBottom: 10,
    color: '#fff'
  },
  date: {
    fontSize: 15,
    fontWeight: "500",
    color: "#f2f2f2",
  },
  description: {
    textAlign: 'justify',
    color: '#fff',
    fontSize: 15
  },
});
