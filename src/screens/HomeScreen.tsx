import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../components/PostItem";
import fetchPosts from "../redux/actions/fetchPosts";
import { RootState } from '../redux/reducers/root';


const HomeScreen = ()=>{
const navigation = useNavigation<any>()
const dispatch = useDispatch()
useEffect(()=>{
dispatch(fetchPosts())
},[])

const {postList} = useSelector((state:RootState)=>state.posts )
const onPressPost = () =>{
    navigation.navigate('PostDetails')
}
console.log(postList,'&&&&&&')

    return(
        <View style={styles.maintainer}>

        <FlatList
        scrollEnabled
        data={postList}
        renderItem={({ item }) => 
        <PostItem {...item}/>}
        
        />

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    maintainer:{flex:1,flexDirection:'column'}
})