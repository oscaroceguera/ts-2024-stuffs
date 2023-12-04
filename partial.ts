interface MovieCharacter {
  firstname: string;
  name: string;
  movie: string;
}

function registerCharacter(character: Partial<MovieCharacter>) {}

// 👍
registerCharacter({
  firstname: "Frodo",
});

// 👍
registerCharacter({
  firstname: "Frodo",
  name: "Baggins",
});
