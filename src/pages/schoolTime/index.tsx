import React from 'react';
import { View } from '../../components/contentView';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import Image from '../../components/Image';
import { Stars } from '../../components/randomObjects/star.tsx';

const SchoolTime: React.FC = () => {
  return (
    <View>
      <Image  className={'snowLand'}></Image>
      <MvPageButton type={'mvPageVertically'} mode={'dark'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default SchoolTime;
