import getInitPlaces from "../share/getInitPlaces";

import findAllyAndEnimies from "../share/findAllyAndEnemies";

export default function moveCastle(
  endArr,
  type,
  curSquare,
  moveAbleArr,
  state,
  team,
  killOpponent
) {
  for (let i = 0; i <= 8; i++) {
    let square;
    if (type === "plus") {
      square = curSquare + i;
    } else if (type === "minus") {
      square = curSquare - i;
    } else if (type === "plusmultiply") {
      square = curSquare + 8 * i;
    } else if (type === "minusmultiply") {
      square = curSquare - 8 * i;
    }
    console.log(square);
    const [allyOccupied, enemyOccupied] = findAllyAndEnimies(
      team,
      state,
      curSquare,
      square,
      killOpponent
    );
    console.log(killOpponent);

    if (allyOccupied || enemyOccupied) return;

    const sameSquare = endArr.some((end) => end === square);
    i = sameSquare ? 8 : i;
    curSquare !== square && moveAbleArr.push(square);
  }
}
