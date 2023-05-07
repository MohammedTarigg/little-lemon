import roastedPotato from "./assets/menu/starters/roasted-potato.jpg";
import sOTD from "./assets/menu/starters/soup-of-the-day.jpg";
import greekSalad from "./assets/menu/salads/greeksalad.png";
import cesarSalad from "./assets/menu/salads/cesar-salad.jpg";
import beefTenderolin from "./assets/menu/mains/beef-tenderolin.jpg";
import bruchetta from "./assets/menu/mains/bruchetta.png";
import chickenBurger from "./assets/menu/mains/chicken-burger.jpg";
import crispyFreshsalmon from "./assets/menu/mains/crispy-fresh-salmon.jpg";
import wagyuBeefBurger from "./assets/menu/mains/wagyu-beef-burger.jpg";
import frenchFries from "./assets/menu/sides/french-fries.jpg";
import sweetCorn from "./assets/menu/sides/sweet-corn.jpg";
import whiteRice from "./assets/menu/sides/white-rice.jpg";
import cremeCaramel from "./assets/menu/desserts/creme-caramel.jpg";
import deliceAuCafe from "./assets/menu/desserts/delice-au-cafe.jpg";
import lemonDessert from "./assets/menu/desserts/lemondessert.png";

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export function fetchAPI(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}
export function submitAPI(formData) {
  return true;
}

export const dishes = [
  [
    {
      name: "roasted potato",
      description: "Caesar salad topped with marinated chicken.",
      image: roastedPotato,
    },
    {
      name: "soup of the day",
      description: "Soup of the day.",
      image: sOTD,
    },
  ],
  [
    {
      name: "Greek Salad",
      description: "Delicious special greek salad.",
      image: greekSalad,
    },
    {
      name: "chicken cesar salad",
      description: "Caesar salad topped with marinated chicken.",
      image: cesarSalad,
    },
  ],
  [
    {
      name: "wagyu beef burger",
      description:
        "Wagyu beef burger with duck liver and black truffle butter.",
      image: wagyuBeefBurger,
    },
    {
      name: "beef tenderolin with potato",
      description: "Beef tenderloin with potato gratin and gravy sauce.",
      image: beefTenderolin,
    },
    {
      name: "bruchetta",
      description: "Bruchetta with tomatoes.",
      image: bruchetta,
    },
    {
      name: "chicken burger",
      description: "Spicy crispy chicken burger served with fries.",
      image: chickenBurger,
    },
    {
      name: "crispy fresh salamon",
      description:
        "Crispy fresh salmon fillet with crushed potatoes. prawns and lemon butter dill sauce.",
      image: crispyFreshsalmon,
    },
  ],
  [
    {
      name: "french fries",
      description: "French fries.",
      image: frenchFries,
    },
    {
      name: "white rice",
      description: "White rice.",
      image: whiteRice,
    },
    {
      name: "sweet corn",
      description: "Sweet corn.",
      image: sweetCorn,
    },
  ],
  [
    {
      name: "creme caramel",
      description: "Creme caramel.",
      image: cremeCaramel,
    },
    {
      name: "delice au cafe",
      description: "Delice au cafe.",
      image: deliceAuCafe,
    },
    {
      name: "lemon dessert",
      description: "Lemon cheese cake.",
      image: lemonDessert,
    },
  ],
];
