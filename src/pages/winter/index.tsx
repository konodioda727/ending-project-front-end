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
      <Image src={snowLand}></Image>
      <MvPageButton type={'mvPageHorizontally'}></MvPageButton>
      <Stars range={[12, 16]}></Stars>
    </View>
  );
};
export default Winter;
