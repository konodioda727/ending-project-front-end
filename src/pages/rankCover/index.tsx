import React from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word/index.tsx';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import ccnubox from '../../assets/images/ccnubox.png'
import Image from '../../components/Image';
import { Stars } from '../../components/randomObjects/star.tsx';

const RankCover: React.FC = () => {
  return (
    <View>
        <Image
        className={'ccnubox-rankcover'}
        imageName={'ccnubox-rankcover'}
        src={ccnubox}
        animationTime={2}
        animationType={{ visible: 'infinite' }}
        ></Image>
        <Word className={'rankCover-word1'}>下面</Word>
        <Word className={'rankCover-word2'}>快来看看</Word>
        <Word className={'rankCover-word3'}>华师的年度巅峰榜</Word>
      <MvPageButton type={'mvPageVertically'} mode={'light'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default RankCover;
