import React from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem';
import cloud from '../../assets/images/cloud-top.png'
import ccnubox from '../../assets/images/ccnubox.png'
import Image from '../../components/Image/index.tsx';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import { Stars } from '../../components/randomObjects/star.tsx';

const Thanks: React.FC = () => {
  return (
    <View>
       <Image
        className={'cloud-thanks'}
        src={cloud}
        imageName={'cloud'}
        animationTime={1}
       ></Image>
       <Image
        className={'ccnubox-thanks'}
        src={ccnubox}
        imageName={'ccnubox-thanks'}
        animationTime={2}
        animationType={{ visible: 'infinite' }}
       ></Image>
       <OrderedElem className='thanks-word-1'>最后,</OrderedElem>
       <OrderedElem className='thanks-word-2'>今年是</OrderedElem>
       <OrderedElem className='thanks-word-3'>华师匣子陪伴你的</OrderedElem>
       <OrderedElem className='thanks-word-4'>第X年</OrderedElem>
       <OrderedElem className='thanks-word-5'>团队成员为您修复了</OrderedElem>
       <OrderedElem className='thanks-word-6'>X个bug</OrderedElem>
      <MvPageButton type={'mvPageVertically'} mode={'light'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default Thanks;
