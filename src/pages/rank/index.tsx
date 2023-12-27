import React from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word/index.tsx';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import { Stars } from '../../components/randomObjects/star.tsx';

const Rank: React.FC = () => {
  return (
    <View>
        <Word><div className='rank-title'>华师年度巅峰榜</div></Word>
      <MvPageButton type={'mvPageVertically'} mode={'light'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default Rank;
