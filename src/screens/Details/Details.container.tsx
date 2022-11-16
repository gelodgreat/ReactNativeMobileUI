import React from 'react';
import DetailsView from './Details.view';

const DetailsContainer = (props: any) => {
  console.log(props);
  const {} = props;

  const generatedValues: any = {};

  return <DetailsView {...props} {...generatedValues} />;
};

export default DetailsContainer;
