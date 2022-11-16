/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Image, RefreshControl} from 'react-native';
import {ArtistText, Container, WaifuContainer} from './Home.styles';
import {HomeTypes, Result} from './Home.types';

const HomeView = (props: HomeTypes) => {
  const {
    resultCount,
    setResultCount,
    waifus,
    getArtistData,
    navigateToOtherScreen,
    getWaifu,
    loading,
  } = props;

  const renderItem = ({item, index}: {item: Result; index: number}) => {
    return (
      <WaifuContainer
        key={item.url}
        onPress={() => navigateToOtherScreen(item)}>
        {/* onPress={() => getArtistData(item.source_url)}> */}
        <Image
          source={{uri: item.url}}
          style={{height: 150, width: 150, borderRadius: 12}}
        />
        <ArtistText>{item.artist_name}</ArtistText>
      </WaifuContainer>
    );
  };

  return (
    <Container>
      <FlatList
        data={waifus || []}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getWaifu} />
        }
      />
    </Container>
  );
};

export default HomeView;
