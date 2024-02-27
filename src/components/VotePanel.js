import { useNavigation } from "@react-navigation/core";
import { Block, Icon, Text } from "galio-framework";
import { useState, useEffect } from "react";
import { Dimensions, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get("screen");

export default function ({ selectedToilet }) {
  const navigation = useNavigation();
  const [toiletLikes, setToiletLikes] = useState(+selectedToilet[0].votes);
  const [liked, setLiked] = useState(false);
  const handleToiletView = () => {
    navigation.navigate("ToiletView", { selectedToilet, toiletLikes });
  };

  const handleLikeIncrease = async () => {
    if (!liked) {
      setToiletLikes((currentLikes) => [+currentLikes + 1]);
      setLiked(true);
      try {
        const id = [`${selectedToilet[0].id}`, selectedToilet[0].id];
        const count = [
          `${selectedToilet[0].id}count`,
          (+selectedToilet[0].votes + 1).toString(),
        ];
        await await AsyncStorage.multiSet([id, count]);
      } catch (e) {
        console.log(e);
      }
    } else {
      setToiletLikes((currentLikes) => [+currentLikes - 1]);
      setLiked(false);
      const keys = [`${selectedToilet[0].id}`, `${selectedToilet[0].id}count`];
      try {
        await AsyncStorage.multiRemove(keys);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem(`${selectedToilet[0].id}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const getCounts = async () => {
    try {
      const data = await AsyncStorage.getItem(`${selectedToilet[0].id}count`);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const storedToiletId = await getData();
      const storedLikeCount = await getCounts();
      if (storedToiletId === selectedToilet[0].id) {
        setLiked(true);
        setToiletLikes(storedLikeCount);
      } else {
        setLiked(false);
      }
    };
    fetchData();
  }, [selectedToilet]);

  return (
    <>
      <Block row safe>
        <Block flex>
          {!liked ? (
            <Pressable onPress={handleLikeIncrease}>
              <Icon
                style={{ textAlign: "center" }}
                name={"heart"}
                size={20}
                color="#E83E8C"
                family="feather"
              />
              <Text bold={true} color="#050505" center>
                {toiletLikes}
              </Text>
            </Pressable>
          ) : (
            <Pressable onPress={handleLikeIncrease}>
              <Icon
                style={{ textAlign: "center" }}
                name={"heart"}
                size={20}
                color="#E83E8C"
                family="antdesign"
              />
              <Text bold={true} color="#050505" center>
                {toiletLikes}
              </Text>
            </Pressable>
          )}
        </Block>
        <Block flex>
          <Pressable center onPress={handleToiletView}>
            <Icon
              style={{ textAlign: "center" }}
              name={"message-circle"}
              size={20}
              color="#E83E8C"
              family="feather"
            />
            <Text bold={true} color="#050505" center>
              {selectedToilet[0].comment_count}
            </Text>
          </Pressable>
        </Block>
        <Block flex>
          <Pressable onPress={handleToiletView}>
            <Icon
              style={{ textAlign: "center" }}
              name={"more-vertical"}
              size={20}
              color="#E83E8C"
              family="feather"
            />
          </Pressable>
        </Block>
      </Block>
    </>
  );
}
