import React from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import Image from '../../components/Image';
import snowLand from '../../assets/snowLand.png'

const Winter: React.FC = props => {
  return (
    <View {...props}>
      <Image
        src={snowLand}
      ></Image>
      <MvPageButton type={'mvPageHorizontally'}></MvPageButton>
    </View>
  );
};
export default Winter;
