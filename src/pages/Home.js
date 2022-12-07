import React from "react";
import Banner from "../components/Banner";

// import components
import HouseList from "../components/HouseList";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="bg-violet-10">
      <Banner />
      <Search />
      <HouseList />
    </div>
  );
};

export default Home;
