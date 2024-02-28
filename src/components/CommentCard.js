import { Block, Text, Card } from "galio-framework";
import { StyleSheet } from "react-native";
import GhostLoading from "./GhostLoading";
import { Skeleton } from "moti/skeleton";

<<<<<<< HEAD
export default function CommentCard({ comment, isLoading }) {
  return (
    <Block
      styles={styles.commentContainer}
      card
      height={50}
      middle
      left
      marginBottom={0}
      borderColor={"pink"}
      marginTop={20}
      padding={10}
    >
      <Skeleton colorMode="light" show={isLoading}>
        <Text>{comment.comment}</Text>
      </Skeleton>
=======
export default function ({comment}) {
  return(
    <Block styles={styles.commentContainer} card middle left marginBottom={0} borderColor={"pink"} marginTop={20} padding={10}>
      <Text>{comment.review}</Text>
>>>>>>> af3de8d7c9bec87dc81cfa223b35cfe15fa5115c
    </Block>
  );
}

const styles = StyleSheet.create({
  commentContainer: {
    marginBottom: 20,
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#28c7fc",
  },
});
