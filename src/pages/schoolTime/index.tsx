import React from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word/index.tsx';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import calendar from '../../assets/images/calendar.png'
import Image from '../../components/Image';
import { Stars } from '../../components/randomObjects/star.tsx';

const SchoolTime: React.FC = () => {
    const date = new Date();
    const month = date.getMonth()+1;
    const day = date.getDate()
  return (
    <View>
        <Word className={'datePage-word-1'}>从9月1日,</Word>
        <Word className={'datePage-word-2'}>{`到${month}月${day}日`}</Word>
        <Image
         src={calendar} 
         className={'calendar'}
         delay={1}
         animationTime={1}
         animationType={{ visible: 'infinite' }}
         imageName={'calendar'}
         ></Image>
        <Word className={'datePage-word-3'}>这一年，</Word>
        <Word className={'datePage-word-4'}>还是元气满满吗</Word>
      <MvPageButton type={'mvPageVertically'} mode={'light'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default SchoolTime;
