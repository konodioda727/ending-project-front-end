import React, { useEffect } from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word';
import { Stars } from '../../components/randomObjects/star.tsx';
import { LoadingPageProps } from '../../components/types/loadingPageTypes.ts';

const FakeLoadingPage: React.FC = () => {
  return (
    <View>
      <Word>loading...</Word>
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
  }, [stat, document.fonts.ready]);

  return <></>;
};
