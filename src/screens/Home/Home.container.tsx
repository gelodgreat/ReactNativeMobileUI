import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Linking} from 'react-native';
import {API_URL} from '../../common/api';
import {OTHER_SCREEN} from '../../common/screens_url';
import {HomeTypes, Result} from './Home.types';
import HomeView from './Home.view';

const HomeContainer = (props: any) => {
  const [waifus, setWaifus] = useState<Result[] | []>([]);
  const [resultCount, setResultCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const getWaifu = async () => {
    setLoading(true);
    const data = await axios.get(`${API_URL}?amount=${resultCount}`);
    setWaifus(data.data.results || []);
    setLoading(false);
  };

  const navigateToOtherScreen = (data: Result) => {
    if (data) {
      navigation.navigate(OTHER_SCREEN, data);
    }
  };

  const getArtistData = (url: string) => {
    if (url.length > 0) {
      Linking.openURL(url);
    }
  };

  useEffect(() => {
    const load = async () => {
      await getWaifu();
    };
    load();
  }, []);

  const generatedValues: HomeTypes = {
    waifus,
    resultCount,
    setResultCount,
    getArtistData,
    navigateToOtherScreen,
    loading,
    getWaifu,
  };

  return <HomeView {...props} {...generatedValues} />;
};

export default HomeContainer;
