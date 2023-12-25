import React from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem/index.tsx';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import calendar from '../../assets/images/calendar.png';
import Image from '../../components/Image';
import { Stars } from '../../components/randomObjects/star.tsx';

const SchoolTime: React.FC = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <View>
      <OrderedElem className={'datePage-OrderedElem-1'}>从9月1日,</OrderedElem>
      <OrderedElem
        className={'datePage-OrderedElem-2'}
      >{`到${month}月${day}日`}</OrderedElem>
      <Image
        src={calendar}
        className={'calendar'}
        delay={1}
        animationTime={1}
        animationType={{ visible: 'infinite' }}
        imageName={'calendar'}
      ></Image>
      <OrderedElem className={'datePage-OrderedElem-3'}>这一年，</OrderedElem>
      <OrderedElem className={'datePage-OrderedElem-4'}>
        还是元气满满吗
      </OrderedElem>
      <MvPageButton type={'mvPageVertically'} mode={'light'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default SchoolTime;
