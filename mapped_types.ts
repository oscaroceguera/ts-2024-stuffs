interface Character {
  playInFantasyMovie: () => void;
  playInActionMovie: () => void;
}

type toFlags<Type> = { [Property in keyof Type]: boolean };

type characterFeatures = toFlags<Character>;

/*
  equal to

  type characterFeature = {
    playInFantasyMovie: boolean;
    playInActionMovie: boolean;
  }
*/
