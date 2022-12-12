import {useEffect, useState} from "react";
import FilterBtns from "./FilterBtns";
import NewPlayerForm from "./NewPlayerForm";
import PlayerList from "./PlayerList";
import Search from "./Search";


function PlayerPage() {

  const[playerInfo, setPlayerInfo]= useState([])
  const[searched, setSearched] = useState("")


  useEffect(()=>
  { fetch('http://localhost:9292/players')
  .then(res => res.json())
  .then(playerData => setPlayerInfo(playerData))
  }, [])

  function addPlayer(newPlayer){
    setPlayerInfo([...playerInfo, newPlayer])

  }

  const filtered = playerInfo.filter((player)=>{
    return player.name.toLowerCase().includes((searched.toLowerCase()))
  })
  function updatedArray(deletedPlayer) {
    const updatedPlayers = playerInfo.filter((player) => {
      return player.id !== deletedPlayer.id;
    });
    setPlayerInfo(updatedPlayers);
  }
  function filterPosition(position){
  const filterRoles = playerInfo.filter(pos =>pos.position===position)
  setPlayerInfo(filterRoles)
  }
  function updateRating(changeRating){
    
    const updatedRatingArray = playerInfo.map(playerRating=>{
      if(playerRating.id===changeRating.id){
        return changeRating;
      }else{
        return playerRating
      }
    });
    setPlayerInfo(updatedRatingArray)
  }
 

  return (
    <main>
      
      <NewPlayerForm addPlayer={addPlayer} />
      <Search searched={searched} setSearched={setSearched}/>
      <FilterBtns setFilterValue={filterPosition}/>
      <PlayerList filtered={filtered} onDelete={updatedArray} updatedRating={updateRating}/>
    </main>
  );
}

export default PlayerPage;
