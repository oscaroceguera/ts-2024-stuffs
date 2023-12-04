// typeof allows you to extract a type from a value. It can be used in a type context to refer to the type of a variable.
// let firstname = "Frodo";
// let name: typeof firstname;

function getCharacter() {
  return {
    firstname: "Frodo",
    name: "Baggins",
  };
}

type Character = ReturnType<typeof getCharacter>;

/*
  equal to

  type Character = {
    firstname: string;
    name: string;
  }
*/
