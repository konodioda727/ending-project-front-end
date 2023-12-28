import React from 'react';
import { View } from '../../components/contentView';
import card from '../../assets/images/card.png';
import Image from '../../components/Image';
import { ImageProps } from '../../components/types/ImageTypes.ts';
import OrderedElem from '../../components/OrderedElem';
import './index.less';

const Conclusion: React.FC = () => {
  const imgProps: ImageProps = {
    src: card,
    alt: 'card',
    className: 'card',
  };
  const handleClick = () => {};
  return (
    <View>
      <OrderedElem className={'conclusion-top'}>@123的年度总结</OrderedElem>
      <OrderedElem
        className={'conclusion-text conclusion-text-1'}
      >{`>最多一天消费XX`}</OrderedElem>
      <OrderedElem
        className={'conclusion-text conclusion-text-2'}
      >{`>最常去的食堂是XX`}</OrderedElem>
      <OrderedElem
        className={'conclusion-text conclusion-text-3'}
      >{`为他含泪贡献了XXX元`}</OrderedElem>
      <OrderedElem
        className={'conclusion-text conclusion-text-4'}
      >{`>宿舍共花费X度电`}</OrderedElem>
      <OrderedElem
        className={'conclusion-text conclusion-text-5'}
      >{`累计XXX元`}</OrderedElem>
      <OrderedElem className={'conclusion-text conclusion-text-6'}>
        {`>累计上了X节课`}
      </OrderedElem>
      <OrderedElem className={'conclusion-text conclusion-text-7'}>
        {`>累计自习X小时`}
      </OrderedElem>
      <OrderedElem>
        <div className="save-pic" onClick={handleClick}>
          保存
        </div>
      </OrderedElem>
      <Image {...imgProps}></Image>
    </View>
  );
};

export default Conclusion;
