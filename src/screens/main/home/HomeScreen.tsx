import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Container from '../../../components/Container';
import CustomLoading from '../../../components/CustomLoading';
import PostItem from '../../../components/PostItem';
import {PAGINATION_STEP} from '../../../consts/api';
import fetchPosts from '../../../redux/actions/fetchPosts';
import {RootState} from '../../../redux/reducers/root';
import {PostTypes} from '../../../types/Types';

const HomeScreen = () => {
  const [lastReceivedItem, setLastReceivedItem] = useState(PAGINATION_STEP - 1);

  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts(0, lastReceivedItem));
  }, []);
  useEffect(() => {
    console.log(lastReceivedItem, 'lastReceivedItem');
  }, [lastReceivedItem]);

  const {postList, isFetching, dataFinished} = useSelector(
    (state: RootState) => state.posts,
  );
  useEffect(() => {
    console.log(postList, 'postList');
  }, [postList]);

  const fetchMore = () => {
    console.log(dataFinished, 'fetch more called');

    if (!dataFinished && !isFetching) {
      const lastItem = lastReceivedItem + PAGINATION_STEP;
      const firstItem = lastReceivedItem + 1;
      dispatch(fetchPosts(firstItem, lastItem));
      setLastReceivedItem(lastItem);
    }
  };
  const onRefresh = () => {
    setLastReceivedItem(PAGINATION_STEP - 1);
    dispatch(fetchPosts(0, PAGINATION_STEP - 1));
  };

  return (
    <Container
      isLoading={postList.length === 0 && isFetching}
      style={styles.maintainer}>
      <FlatList
        scrollEnabled
        onRefresh={onRefresh}
        refreshing={isFetching}
        keyExtractor={(item: PostTypes, index) => item.id.toString()}
        data={postList}
        renderItem={({item}) => <PostItem {...item} />}
        ListFooterComponent={
          <>{isFetching && postList.length > 0 && <CustomLoading />}</>
        }
        onEndReached={fetchMore}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  maintainer: {flex: 1, flexDirection: 'column'},
});
