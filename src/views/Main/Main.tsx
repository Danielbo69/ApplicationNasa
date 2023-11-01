import { StyleSheet, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import fetchApi from "../../utils/fetch";
import TodaysImage from "../../components/TodaysImage/TodaysImage";
import LastTodaysImage from "../../components/LastTodaysImage";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";

const Main = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastTodaysImage, setLastTodaysImage] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchApi();
        setTodaysImage(todayImageResponse);
      } catch (error) {
        console.log(error);
        setTodaysImage({});
      }
    };

    const loadlastDaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");
        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );
        setLastTodaysImage(lastFiveDaysImagesResponse);
      } catch (error) {
        console.log(error);
        setLastTodaysImage([]);
      }
    };
    loadTodayImage().catch(null);
    loadlastDaysImages().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastTodaysImage postImages={lastTodaysImage} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003a99",
  },
});
