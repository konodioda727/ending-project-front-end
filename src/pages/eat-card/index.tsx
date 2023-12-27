import React from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem';
import MvPageButton from '../../components/mvPageButton';
import { Stars } from '../../components/randomObjects/star.tsx';
import './index.less';
import cards from '../../assets/images/cards.png';
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
      <OrderedElem className={'card-OrderedElem-1'}>这一年,</OrderedElem>
      <OrderedElem className={'card-OrderedElem-2'}>你在食堂刷了</OrderedElem>
      <OrderedElem
        className={'card-OrderedElem-3'}
      >{`${'cardTime'}次卡`}</OrderedElem>
      <OrderedElem
        className={'card-OrderedElem-4'}
      >{`累计消费${'cardMoney'}元`}</OrderedElem>
      <OrderedElem className={'card-OrderedElem-5'}>相当于</OrderedElem>
      <OrderedElem
        className={'card-OrderedElem-6'}
      >{`${'cardMoney'}次疯狂星期四`}</OrderedElem>
      <MvPageButton type={'mvPageVertically'} mode={'light'}></MvPageButton>
      <Stars></Stars>
    </View>
  );
};
export default EatCard;
