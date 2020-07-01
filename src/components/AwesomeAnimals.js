import React from "react"

export default function AwesomeAnimals() {
  
  
  return ( 
    <div>
      {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
        (animal, index) => {
          return (
            <li key={index}>
              Awesomeness level {index + 1}: {animal}
            </li>
          )
        }
      )}
    </div>
  )
}

