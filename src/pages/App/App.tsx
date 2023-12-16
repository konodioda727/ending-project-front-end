import React from 'react';
import GradientPage from '../../components/gradientPage';
import './App.css';
import ContentView, { View } from '../../components/contentView';
import Word from '../../components/word';
import { Stars } from '../../components/randomObjects/star.tsx';
import MvPageButton from '../../components/mvPageButton';
import Image from '../../components/Image';
import tmpImage from '../../assets/react.svg';
import Entrance from '../entrance';

const App: React.FC = () => {
  document.addEventListener(
    'touchmove',
    function (event) {
      event.preventDefault();
    },
    { passive: false }
  );

  return (
    <>
      <GradientPage></GradientPage>
      <ContentView>
        <Entrance></Entrance>
        <View>
          <Word style={{ position: 'absolute', top: '20px', left: '220px' }}>
            123
          </Word>
          <Word style={{ position: 'absolute', top: '200px', left: '80px' }}>
            123
          </Word>
          <Word style={{ position: 'absolute', top: '120px', left: '40px' }}>
            123
          </Word>
          <Word style={{ position: 'absolute', top: '100px', left: '140px' }}>
            123
          </Word>
          <Word style={{ position: 'absolute', top: '80px', left: '40px' }}>
            123
          </Word>
          <Word style={{ position: 'absolute', top: '900px', left: '340px' }}>
            123
          </Word>
          <MvPageButton type={'mvPageVertically'}></MvPageButton>
          <Image src={tmpImage}></Image>
          <Stars range={[8, 16]}></Stars>
        </View>
        <View>
          <Word style={{ position: 'absolute', top: '20px', left: '220px' }}>
            123
          </Word>
          <Word style={{ position: 'absolute', top: '200px', left: '80px' }}>
            123
          </Word>
          <Word style={{ position: 'absolute', top: '120px', left: '40px' }}>
            123
          </Word>
          <Word style={{ position: 'absolute', top: '100px', left: '140px' }}>
            123
          </Word>
          <Word style={{ position: 'absolute', top: '80px', left: '40px' }}>
            123
          </Word>
          <Word style={{ position: 'absolute', top: '900px', left: '340px' }}>
            123
          </Word>
          <MvPageButton type={'mvPageVertically'}></MvPageButton>
          <Stars></Stars>
        </View>
      </ContentView>
    </>
  );
};

export default App;
