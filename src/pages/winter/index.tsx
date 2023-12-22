import React from 'react';
import { View } from '../../components/contentView';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import Image from '../../components/Image';
import snowLand from '../../assets/images/snowLand.png';
import { Stars } from '../../components/randomObjects/star.tsx';

const Winter: React.FC = props => {
  return (
    <View {...props}>
      <Image src={snowLand} className={'snowLand'}></Image>
      <MvPageButton type={'mvPageVertically'} mode={'dark'}></MvPageButton>
      <Stars range={[10, 12]}></Stars>
    </View>
  );
};
export default Winter;
