import { useEffect } from "react";
import { useState } from "react";


function RandomZoo() {

    const [randomAnimal,SetRandomAnimal] = useState("Animal Is Here")

useEffect(() => {
    getAnimal()
}, [])

const getAnimal = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
    headers: {
        method: "GET",

        "Accept": "application/json",
      },
});
const data = await response.json()
SetRandomAnimal(data)
}



return (
    <div className="container">   
        <h1>Random Animal</h1>
            <article>
                <img src={randomAnimal.image_link}></img>
                <p>Latin Name: {randomAnimal.latin_name}</p>
                <p>Name: {randomAnimal.name}</p>
                <p>Habitat: {randomAnimal.habitat}</p>
                <p>Diet: {randomAnimal.diet}</p>
                <p>Location: {randomAnimal.geo_range}</p>

            </article>
       <button type="button" className="btn" onClick={getAnimal}>
           Get New Animal
       </button>
    </div>
);
  }
  
  export default RandomZoo;