import React from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem';
import MvPageButton from '../../components/mvPageButton';
import { Stars } from '../../components/randomObjects/star.tsx';
import './index.less';
import Charts from '../../components/charts';

const Study: React.FC = () => {
  return (
    <View>
      <OrderedElem className={'study-OrderedElem-1'}>你一共上了</OrderedElem>
      <OrderedElem
        className={'study-OrderedElem-2'}
      >{`${'classetime'}节课`}</OrderedElem>
      <OrderedElem
        className={'study-OrderedElem-3'}
      >{`共计${'classhour'}小时`}</OrderedElem>
      <OrderedElem>
        <Charts style={{ width: '90vw', height: '50vh' }}></Charts>
      </OrderedElem>
      <OrderedElem className={'study-OrderedElem-4'}>学习之路上，</OrderedElem>
      <OrderedElem className={'study-OrderedElem-5'}>
        你一定有很多收获吧？
      </OrderedElem>
      <MvPageButton type={'mvPageVertically'} mode={'light'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default Study;
