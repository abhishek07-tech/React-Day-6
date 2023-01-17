import { useEffect, useState } from "react";
import { RestraurantList } from "../constant";
import RestraurantCard from "./RestaurentCard";
import { useState, useEffect } from "react";
//  body

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(RestraurantList);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json)
  }
  return (
    <>
      <div className="search-Container">
        <input
          type="text"
          className="search-input"
          place-holder="search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            //update the state - restaurants
            setRestaurants(data);
          }}
        >
          search
        </button>
      </div>

      {/* restrorantList */}

      <div className="restrorant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestraurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
