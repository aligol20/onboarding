import React from 'react'
import { StyleSheet, View } from 'react-native'
import BookmarkIcon from '../icons/BookmarkIcon'
import CommentIcon from '../icons/CommentIcon'
import HeartIcon from '../icons/HeartIcon'
import SendIcon from '../icons/SendIcon'
import { scale } from '../utils/scale'
import { small_scale } from '../utils/sizing'




const PostItemToolbar = () =>{

    return(
        <View style={styles.maintainer}>
            <View style={styles.container}>
           <HeartIcon style={styles.iconStyle}/>
           <SendIcon style={styles.iconStyle}/>
           <CommentIcon style={styles.iconStyle} onPress={()=>console.log('on Press comment')}/>
           </View>
           <BookmarkIcon style={styles.iconStyle} onPress={()=>console.log('on Press comment')}/>

        </View>
    )
}
export default PostItemToolbar
const styles = StyleSheet.create({
    maintainer:{
        flexDirection:"row",
        alignItems:"center",
        width:'100%',
        justifyContent:"space-between"
    },
    container:{
        flexDirection:"row",
        alignItems:"center",

    },
    iconStyle:{
        marginHorizontal:scale(5),
        marginVertical:scale(7)
    }
})