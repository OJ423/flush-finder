import { Block, Text } from "galio-framework";
import { StyleSheet } from "react-native";

export default function ({comment}) {
  return(
    <Block styles={styles.commentContainer} card height={50} middle left marginBottom={0} borderColor={"pink"} marginTop={20} padding={10}>
      <Text>{comment.comment}</Text>
    </Block>
  )
}

const styles = StyleSheet.create({
  commentContainer: {
    marginBottom: 20,
    marginTop:20,
    paddingBottom:20,
    paddingTop:20,
    borderTopWidth: 1,
    borderTopColor: "#28c7fc"
  }
})