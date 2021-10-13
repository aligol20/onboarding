import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Container from '../../../components/Container';
import CustomLoading from '../../../components/CustomLoading';
import PostItem from '../../../components/PostItem';
import fetchPosts from '../../../redux/actions/fetchPosts';
import {RootState} from '../../../redux/reducers/root';
import {Postitem} from '../../../types/Types';

const HomeScreen = () => {
  const [page, setPage] = useState(0);

  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts(page));
  }, []);

  const {postList, isFetching} = useSelector((state: RootState) => state.posts);

  const onPressPost = (item: Postitem) => {
    console.log('PostDetails', item);

    navigation.navigate('PostDetails', {item});
  };
  const fetchMore = () => {
    setPage(page + 1);
  };

  return (
    <Container isLoading={isFetching} style={styles.maintainer}>
      <FlatList
        scrollEnabled
        data={postList}
        renderItem={({item}) => (
          <PostItem {...item} onPressItem={onPressPost} />
        )}
        onEndReached={fetchMore}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  maintainer: {flex: 1, flexDirection: 'column'},
});
