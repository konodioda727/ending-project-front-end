import React, { useState } from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem';
import './index.less';
import Image from '../../components/Image';
import ccnubox from '../../assets/images/ccnubox.png';
import cloud from '../../assets/images/cloud.png';
import { Stars } from '../../components/randomObjects/star.tsx';
import defaultMusic from '../../assets/music/BackgroundMusic.mp3';

const Winter: React.FC = () => {
  const Eve = new Event('mvPageVertically');
  const [nikename, setnickename] = useState('');
  const audio = new Audio(defaultMusic);
  audio.onended = function () {
    audio.play();
  };
  const handleClick = () => {
    audio.volume = 0.5;
    audio.play();
    if (nikename) dispatchEvent(Eve);
  };
  const handleBlur = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <View disableScroll>
      <Image src={ccnubox} className={'ccnubox-large'}></Image>
      <Image src={cloud} className={'cloud-first'}></Image>
      <OrderedElem className={'name-ask'}>你的名字是？</OrderedElem>
      <OrderedElem>
        <input
          type="text"
          className={'name-input'}
          value={nikename}
          onChange={e => setnickename(e.target.value)}
          onBlur={handleBlur}
          placeholder="请输入你的名字"
        />
      </OrderedElem>
      <OrderedElem>
        <div
          className={`name-${nikename == '' ? 'unready' : 'ready'}`}
          onClick={handleClick}
        >
          生成我的年度报告
        </div>
      </OrderedElem>
      <Stars numRange={[4, 7]} posRange={{ x: [20, 80], y: [10, 40] }}></Stars>
    </View>
  );
};
export default Winter;
