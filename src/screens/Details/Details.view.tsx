/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Linking, TouchableOpacity} from 'react-native';
import {Container, Text} from './Details.styles';
import {DetailsTypes} from './Details.types';

const DetailsView = (props: DetailsTypes) => {
  const {route} = props;
  const {artist_href, artist_name, source_url, url} = route.params;

  return (
    <Container>
      <Image
        source={{uri: url}}
        resizeMode="contain"
        style={{height: 300, width: '100%', borderRadius: 8, marginBottom: 16}}
      />

      <Text style={{marginBottom: 16}}>Name: {artist_name}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(artist_href)}>
        <Text style={{color: 'green', marginBottom: 16}}>My collections</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(source_url)}>
        <Text style={{color: 'green'}}>Touch me</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default DetailsView;
