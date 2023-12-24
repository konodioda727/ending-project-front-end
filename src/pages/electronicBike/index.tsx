import React from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word';
import Image from '../../components/Image';
import { ImageProps } from '../../components/types/ImageTypes.ts';
import ebike from '../../assets/images/bike.png';
import grass from '../../assets/images/grass.png';
import { Stars } from '../../components/randomObjects/star.tsx';
import './index.less';
import MvPageButton from '../../components/mvPageButton';

const ElectronicBike: React.FC = () => {
  const eBikeProps: ImageProps = {
    alt: 'e-bike',
    imageName: 'e-bike',
    delay: 1,
    animationTime: 3,
    src: ebike,
    className: 'e-bike',
    animationType: { visible: 'infinite' },
  };
  const grassProps: ImageProps = {
    alt: 'grass',
    imageName: 'grass',
    delay: 1,
    animationTime: 3,
    className: 'grass',
    src: grass,
    animationType: { visible: 'infinite' },
  };
  return (
    <View animationTime={4}>
      <Word className={'electronicBike-word-1'}>这一年，</Word>
      <Word className={'electronicBike-word-2'}>你的寝室</Word>
      <Word className={'electronicBike-word-3'}>一共花了</Word>
      <Word className={'electronicBike-word-4'}>xx元电费</Word>
      <Word className={'electronicBike-word-5'}>相当于可以骑小电驴</Word>
      <Word className={'electronicBike-word-6'}>绕地球x圈</Word>
      <Image {...eBikeProps}></Image>
      <Image {...grassProps}></Image>
      <Stars></Stars>
      <MvPageButton type={'mvPageVertically'}></MvPageButton>
    </View>
  );
};

export default ElectronicBike;
