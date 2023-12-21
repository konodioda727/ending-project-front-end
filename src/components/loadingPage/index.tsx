import React, { useEffect } from 'react';
import { View } from '../contentView';
import Word from '../word';

const FakeLoadingPage: React.FC = props => {
  useEffect(() => {
    const evt = new Event('mvPageVertically');
    const timer = setTimeout(() => {
      dispatchEvent(evt);
      clearTimeout(timer);
    }, 3000);
  }, []);
  //
  return (
    <View {...props}>
      <Word>loading...</Word>
    </View>
  );
};

export default FakeLoadingPage;
