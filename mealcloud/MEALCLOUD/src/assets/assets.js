import drink1 from './drink1.jpg';
import noodles1 from './noodles1.png';
import noodles2 from './noodles2.png';
import pasta1 from './pasta1.png';
import pizza1 from './pizza.png';
import pizza2 from './pizza2.png';
import reactLogo from './react.svg';

export const categoryItem = [
  { id: 1, category_title: "All", image: reactLogo },
  { id: 2, category_title: "Pizza", image: pizza1 },
  { id: 3, category_title: "Noodles", image: noodles1 },
  { id: 4, category_title: "Pasta", image: pasta1 },
  { id: 5, category_title: "Drinks", image: drink1 },
];


export const product = [
  {
    _id: "p1",
    name: "Margherita Pizza",
    description: "Classic cheese pizza with fresh basil.",
    price: 120,
    image: pizza1,
    category: "Pizza",
    date: 1716634345448,
  },
  {
    _id: "p2",
    name: "Pepperoni Pizza",
    description: "Spicy pepperoni slices on melted cheese.",
    price: 140,
    image: pizza2,
    category: "Pizza",
    date: 1716634345448,
  },
  {
    _id: "p3",
    name: "Vegetable Noodles",
    description: "Stir-fried noodles with assorted veggies.",
    price: 100,
    image: noodles1,
    category: "Noodles",
    date: 1716634345448,
  },
  {
    _id: "p4",
    name: "Chicken Noodles",
    description: "Noodles with tender chicken and soy sauce.",
    price: 110,
    image: noodles2,
    category: "Noodles",
    date: 1716634345448,
  },
  {
    _id: "p5",
    name: "Pasta Alfredo",
    description: "Creamy Alfredo pasta with mushrooms.",
    price: 130,
    image: pasta1,
    category: "Pasta",
    date: 1716634345448,
  },
  {
    _id: "p6",
    name: "Chilled Orange Juice",
    description: "Freshly squeezed, served cold.",
    price: 60,
    image: drink1,
    category: "Drinks",
    date: 1716634345448,
  },
];


const assets = {
  drink1,
  noodles1,
  noodles2,
  pasta1,
  pizza1,
  pizza2,
  reactLogo,
};

export default assets;
