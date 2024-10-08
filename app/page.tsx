

import Image from "next/image";
import { CarCard, Hero } from "./components";
import SearchBar from "./components/SearchBar";
import CustomFilter from "./components/CustomFilter";
import { fetchCars } from "./components/utils";

export default async function Home() {

const allCars = await fetchCars();

const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div 
          className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>

      {
        !isDataEmpty ? (
            <section>
              <div className="home__cars-wraper">
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>
            </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Opss, no result</h2>
            <p>{allCars?.mesage}</p>
          </div>
        )
      }



      </div>
    </main>
  );
}
