import React from "react";
import Card from "./Card";



function PlayerList({filtered,onDelete,updatedRating}) {
  

const allPlayers = filtered.map((playerObject)=>{
  return <Card key={playerObject.id} playerObject={playerObject} onDelete={onDelete} updatedRating={updatedRating}/>
 })

  return (
    <ul className="cards">{ allPlayers} </ul>
  );
}

export default PlayerList;