import React from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word';
import MvPageButton from '../../components/mvPageButton';
import Image from '../../components/Image';
import tmpImage from '../../assets/react.svg';
import { Stars } from '../../components/randomObjects/star.tsx';

const Entrance: React.FC = props => {
  return (
    <View {...props}>
      <Word
        firstPage
        style={{ position: 'absolute', top: '60px', left: '33px' }}
      >
        123
      </Word>
      <Word
        firstPage
        style={{ position: 'absolute', top: '20px', left: '220px' }}
      >
        456
      </Word>
      <Image src={tmpImage} firstPage></Image>
      <MvPageButton type={'mvPageHorizontally'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default Entrance;
