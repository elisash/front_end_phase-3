import {useState} from "react";


function NewPlayerForm({addPlayer}) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [club, setClub] = useState('')
  const [nationality, setNationality] = useState('')
  const [position, setPosition] = useState('')
  const [rating, setRating] = useState('')
  const [height, setHeight] = useState(0)

function handleClearForm(){
  setName('')
  setImage('')
  setClub('')
  setNationality('')
  setPosition('')
  setRating('')
  setHeight(0)
}
  

  function handleSubmit(event){
    event.preventDefault();


  fetch('http://localhost:9292/players',{
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify( {

    name:name,
    image:image, 
    club:club,
    nationality:nationality,
    position:position,
    rating:rating,
    height:height
  
  })
})
.then((response) => response.json())
.then((data) => {addPlayer(data)})


  }

  return (
    <div className="new-player-form">
      <h2>New Player</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Player Name" onChange={e => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <input type="text" name="club" placeholder="Club" onChange={e => setClub(e.target.value)}/>
        <input type="text" name="nationality" placeholder="Nationality" onChange={e => setNationality(e.target.value)}/>
        <input type="text" name="height" placeholder="Height" onChange={e => setHeight(e.target.value)}/>
        <input type="text" name="position" placeholder="Position" onChange={e => setPosition(e.target.value)}/>
        <input type="text" name="rating" placeholder="Rating" onChange={e => setRating(e.target.value)}/>
        <button type="submit">Add Player</button>
        <button onClick={handleClearForm}>Clear Form</button>

      </form>
    </div>
  );
}

export default NewPlayerForm;





