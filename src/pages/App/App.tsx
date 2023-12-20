import React from 'react';
import GradientPage from '../../components/gradientPage';
import './App.css';
import ContentView from '../../components/contentView';
import Entrance from '../entrance';
import Winter from '../winter';

const App: React.FC = () => {
  return (
    <>
      <GradientPage></GradientPage>
      <ContentView>
        <Entrance></Entrance>
        {/*<Entrance></Entrance>*/}
        <Winter></Winter>
      </ContentView>
    </>
  );
};

export default App;
