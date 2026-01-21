import Image from "next/image";
import Header from "./Header/header";
import CocktailPage from "./Cocktail/cocktailPage";



export default function Home() {
  return (
    <div>
      <Header />
      <CocktailPage />
    </div>
  );
}
