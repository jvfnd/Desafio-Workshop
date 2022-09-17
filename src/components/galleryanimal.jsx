import { useEffect } from "react";
import { useState } from "react";


function RandomGalleryAnimal() {

    const [randomGalleryAnimal,SetRandomGalleryAnimal] = useState([])

useEffect(() => {
    getGalleryAnimal()
}, [])

const getGalleryAnimal = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/5", {
    headers: {
        
        method: "GET",
        "Accept": "application/json",
      },
});
const data = await response.json()
SetRandomGalleryAnimal(data)
console.log(response)
}


return (
    <div className="container">   
        <h1>Random Animal</h1>
            <article>
                <img src={randomGalleryAnimal.image_link}></img>
                <p>{randomGalleryAnimal.latin_name}</p>
                <p>{randomGalleryAnimal.name}</p>
                <p>{randomGalleryAnimal.habitat}</p>
                <p>{randomGalleryAnimal.diet}</p>
                <p>{randomGalleryAnimal.geo_range}</p>

            </article>
       <button type="button" className="btn" onClick={getGalleryAnimal}>
            Get New Animals
       </button>
    </div>
);
  }
  
  export default RandomGalleryAnimal;