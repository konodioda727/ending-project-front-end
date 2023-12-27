import React from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word';
import MvPageButton from '../../components/mvPageButton';
import { Stars } from '../../components/randomObjects/star.tsx';
import './index.less';
import cards from '../../assets/images/cards.png'
import Image from '../../components/Image';


const EatCard: React.FC = () => {
    // // const [cardTime,setCardTime]=useState(0)
    // const [cardMoney,setcardMoney]=useState(0)
  return (
    <View>
      <Image
      className={'cards'}
      src={cards}
      imageName={'cards'}
      animationTime={2}
      animationType={{ visible: 'infinite' }}
      ></Image> 
      <Word className={'card-word-1'}>这一年,</Word>
      <Word className={'card-word-2'}>你在食堂刷了</Word>
      <Word className={'card-word-3'}>{`${'cardTime'}次卡`}</Word>
      <Word className={'card-word-4'}>累计消费</Word>
      <Word className={'card-word-5'}>{'cardMoney元'}</Word>
      <Word className={'card-word-6'}>相当于</Word>
      <Word className={'card-word-7'}>{`${'cardMoney'}支眉笔`}</Word>
      <MvPageButton type={'mvPageVertically'} mode={'light'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default EatCard;
