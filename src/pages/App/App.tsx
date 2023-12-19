import React from 'react';
import GradientPage from '../../components/gradientPage';
import './App.css';
import ContentView from '../../components/contentView';
import Entrance from '../entrance';
import Winter from '../winter';

const App: React.FC = () => {
  document.body.style.overflow = 'hidden';

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
