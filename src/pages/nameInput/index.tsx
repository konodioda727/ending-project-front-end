import React,{useState} from 'react';
import { View } from '../../components/contentView';
import Word from '../../components/word';
import './index.less';
import Image from '../../components/Image';
import ccnubox from '../../assets/images/ccnubox.png';
import cloud from '../../assets/images/cloud.png'
import { Stars } from '../../components/randomObjects/star.tsx';


const Winter: React.FC = () => {
    const Eve = new Event('mvPageVertically');
    const [nikename,setnickename]=useState('');
  return (
    <View disableScroll>
      <Image src={ccnubox} className={'ccnubox-large'}></Image>
      <Image src={cloud} className={'cloud-first'}></Image>
      <Word className={'name-ask'}>你的名字是？</Word>
      <Word><input type="text" className={'name-input'} value={nikename} onChange={(e)=>setnickename(e.target.value)} placeholder='请输入你的名字'/></Word>
      <Word><div className={`name-${nikename==''?'unready':'ready'}`} onClick={()=>{if(nikename)dispatchEvent(Eve)}}>生成我的年度报告</div></Word>
      <Stars numRange={[4,7]} posRange={{x:[0.3,0.7],y:[0.1,0.3]}}></Stars>
    </View>
  );
};
export default Winter;
