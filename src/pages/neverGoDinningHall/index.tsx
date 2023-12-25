import React from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem';
import Charts from '../../components/charts';
import './index.less';
import MvPageButton from '../../components/mvPageButton';

const NeverGoDinningHall: React.FC = () => {
  return (
    <View>
      <OrderedElem className={'neverText-1'}>你最常去的是</OrderedElem>
      <OrderedElem className={'neverText-2'}>x食堂的x楼</OrderedElem>
      <OrderedElem>
        <Charts className={'never-chart'}></Charts>
      </OrderedElem>
      <OrderedElem className={'neverText-3'}>你从未去过x食堂</OrderedElem>
      <OrderedElem className={'neverText-4'}>是时候来场新的冒险了</OrderedElem>
      <MvPageButton type={'mvPageVertically'}></MvPageButton>
    </View>
  );
};
export default NeverGoDinningHall;
