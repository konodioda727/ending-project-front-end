import React from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem';
import MvPageButton from '../../components/mvPageButton';
import { Stars } from '../../components/randomObjects/star.tsx';
import logo from '../../assets/images/logo.png';
import envelope from '../../assets/images/envelope.png';
import './index.less';
import Image from '../../components/Image';

const Entrance: React.FC = () => {
  return (
    <View>
      <OrderedElem className={'cover-title'}>@请输入昵称</OrderedElem>
      <OrderedElem className={'cover-sub-title'}>亲启.</OrderedElem>
      <OrderedElem className={'producted'}>
        <img
          className={'producted-img'}
          alt="proudly producted by muxi-studio"
          src={logo}
        ></img>
      </OrderedElem>
      <OrderedElem className={'report-title1'}>2023</OrderedElem>
      <OrderedElem className={'report-title2'}>年度报告</OrderedElem>
      <Image
        imageName={'envelope'}
        src={envelope}
        animationTime={2}
        delay={0.8}
        className={'envelope'}
        animationType={{ visible: 'infinite' }}
      ></Image>
      <OrderedElem className={'addtion1'}>
        这是匣子陪您走过的一年时间里，
      </OrderedElem>
      <OrderedElem className={'addtion2'}>属于我们的故事......</OrderedElem>
      <MvPageButton type={'mvPageVertically'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default Entrance;
