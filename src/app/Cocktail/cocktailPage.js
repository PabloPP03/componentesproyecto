import CocktailGrid from "./cocktail";

export default function CocktailsPage() {
  const drinks = [
    {
      id: 1,
      name: 'Mojito',
      image: 'url-de-la-imagen.jpg',
      alcohol: 'Ron blanco',
      flavor: 'Refrescante'
    },
    {
      id: 2,
      name: 'Margarita',
      image: 'url-de-la-imagen.jpg',
      alcohol: 'Tequila',
      flavor: 'Cítrico'
    }
  ];

  return <CocktailGrid drinks={drinks} title="Cocktails" />;
}