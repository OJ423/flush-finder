import { useRoute } from "@react-navigation/core";
import { Block, Text, Icon } from "galio-framework";
import { Dimensions, Pressable, ScrollView, StyleSheet } from "react-native";
import ResultsMap from "../components/results-screen/ResultsMap";
import { useEffect, useState } from "react";
import AddComment from "../components/AddComment";
import CommentCard from "../components/CommentCard";
import { fetchComments } from "../api";

const { height, width } = Dimensions.get("screen")

export default function ToiletScreen() {
  const route = useRoute()
  const selectedToilet = route.params?.selectedToilet
  const toiletLikes = route.params?.toiletLikes
  const toilet = selectedToilet[0]
  const [commenting, setCommenting] = useState(false)
  const [comments, setComments] = useState([])
  const [commentCount, setCommentCount] = useState(toilet.comment_count)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    fetchComments(toilet.id)
    .then((response) => {
      setComments(response)
    })
  },[selectedToilet, rerender])

  const handleAddComment = () => {setCommenting(true)}

  return (<>
      <ScrollView>
      <Block flex={6} safe={true} top>
        <Block flex center>
          <ResultsMap selectedToilet={selectedToilet}/>
        </Block>
        <Block flex shadow={true} center style={styles.toiletContainer}>
          <Block left style={{marginBottom:20}} width={width-60}>
            <Text bold={true} h5>{toilet.name}</Text>
            <Text muted>{toilet.street}</Text>
            <Text size={14}>{toilet.comment}</Text>
          </Block>
          {commenting ? <AddComment setCommenting={setCommenting} setComments={setComments} setCommentCount={setCommentCount} rerender={rerender} setRerender={setRerender} toilet={toilet} />
          :
          <>
          <Block center row>
              <Block center borderRadius={20} backgroundColor={"#f3f3f3"} height={100} flex={2} card space="around" style={{margin:5, borderColor:"#28c7fc", borderWidth:5}}>
                <Text>Unisex?</Text>
                {toilet.unisex === true ? (
                    <>
                      <Icon
                        name={"check-circle"}
                        size={15}
                        color="#3CB043"
                        family="Feather"
                        />
                      <Text muted> Yes</Text>
                    </>
                  ) : (
                    <>
                      <Icon
                        name={"thumbs-down"}
                        size={15}
                        color="tomato"
                        family="Feather"
                        />
                      <Text muted> No</Text>
                    </>
                  )}
              </Block>
            <Block flex={2} borderRadius={20} backgroundColor={"#f3f3f3"} height={100} center card space="around" style={{margin:5, borderColor:"#28c7fc", borderWidth:5}}>
              <Text>Accessible?</Text> 
                {toilet.accessible === true ? (
                  <>
                  <Icon
                    name={"check-circle"}
                    size={15}
                    color="#3CB043"
                    family="Feather"
                    />
                  <Text muted>Yes</Text>
                  </>
                ) : (
                  <>
                  <Icon
                    name={"thumbs-down"}
                    size={15}
                    color="tomato"
                    family="Feather"
                    />
                  <Text muted> No</Text>
                </>
                )}
            </Block>
            <Block flex={2} borderRadius={20} backgroundColor={"#f3f3f3"} height={100} center card space="around" style={{margin:5, borderColor:"#28c7fc", borderWidth:5}}>
            <Text style={{textAlign:"center"}}>Changing table?</Text>
              {toilet.changing_table === true ? (
                <>
                  <Icon
                    name={"check-circle"}
                    size={15}
                    color="#3CB043"
                    family="Feather"
                    />
                  <Text muted> Yes</Text>
                </>
              ) : (
                <>
                  <Icon
                    name={"thumbs-down"}
                    size={15}
                    color="tomato"
                    family="Feather"
                    />
                  <Text muted> No</Text>
                </>
              )}
            </Block>
          </Block>
          <Block card flex center row borderRadius={0} backgroundColor={"#28c7fc"} width={width} height={100} style={styles.paddingLR}>
            <Block center flex={2}>
              <Icon style={{textAlign:"center"}} name={"heart"} size={30} color="#E83E8C" family="feather"/>
              <Text bold={true} color="#050505">{toiletLikes}</Text>
            </Block>
            <Block center flex={2}>
              <Icon style={{textAlign:"center"}} name={"message-circle"} size={30} color="#E83E8C" family="feather"/>
              <Text bold={true} color="#050505">{commentCount}</Text>
            </Block>
            <Block center flex={2}>
            <Pressable center onPress={handleAddComment}>
              <Icon style={{textAlign:"center"}} name={"edit"} size={30} color="#E83E8C" family="feather"/>
              <Text bold={true} color="#050505">Add New</Text>
            </Pressable>
            </Block>
          </Block>
          <Block marginTop={20} width={width-80}>
            <Text h5>Comments</Text>
            {comments.length === 0 ? <Text>There are no comments for this toilet.</Text>
            :
            comments.map((comment)=> (
             <CommentCard key={comment._id} comment={comment}/>
            ))
            }
          </Block>
          </>
            }
        </Block>
      </Block>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  toiletContainer: {
    width: width-20,
    backgroundColor:"white",
    borderRadius:20,
    padding:20,
    textAlign:"left",
    marginTop: -150
  },
  paddingLR: {
    paddingLeft:50,
    paddingRight: 50,
    marginTop:20,
    borderWidth:0
  }
})