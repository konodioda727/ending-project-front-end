function* keyGenerator() {
  let id = 0;
  while (true) {
    yield `key${id++}`;
  }
}

export const gen = keyGenerator();
