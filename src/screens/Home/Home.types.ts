import {Dispatch, SetStateAction} from 'react';

export interface Result {
  artist_href: string;
  artist_name: string;
  source_url: string;
  url: string;
}

export interface WaifusResult {
  results: Result[];
}

export interface HomeTypes {
  waifus: Result[] | [];
  resultCount: number;
  setResultCount: Dispatch<SetStateAction<number>>;
  getArtistData: (url: string) => void;
  navigateToOtherScreen: (data: Result) => void;
}
