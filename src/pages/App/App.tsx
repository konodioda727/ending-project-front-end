import React, { useState } from 'react';
import GradientPage from '../../components/gradientPage';
import './App.css';
import ContentView, { View } from '../../components/contentView';
import Word from '../../components/word';
import { Stars } from '../../components/randomObjects/star.tsx';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
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
        <View>
          <Word style={{ position: 'absolute', top: '60px', left: '33px' }}>
            123
          </Word>
          <Word style={{ position: 'absolute', top: '20px', left: '220px' }}>
            123
          </Word>
          <Stars></Stars>
        </View>
        <View>
          <div>489879</div>
          <Stars></Stars>
        </View>
      </ContentView>

      <div className="card">
        <button
          onClick={() => {
            const event = new Event('mvPageVertically');
            dispatchEvent(event);
            setCount(count => count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
};

export default App;
