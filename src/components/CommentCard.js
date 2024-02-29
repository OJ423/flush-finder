import { Block, Text, Card } from "galio-framework";
import { StyleSheet } from "react-native";
import GhostLoading from "./GhostLoading";
import { Skeleton } from "moti/skeleton";

export default function ({comment}) {
  const dateObject = new Date(comment.created_at);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(dateObject);
  return(
    
    <Block styles={styles.commentContainer} card middle left marginBottom={0} borderColor={"pink"} marginTop={20} padding={10}>
    <Skeleton colorMode="light" show={isLoading}>
      <Text muted marginBottom={10}>{formattedDate}</Text>
      <Text>{comment.review}</Text>
        </Skeleton>
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
