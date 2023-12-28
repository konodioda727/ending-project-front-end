import React from 'react';
import plate from '../../assets/images/palte.png';
import sticks from '../../assets/images/sticks.png';
import { View } from '../../components/contentView';
import Image from '../../components/Image';
import { ImageProps } from '../../components/types/ImageTypes.ts';
import OrderedElem from '../../components/OrderedElem';
import './index.less';
import MvPageButton from '../../components/mvPageButton';
import { Stars } from '../../components/randomObjects/star.tsx';
const DinningHall: React.FC = () => {
  const plateProps: ImageProps = {
    src: plate,
    alt: 'plate',
    imageName: 'plate',
    className: 'plate',
    animationTime: 1.6,
    animationType: { visible: 'infinite' },
    delay: 1,
  };
  const sticksProps: ImageProps = {
    src: sticks,
    alt: 'sticks',
    imageName: 'sticks',
    className: 'sticks',
    animationType: { visible: 'infinite' },
    animationTime: 1.6,
    delay: 1,
  };
  return (
    <View animationTime={4}>
      <OrderedElem className={'dinningHall-text-medium dinningHall-text-1'}>
        x月x日
      </OrderedElem>
      <OrderedElem className={'dinningHall-text-medium dinningHall-text-2'}>
        你最早起床
      </OrderedElem>
      <OrderedElem className={'dinningHall-text-medium dinningHall-text-3'}>
        x点x分就到
      </OrderedElem>
      <OrderedElem className={'dinningHall-text-large dinningHall-text-4'}>
        x食堂
      </OrderedElem>
      <OrderedElem className={'dinningHall-text-small dinningHall-text-5'}>
        吃早饭
      </OrderedElem>
      <OrderedElem className={'dinningHall-text-medium dinningHall-text-6'}>
        早起吃饱
      </OrderedElem>
      <OrderedElem className={'dinningHall-text-medium dinningHall-text-7'}>
        一天不倒
      </OrderedElem>
      <Image {...plateProps}></Image>
      <Image {...sticksProps}></Image>
      <MvPageButton type={'mvPageVertically'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};

export default DinningHall;
