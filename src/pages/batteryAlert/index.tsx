import React from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word';
import Image from '../../components/Image';
import angryMan from '../../assets/images/angry.png';
import angryFace from '../../assets/images/angry-face.png';
import './index.less';
import battery from '../../assets/images/battery.png';
import batteryBar from '../../assets/images/battery-bar.png';
import batteryAlert from '../../assets/images/battery-alert.png';
import { ImageProps } from '../../components/types/ImageTypes.ts';
import MvPageButton from '../../components/mvPageButton';
import { Stars } from '../../components/randomObjects/star.tsx';
const BatteryAlert: React.FC = () => {
  const angryImageProps: ImageProps = {
    className: 'angry-man',
    animationTime: 2.6,
    animationType: { visible: 'infinite' },
    delay: 1,
  };
  const batteryProps: ImageProps = {
    className: 'batteryImg',
    animationTime: 2.6,
    animationType: { visible: 'infinite' },
    delay: 1,
  };
  const batteryAlertProps: ImageProps = {
    className: 'battery-alert',
    animationTime: 2.6,
    animationType: { visible: 'infinite' },
    src: batteryAlert,
    alt: 'battery-alert',
    imageName: 'battery-alert',
    delay: 1,
  };
  return (
    <View animationTime={3.6}>
      <Word className={'battery-font-medium battery-text-1'}>x月x日这天，</Word>
      <Word className={'battery-font-small battery-text-2'}>
        是你们寝室耗电
      </Word>
      <Word className={'battery-font-medium battery-text-3'}>最多的一天</Word>
      <Word className={'battery-font-large battery-text-4'}>全校排名第x</Word>
      <Image {...batteryAlertProps}></Image>
      <Image
        {...angryImageProps}
        src={angryMan}
        alt={'angry-man'}
        imageName={'angry-man'}
      ></Image>
      <Image
        {...angryImageProps}
        src={angryFace}
        alt={'angry-face'}
        imageName={'angry-face'}
      ></Image>
      <Image
        {...batteryProps}
        src={battery}
        alt={'battery'}
        imageName={'battery'}
      ></Image>
      <Image
        {...batteryProps}
        className={'batteryImg-cover'}
        src={batteryBar}
        alt={'battery-bar'}
        imageName={'battery-bar'}
      ></Image>
      <MvPageButton type={'mvPageVertically'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};

export default BatteryAlert;
