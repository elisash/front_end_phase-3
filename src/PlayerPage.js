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

  return (
    <main>
      <NewPlayerForm addPlayer={addPlayer} />
      <Search searched={searched} setSearched={setSearched}/>
      <FilterBtns/>
      <PlayerList filtered={filtered}/>
    </main>
  );
}

export default PlayerPage;
