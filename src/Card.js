import {useState} from "react";
    function Card({playerObject,onDelete,updatedRating}){

const[inStock, setInStock] = useState(true)
const [rating,setRating] = useState("")


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
function postRating(){
     
  //const setRating= [...playerObject.rating,rating]
  fetch(`http://localhost:9292/players/${playerObject.id}`,{
   method:"PATCH",
   headers:{"content-type":"application/json"},
   body:JSON.stringify({rating:rating})
  })
  .then(r=>r.json())
  .then((changeRating)=>updatedRating(changeRating))

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
     {<input type="text"
        id="change-rating"
        placeholder="Change Rating"
        onChange={e=>setRating(e.target.value)}
        value={rating}>
         </input>}
         <button id ="rating-form"onClick={postRating}>Change Rating</button>
     


    
   </div>
  );
}




    

export default Card;











