interface MovieCharacter {
  firstname?: string;
  name?: string;
  movie?: string;
}

function hireActor(character: Required<MovieCharacter>) {}

// 👍
hireActor({
  firstname: "Frodo",
  name: "Baggins",
  movie: "The Lord of the Rings",
});

// 👎
hireActor({
  firstname: "Frodo",
  name: "Baggins",
});
