import React from "react";
import dynamic from "next/dynamic";
import Herosection from "./components/homePage/Herosection";
import CategoriesFood from "./components/homePage/categoriesFood/CategoriesFood";
import RecipesFood from "./components/homePage/recipesFood/RecipesFood";

const ClientsFood = dynamic(
  () => import("./components/homePage/clientsFood/ClientsFood"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="main">
      <Herosection />
      <RecipesFood />
      <ClientsFood />
      <CategoriesFood />
    </main>
  );
}
