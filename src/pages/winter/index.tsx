import React from 'react';
import { View } from '../../components/contentView';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import Image from '../../components/Image';
import snowLand from '../../assets/images/snowLand.png';
import { Stars } from '../../components/randomObjects/star.tsx';

const Winter: React.FC = () => {
  return (
    <View>
      <Image src={snowLand} className={'snowLand'}></Image>
      <MvPageButton type={'mvPageVertically'} mode={'dark'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default Winter;
