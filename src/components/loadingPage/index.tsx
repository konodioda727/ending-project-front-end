import React, { useEffect } from 'react';
import { View } from '../contentView';
import Word from '../word';
import { loadingPageConfig } from '../../configs/loadingPageConfig.ts';
import { fileMapType, fileNameType } from '../types/loadingPageTypes.ts';
import { Stars } from '../randomObjects/star.tsx';

const FakeLoadingPage: React.FC = props => {
  const { preloadConfig, loadingTime } = loadingPageConfig;
  useEffect(() => {
    appendPreloadFiles(preloadConfig);
    const timer = setTimeout(() => {
      const evt = new Event('mvPageVertically');
      dispatchEvent(evt);
      clearTimeout(timer);
    }, loadingTime);
    return () => {};
  }, []);
  return (
    <View {...props}>
      <Word>loading...</Word>
      <Stars></Stars>
    </View>
  );
};

export default FakeLoadingPage;

const stringMap: fileMapType = {
  jpg: 'image',
  jpeg: 'image',
  gif: 'image',
  svg: 'image',
  png: 'image',
  ttf: 'font',
};
function appendPreloadFiles(loadingPageConfig: string[]) {
  loadingPageConfig.forEach((preloadURL: string) => {
    const tmpLink = document.createElement('link');
    const tag = getTag(preloadURL);
    tmpLink.href = `/src/assets/${preloadURL}`;
    tmpLink.rel = 'preload';
    if (tag) tmpLink.as = tag;
    if (tag === 'font') {
      tmpLink.type = 'font/ttf';
      tmpLink.crossOrigin = 'anonymous';
    }
    document.head.appendChild(tmpLink);
  });
}
function getTag(testString: string) {
  const suffix = /\.(jpg|jpeg|png|ttf|svg|gif)$/i;
  const matches = testString.match(suffix);
  if (matches?.length) {
    console.log(matches[1]);
    return stringMap[matches[1] as fileNameType];
  }
}
