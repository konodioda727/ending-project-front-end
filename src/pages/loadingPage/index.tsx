import React, { useEffect } from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem';
import { Stars } from '../../components/randomObjects/star.tsx';
import { LoadingPageProps } from '../../components/types/loadingPageTypes.ts';

const FakeLoadingPage: React.FC = () => {
  return (
    <View>
      <OrderedElem>loading...</OrderedElem>
      <Load></Load>
      <Stars></Stars>
    </View>
  );
};

export default FakeLoadingPage;

export const Load: React.FC<LoadingPageProps> = props => {
  const { stat } = props;
  useEffect(() => {
    document.fonts.ready.then(() => {
      const evt = new Event('mvPageVertically');
      if (stat === 'visible') dispatchEvent(evt);
    });
  }, [stat]);

  return <></>;
};
