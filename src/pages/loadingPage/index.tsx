import React, { useEffect, useState } from 'react';
import { View } from '../../components/contentView';
import OrderedElem from '../../components/OrderedElem';
import { Stars } from '../../components/randomObjects/star.tsx';
import { LoadingPageProps } from '../../components/types/loadingPageTypes.ts';
import { preload } from '../../configs/preloadConfig.ts';
const FakeLoadingPage: React.FC = () => {
  return (
    <View>
      <OrderedElem>loading...</OrderedElem>
      <Load></Load>
      <Stars></Stars>
    </View>
  );
};

export default FakeLoadingPage;

export const Load: React.FC<LoadingPageProps> = props => {
  const { stat } = props;
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  function loadImages(
    urls: string[],
    callback: (imgs: HTMLImageElement[]) => void
  ) {
    let loadedCount = 0;
    const imgList: HTMLImageElement[] = [];

    urls.forEach((url, index) => {
      const img = new Image();
      img.onload = function () {
        img.onload = null;
        loadedCount++;
        imgList[index] = img;
        if (loadedCount === urls.length) {
          callback(imgList);
          setImgLoaded(true);
        }
      };

      img.onerror = function () {
        console.error(`${img.src} load failed`);
        loadedCount++;
        imgList[index] = img;

        if (loadedCount === urls.length) {
          callback(imgList);
        }
      };

      img.src = `/src/assets/images/${url}`;
      console.log(img);
    });
  }

  useEffect(() => {
    loadImages(preload, imgList => {
      console.log(imgList, 'imgUrlList');
    });
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      const evt = new Event('mvPageVertically');
      if (stat === 'visible' && imgLoaded) dispatchEvent(evt);
    });
  }, [stat, imgLoaded]);

  return <></>;
};
