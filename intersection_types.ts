interface Person {
  name: string;
  firstname: string;
}

interface FootballPlayer {
  club: string;
}

function tranferPlayer(player: Person & FootballPlayer) {}

// 👍
tranferPlayer({
  name: "Ramos",
  firstname: "Sergio",
  club: "PSG",
});

// 👎
tranferPlayer({
  name: "Ramos",
  firstname: "Sergio",
});
