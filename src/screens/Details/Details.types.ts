import {Dispatch, SetStateAction} from 'react';
import {Result} from '../Home/Home.types';

export interface DetailsPublicInterface {
  route: {params: Result};
}

export interface DetailsPrivateInterface {}

export interface DetailsTypes
  extends DetailsPublicInterface,
    DetailsPrivateInterface {}
