export const hit = gameData => {
  gameData.balls = 0;
  gameData.strikes = 0;
  return gameData;
};

export const addBall = gameData => {
  if (gameData.balls >= 3) {
    gameData.balls = 0; //Reset when a player reaches 4 balls
    gameData.strikes = 0;
  } else {
    gameData.balls = gameData.balls + 1;
  }
  return gameData;
};

export const addStrike = gameData => {
  if (gameData.strikes >= 2) {
    //Reset when a player reaches 3 strikes
    gameData.strikes = 0;
    gameData.balls = 0;
  } else {
    gameData.strikes = gameData.strikes + 1;
  }
  return gameData;
};

export const addFoul = gameData => {
  if (gameData.strikes >= 2) return gameData;
  gameData.strikes = gameData.strikes + 1;
  return gameData;
};
