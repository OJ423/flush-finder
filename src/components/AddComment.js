import { StyleSheet, TextInput } from "react-native";
import {Block, Button, Text} from 'galio-framework'
import { useState } from "react";

export default function AddComment({setCommenting, setComments, setCommentCount}) {
  const [newComment, setNewComment] = useState()

  const handleChangeComment = (value) => {setNewComment(value)}
  const submitComment = () => {
    const addedComment = {_id: newComment, comment: newComment}
    setComments((currentComments) => [addedComment, ...currentComments])
    setCommenting(false)
    setCommentCount((currentCount) => [+currentCount+1])
  }

  const cancelComment = () => {setCommenting(false)}
  
  return(
    <>
    <Block row left>
      <Block flex={6}>
        <Text size={12} muted>Comment</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeComment}
          value={newComment}
          placeholder="Add your comment"
        />
      </Block>
  </Block>
  <Block row left>
    <Block flex={4}>
      <Button style={styles.button} onPress={submitComment}>Add Comment</Button>
    </Block>
    <Block flex={2}>
      <Button style={styles.button} color="warning" onPress={cancelComment}>Cancel</Button>
    </Block>
  </Block>
  </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width:"auto"
  }
});