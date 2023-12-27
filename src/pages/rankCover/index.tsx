import React from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem/index.tsx';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import ccnubox from '../../assets/images/ccnubox.png';
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
      <OrderedElem className={'rankCover-OrderedElem1'}>下面</OrderedElem>
      <OrderedElem className={'rankCover-OrderedElem2'}>快来看看</OrderedElem>
      <OrderedElem className={'rankCover-OrderedElem3'}>
        华师的年度巅峰榜
      </OrderedElem>
      <MvPageButton type={'mvPageVertically'} mode={'light'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default RankCover;
