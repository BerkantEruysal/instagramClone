import { View, Text, StyleSheet , Dimensions, TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import Comment from './Comment'

export default function InnerComments({replies}) {
   const [doRepliesShowing , setDoRepliesShowing] = useState(false)
  return (
    <View style={styles.wrapper}>
        {replies != null && replies.length > 0 ? 
        <TouchableOpacity onPress={() => {setDoRepliesShowing(!doRepliesShowing)}} style={styles.viewMoreWrapper}>
        <View style={styles.line}></View>
        <Text> View {replies.length} more reply</Text>
        </TouchableOpacity> :
        <></>
        }
        {doRepliesShowing ?
        replies.map((comment) => {
           return <Comment props={comment}></Comment>
        }) : <></> }
        
        
      
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper : {
       width : Dimensions.get("screen").width * 90 / 100,
       marginLeft : Dimensions.get("screen").width * 10 / 100,
       paddingRight : "2.1%"
    },

    line : {
        height : 1,
        backgroundColor : "rgba(0 , 0 , 0 , 0.3)",
        width : 40,
        alignSelf : "center"
    },
    viewMoreWrapper : {
        flexDirection : "row"
    }
})