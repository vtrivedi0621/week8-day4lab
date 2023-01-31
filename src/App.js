
import { fetchData } from "./services/sw-api";
import React from "react";
import {  useState, useEffect } from "react";
import StarShipCard from "./components/StarShipCard";

  function App() {
  const[starships, setStarShips] = useState([]);
  //console.log(starships);
  useEffect(() => {
    fetchData().then(data=>{
      setStarShips(data)
      console.log(data)
    })
  },[])

    return (
      <div>
        <h1>STAR WARS STARSHIPS</h1>
        <StarShipCard star = {starships}/>
      </div>
    )   
}

export default App;
