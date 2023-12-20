import React from 'react';
import { View } from '../../components/contentView';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import Image from '../../components/Image';
import snowLand from '../../assets/images/snowLand.png';

const Winter: React.FC = props => {
  return (
    <View {...props}>
      <Image src={snowLand} className={'snowLand'}></Image>
      <MvPageButton type={'mvPageHorizontally'}></MvPageButton>
    </View>
  );
};
export default Winter;
