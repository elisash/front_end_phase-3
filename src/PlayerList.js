import React from "react";
import Card from "./Card";



function PlayerList({filtered}) {
  

const allPlayers = filtered.map((playerObject)=>{
  return <Card key={playerObject.id} playerObject={playerObject}/>
 })

  return (
    <ul className="cards">{ allPlayers}</ul>
  );
}

export default PlayerList;