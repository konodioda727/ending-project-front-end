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
import Study from '../study';
import EatCard from '../eat-card';
import RankCover from '../rankCover';
import Rank from '../rank';

const App: React.FC = () => {
  return (
    <>
      <GradientPage></GradientPage>
      <ContentView>
         <LoadingPage></LoadingPage>
        <NameInput></NameInput> 
         <Entrance></Entrance> 
        <SchoolTime></SchoolTime>
        <BatteryAlert></BatteryAlert> 
        <Winter></Winter>
         <EatCard></EatCard> 
        <Study></Study>
        <RankCover></RankCover>
        <Rank></Rank>
      </ContentView>
    </>
  );
};

export default App;
