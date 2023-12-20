import React from 'react';
import GradientPage from '../../components/gradientPage';
import './App.css';
import ContentView from '../../components/contentView';
import Entrance from '../entrance';
import Winter from '../winter';
import LoadingPage from '../../components/loadingPage';

const App: React.FC = () => {
  return (
    <>
      <GradientPage></GradientPage>
      <ContentView>
        <LoadingPage></LoadingPage>
        <Entrance></Entrance>
        <Winter></Winter>
        <Winter></Winter>
      </ContentView>
    </>
  );
};

export default App;
