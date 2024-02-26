import { useNavigation } from "@react-navigation/core";
import { Block, Icon, Text } from "galio-framework";
import { useState } from "react";
import { Dimensions, Pressable } from "react-native";

const { height, width } = Dimensions.get("screen") 

export default function({selectedToilet}) {
  const navigation = useNavigation();
  const [toiletLikes, setToiletLikes] = useState(+selectedToilet[0].votes)
  const [liked, setLiked] = useState(false)
  const handleToiletView = () => {navigation.navigate('ToiletView', {selectedToilet, toiletLikes})}
  const handleLikeIncrease = () => {
    setToiletLikes((currentLikes) => [+currentLikes+1])
    setLiked(true)
  }

  return(
    <Block flex center row>
      <Block flex={1} center>
        {!liked ? 
        <Pressable onPress={handleLikeIncrease}>
          <Icon style={{textAlign:"center"}} name={"heart"} size={20} color="#E83E8C" family="feather"/>
          <Text bold={true} color="#050505" center>{toiletLikes}</Text>
        </Pressable>
        :
        <>
        <Icon style={{textAlign:"center"}} name={"heart"} size={20} color="#E83E8C" family="antdesign"/>
        <Text bold={true} color="#050505" center>{toiletLikes}</Text>
        </>
        }
      </Block>
      <Block flex={1} center>
        <Pressable center onPress={handleToiletView}>
          <Icon style={{textAlign:"center"}} name={"message-circle"} size={20} color="#E83E8C" family="feather"/>
          <Text bold={true} color="#050505" center>{selectedToilet[0].comment_count}</Text>
        </Pressable>
      </Block>
      <Block flex={1} center>
        <Pressable onPress={handleToiletView}>
          <Icon style={{textAlign:"center"}} name={"more-vertical"} size={20} color="#E83E8C" family="feather"/>
        </Pressable>
      </Block>
    </Block>)
}