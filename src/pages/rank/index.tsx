import React, { useEffect, useState } from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem';
import MvPageButton from '../../components/mvPageButton';
import './index.less';
import { Stars } from '../../components/randomObjects/star.tsx';

const Rank: React.FC = () => {
  const [fontReady, setFontReady] = useState<boolean>(false);
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontReady(true);
    });
  }, []);
  return (
    fontReady && (
      <View>
        <OrderedElem className="rank-title-box">
          <div className="rank-title">华师年度巅峰榜</div>
        </OrderedElem>
        <OrderedElem className="rank-box rank-box-1">
          <div className="rank-content">
            <div className="rank-content-word-1">单日最高消费</div>
            <div className="rank-content-word-2">X元</div>
            <div className="rank-content-word-3">“有钱任性”</div>
          </div>
        </OrderedElem>
        <OrderedElem className="rank-box rank-box-2">
          <div className="rank-content">
            <div className="rank-content-word-1">年度最受欢迎食堂</div>
            <div className="rank-content-word-2">XXX</div>
            <div className="rank-content-word-3">“我是万人迷”</div>
          </div>
        </OrderedElem>
        <OrderedElem className="rank-box rank-box-3">
          <div className="rank-content">
            <div className="rank-content-word-1">日平均最高消费</div>
            <div className="rank-content-word-2">X元</div>
            <div className="rank-content-word-3">“挥金如土”</div>
          </div>
        </OrderedElem>
        <OrderedElem className="rank-box rank-box-4">
          <div className="rank-content">
            <div className="rank-content-word-1">最高电费</div>
            <div className="rank-content-word-2">X元</div>
            <div className="rank-content-word-3">“空调从来不关”</div>
          </div>
        </OrderedElem>
        <MvPageButton type={'mvPageVertically'} mode={'light'}></MvPageButton>
        <Stars></Stars>
      </View>
    )
  );
};
export default Rank;
