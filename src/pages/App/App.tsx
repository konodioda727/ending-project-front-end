import React from 'react';
import GradientPage from '../../components/gradientPage';
import './App.css';
import ContentView from '../../components/contentView';
import Entrance from '../entrance';
import Winter from '../winter';

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
        <Winter></Winter>
      </ContentView>
    </>
  );
};

export default App;
