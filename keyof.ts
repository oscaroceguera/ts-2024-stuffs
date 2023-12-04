// The keyof operator takes the keys of an interface or an object and produces a union type.
interface MovieCharacter {
  firstname: string;
  name: string;
  movie: string;
}

type characterProps = keyof MovieCharacter;

// Got it! But when is this useful. We could also type the characterProps out.
type characterProps2 = "firstname" | "name" | "movie";

interface PizzaMenu {
  starter: string;
  pizza: string;
  beverage: string;
  dessert: string;
}

const simpleMenu: PizzaMenu = {
  starter: "Salad",
  pizza: "Pepperoni",
  beverage: "Coke",
  dessert: "Vanilla ice cream",
};

function adjustMenu(
  menu: PizzaMenu,
  menuEntry: keyof PizzaMenu,
  change: string
) {
  menu[menuEntry] = change;
}

adjustMenu(simpleMenu, "pizza", "Hawaii"); // 👍
adjustMenu(simpleMenu, "beverage", "Beer"); // 👍
adjustMenu(simpleMenu, "beverdage", "Beer"); // 👎
adjustMenu(simpleMenu, "coffe", "ber"); // 👎
