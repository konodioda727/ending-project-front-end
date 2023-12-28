import React from 'react';
import { View } from '../../components/contentView';
import Particles from '../../components/particles';
import OrderedElem from '../../components/OrderedElem';
import Image from '../../components/Image';
import { ImageProps } from '../../components/types/ImageTypes.ts';
import cloud from '../../assets/images/cloud-gold.png';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import { Stars } from '../../components/randomObjects/star.tsx';

const Cheer: React.FC = () => {
  const imgProps: ImageProps = {
    src: cloud,
    alt: 'gold cloud',
    imageName: 'gold-cloud',
    animationTime: 1.6,
  };
  return (
    <View>
      <OrderedElem className={'cheer-text-1'}>感谢遇见</OrderedElem>
      <OrderedElem className={'cheer-text-2'}>感谢选择</OrderedElem>
      <OrderedElem className={'cheer-text-3'}>感谢陪伴</OrderedElem>
      <OrderedElem className={'cheer-text-4'}>在华师求学的路上</OrderedElem>
      <OrderedElem className={'cheer-text-5'}>匣子将一直陪伴你</OrderedElem>
      <OrderedElem OrderedElemSpeed={1.2} className={'cheer-text-6'}>
        祝福来年
      </OrderedElem>
      <OrderedElem OrderedElemSpeed={1.3} className={'cheer-text-7'}>
        所愿皆所成
      </OrderedElem>
      <Image className={'gold-cloud'} {...imgProps}></Image>
      <MvPageButton type={'mvPageVertically'}></MvPageButton>
      <Stars></Stars>
      <Particles></Particles>
    </View>
  );
};
export default Cheer;
