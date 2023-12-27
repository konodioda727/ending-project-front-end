import React from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import Image from '../../components/Image';
import snowman from '../../assets/images/snowman.png';
import snowflower from '../../assets/images/snowflower.png';
import snowLand from '../../assets/images/snowLand.png';

const Winter: React.FC = () => {
  // const [passday,setpassday]=useState(0);
  // const [wintercounter,setwintercounter]=useState(0)
  return (
    <View>
      <Image src={snowLand} className={'snowLand'}></Image>
      <Image src={snowman} className={'snowman'}></Image>
      <OrderedElem className={'winter-OrderedElem-1'}>
        这是你来到华师的
      </OrderedElem>
      <OrderedElem
        className={'winter-OrderedElem-2'}
      >{`第${'passday'}天`}</OrderedElem>
      <OrderedElem className={'winter-OrderedElem-3'}>你已经在华师</OrderedElem>
      <OrderedElem
        className={'winter-OrderedElem-4'}
      >{`度过了${'wintercounter'}个冬天`}</OrderedElem>
      <OrderedElem>
        <img className={'snowflower-1 snow-running'} src={snowflower}></img>
      </OrderedElem>
      <OrderedElem>
        <img className={'snowflower-2 snow-running'} src={snowflower}></img>
      </OrderedElem>
      <OrderedElem>
        <img className={'snowflower-3 snow-running'} src={snowflower}></img>
      </OrderedElem>
      <OrderedElem>
        <img className={'snowflower-4 snow-running'} src={snowflower}></img>
      </OrderedElem>
      <OrderedElem>
        <img className={'snowflower-5 snow-running'} src={snowflower}></img>
      </OrderedElem>

      <MvPageButton type={'mvPageVertically'} mode={'dark'}></MvPageButton>
    </View>
  );
};
export default Winter;
