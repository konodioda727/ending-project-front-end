import React from 'react';
import GradientPage from '../../components/gradientPage';
import './App.css';
import ContentView from '../../components/contentView';
import NameInput from '../nameInput'
import Entrance from '../entrance';
import SchoolTime from '../schoolTime'
import Winter from '../winter';
import LoadingPage from '../loadingPage';
import BatteryAlert from '../batteryAlert';

const App: React.FC = () => {
  return (
    <>
      <GradientPage></GradientPage>
      <ContentView>
        {/* <LoadingPage></LoadingPage> */}
        <NameInput></NameInput>
        <Entrance></Entrance>
        <SchoolTime></SchoolTime>
        <Winter></Winter>
        <BatteryAlert></BatteryAlert>
      </ContentView>
    </>
  );
};

export default App;
