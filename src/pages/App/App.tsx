import React from 'react';
import GradientPage from '../../components/gradientPage';
import './App.css';
import ContentView from '../../components/contentView';
import Entrance from '../entrance';
import Winter from '../winter';
import LoadingPage from '../loadingPage';
import BatteryAlert from '../batteryAlert';
import ElectronicBike from '../electronicBike';

const App: React.FC = () => {
  return (
    <>
      <GradientPage></GradientPage>
      <ContentView>
        <LoadingPage></LoadingPage>
        <Entrance></Entrance>
        <BatteryAlert></BatteryAlert>
        <Winter></Winter>
        <ElectronicBike></ElectronicBike>
      </ContentView>
    </>
  );
};

export default App;
