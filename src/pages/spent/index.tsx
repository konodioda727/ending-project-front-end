import React from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem';
import Charts from '../../components/charts';
import { Coins } from '../../components/randomObjects/coins.tsx';
import './index.less';
import { Stars } from '../../components/randomObjects/star.tsx';
import MvPageButton from '../../components/mvPageButton';

const Spent: React.FC = () => {
  return (
    <View animationTime={4}>
      <OrderedElem className={'spent-text-1'}>x月x日</OrderedElem>
      <OrderedElem className={'spent-text-2'}>是你在食堂</OrderedElem>
      <OrderedElem className={'spent-text-3'}>消费最多的一天</OrderedElem>
      <OrderedElem className={'spent-text-4'}>共消费</OrderedElem>
      <OrderedElem className={'spent-text-5'}>x元</OrderedElem>
      <OrderedElem>
        <Charts type={'line'} className={'spent-chart'}></Charts>
      </OrderedElem>
      <Coins numRange={[4, 6]} posRange={{ x: [0, 100], y: [0, 30] }}></Coins>
      <Stars numRange={[4, 8]}></Stars>
      <MvPageButton type={'mvPageVertically'}></MvPageButton>
    </View>
  );
};

export default Spent;
