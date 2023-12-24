import React from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word';
import MvPageButton from '../../components/mvPageButton';
import { Stars } from '../../components/randomObjects/star.tsx';
import logo from '../../assets/images/logo.png';
import envelope from '../../assets/images/envelope.png';
import './index.less';
import Image from '../../components/Image';
import defaultMusic from '../../assets/music/BackgroundMusic.mp3';

const Entrance: React.FC = () => {
  const audio = new Audio(defaultMusic);
  const handleClick = () => {
    audio.volume = 0.5;
    audio.play();
  };
  return (
    <View>
      <Word className={'cover-title'}>@请输入昵称</Word>
      <Word className={'cover-sub-title'}>亲启.</Word>
      <Word className={'producted'}>
        <img
          className={'producted-img'}
          alt="proudly producted by muxi-studio"
          src={logo}
        ></img>
      </Word>
      <Word className={'report-title1'}>2023</Word>
      <Word className={'report-title2'}>年度报告</Word>
      <Image
        imageName={'envelope'}
        src={envelope}
        animationTime={2}
        delay={0.8}
        className={'envelope'}
        animationType={{ visible: 'infinite' }}
      ></Image>
      <Word className={'addtion1'}>这是匣子陪您走过的一年时间里，</Word>
      <Word className={'addtion2'}>属于我们的故事......</Word>
      <MvPageButton
        type={'mvPageVertically'}
        onClick={() => handleClick()}
      ></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default Entrance;
