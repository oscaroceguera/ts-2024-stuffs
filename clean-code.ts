// USE ENUM

// AVOID
// const GENRE = {
//   ROMANTIC: 'romantic',
//   DRAMA: 'drama',
//   COMEDY: 'comedy',
//   DOCUMENTARY: 'documentary',
// }

enum GENRE {
  ROMANTIC,
  DRAMA,
  COMEDY,
  DOCUMENTARY,
}

class Projector {
  configureFilm(genre) {
    switch (genre) {
      case GENRE.ROMANTIC:
        console.log("Romantico");
    }
  }
}

// Prefer immutability

// AVOID
// interface Config2 {
//   host: string;
//   port: string;
//   db: string;
// }

// DO
interface Config2 {
  readonly host: string;
  readonly port: string;
  readonly db: string;
}

// type vs. interface
/*
  Use type when you might need a union or intersection.
  Use an interface when you want extends or implements.
  There is no strict rule, however, use the one that works for you.
*/

// AVOID
// interface EmailConfig {}
// interface DbConfig {}
// interface Config {}
// type Shape = {}

// DO
type EmailConfig = {
  // ...
};

type DbConfig = {
  // ...
};

type Config = EmailConfig | DbConfig;

// ...

interface Shape {
  // ...
}

class Circle implements Shape {
  // ...
}

class Square implements Shape {
  // ...
}
