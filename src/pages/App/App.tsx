import React, { useState } from 'react';
import GradientPage from '../../components/gradientPage';
import './App.css';
import ContentView, { View } from '../../components/contentView';
import Word from '../../components/word';

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
        </View>
        <View>
          <div>489879</div>
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
