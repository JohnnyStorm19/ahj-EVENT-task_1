import GamePlay from "./GamePlay";
import GameView from "./GameView";
import Cursor from "./components/cursor/Cursor";

document.addEventListener("DOMContentLoaded", () => {

  // это можно засунуть в GameController

  const gameView = new GameView(4);
  const gamePlay = new GamePlay();
  const cursor = new Cursor('.cursor');

  gameView.bindToDom('.game-container');
  gameView.drawBoard('arctic', '[data-id=board]', '.board-container');
  
  gamePlay.start(gameView.addCharacter);

  window.addEventListener('mousemove', cursor.moveCursor);

  gameView.boardEl.addEventListener('click', gamePlay.onCellClick);

});
