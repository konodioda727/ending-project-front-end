import React from 'react';
import GradientPage from '../../components/gradientPage';
import './App.css';
import ContentView from '../../components/contentView';
import Entrance from '../entrance';
import Word from '../../components/word';
import { View } from '../../components/contentView';
import MvPageButton from '../../components/mvPageButton';

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
      </ContentView>
    </>
  );
};

export default App;
