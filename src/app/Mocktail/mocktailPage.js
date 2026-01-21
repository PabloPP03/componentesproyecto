import MocktailGrid from "./mocktail";

export default function MocktailsPage() {
  const drinks = [
    {
      id: 1,
      name: 'Mojito Sin Alcohol',
      image: 'url-de-la-imagen.jpg',
      alcohol: 'Ron blanco',
      flavor: 'Refrescante'
    },
    {
      id: 2,
      name: 'Margarita Sin Alcohol',
      image: 'url-de-la-imagen.jpg',
      alcohol: 'Tequila',
      flavor: 'Cítrico'
    }
  ];

  return <MocktailGrid drinks={drinks} title="Mocktails" />;
}