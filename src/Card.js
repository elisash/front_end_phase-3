import {useState} from "react";
    function Card({playerObject,onDelete}){

const[inStock, setInStock] = useState(true)


//  function handleClick(){
//   setInStock(!inStock)
//  }
 function handleDelete() {
  fetch(`http://localhost:9292/players/${playerObject.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => onDelete(playerObject));
}


  
 
  return (
    <div className="card">
      <img className="card-image" src={playerObject.image} alt={playerObject.name} />
      <h4>{playerObject.name}</h4>
      <p> <strong>Nationality:</strong> {playerObject.nationality}</p>
      <p> <strong>Height:</strong> {playerObject.height}</p>
      <p> <strong>Club:</strong> {playerObject.club}</p>
      <p> <strong>Position: </strong>{playerObject.position}</p>
      <p> <strong>Rating:</strong> {playerObject.rating}</p>

     
     <button>ADD PLAYER</button>
     <button  onClick={handleDelete}>DELETE PLAYER</button>
     


    
   </div>
  );
}




    

export default Card;











