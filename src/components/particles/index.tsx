import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Engine, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { loadConfettiPreset } from '@tsparticles/preset-confetti';
import { loadEmittersPlugin } from '@tsparticles/plugin-emitters';

const defaultConfig: ISourceOptions = {
  direction: 'top',
  life: {
    duration: 1,
    count: 1,
  },
  rate: {
    delay: 0.1,
    quantity: 14,
  },
  size: {
    width: 0,
    height: 0,
  },
};
const Scrapes = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
      await loadEmittersPlugin(engine); // Load the emitters plugin
      await customInit(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      preset: 'confetti',
      emitters: [
        {
          ...defaultConfig,
          position: {
            x: 10,
            y: 100,
          },
          particles: {
            move: {
              speed: 150,
              angle: 45,
              gravity: {
                enable: true,
                acceleration: -45,
              },
            },
          },
        },
        {
          ...defaultConfig,
          position: {
            x: 90,
            y: 100,
          },
          particles: {
            move: {
              speed: 150,
              angle: -45,
              gravity: {
                enable: true,
                acceleration: -45,
              },
            },
          },
        },
      ],
    }),
    []
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};
export default Scrapes;

async function customInit(engine: Engine): Promise<void> {
  await loadConfettiPreset(engine);
  // Any additional custom initializations
}
