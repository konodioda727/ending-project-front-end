import React from 'react';
import { View } from '../contentView';
import Word from '../word';
import MvPageButton from '../mvPageButton';

const FakeLoadingPage: React.FC = props => {
  return (
    <View {...props}>
      <Word>123123</Word>
      <MvPageButton type={'mvPageVertically'}></MvPageButton>
      {/*<div id="loading-container">*/}
      {/*  <div id="loading-text">Loading...</div>*/}
      {/*</div>*/}
    </View>
  );
};

export default FakeLoadingPage;
