import FilterCard from "./components/FilterCard";
import Header from "./components/Header";
import ListingCard from "./components/ListingCard";

export default function App() {

  return (

    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <FilterCard />
        </section>
        <section>
          <ListingCard />
        </section>
      </main>
    </>
  );
}
