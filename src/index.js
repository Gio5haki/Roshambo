class Game {
  constructor(name, player1, player2, bestOf = 3) {
    this._name = name;
    this._round = 0;
    this._bestOf = bestOf;
    this._player1 = new Player(player1);
    this._player2 = new Player(player2);
  }

  // Start method calls playRound
  start() {
    this.playRound();
  }

  //Playround method calls whoWins
  playRound() {
    this._round++;
    this._player1.createTurnMove();
    this._player2.createTurnMove();
    this.whoWins();
  }

  whoWins() {
    const move1 = this._player1._move._name;
    const move2 = this._player2._move._name;
    if (move1 === "paper") {
      if (move2 === "scissors") {
        this._player1.addLoss();
        this._player2.addWin();
        this._roundWinner = this._player2;
        console.log("Player 2 won round " + this._round);
      } else if (move2 === "rock") {
        this._player1.addWin();
        this._player2.addLoss();
        this._roundWinner = this._player1;
        console.log("Player 1 won round " + this._round);
      } else {
        console.log("Draw round");
      }
    }
    if (move1 === "scissors") {
      if (move2 === "paper") {
        this._player1.addWin();
        this._player2.addLoss();
        this._roundWinner = this._player1;
        console.log("Player 1 won round " + this._round);
      } else if (move2 === "rock") {
        this._player1.addLoss();
        this._player2.addWin();
        this._roundWinner = this._player2;
        console.log("Player 2 won round " + this._round);
      } else {
        console.log("Draw round");
      }
    }
    if (move1 === "rock") {
      if (move2 === "paper") {
        this._player1.addLoss();
        this._player2.addWin();
        this._roundWinner = this._player2;
        console.log("Player 2 won round " + this._round);
      } else if (move2 === "scissors") {
        this._player1.addWin();
        this._player2.addLoss();
        this._roundWinner = this._player1;
        console.log("Player 1 won round " + this._round);
      } else {
        console.log("Draw round");
      }
    }
  }
}


class Player {
  constructor(name) {
    this._name = name;
    this._score = {
      wins: 0,
      losses: 0
    };
  }

  createTurnMove() {
    this._move = new Move();
  }

  addLoss() {
    this._score.losses += 1;
  }
  addWin() {
    this._score.wins += 1;
  }
}


class Move {
  constructor() {
    const moves = ["rock", "paper", "scissors"];
    this._name = moves[Math.floor(Math.random() * moves.length)];
  }
  printMove() {
    alert(this._name);
  }
}

const rps = new Game("rps", "James", "liv");
