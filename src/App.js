import React from "react"
import Title from "./components/Title"
import Pokemon from "./components/Pokemon"

function App() {
  return (
    <div>
      <main>
        <Title content="React is fun" />
        <Pokemon
          name = "Charrizard"
          weight = "90"
          awesome = {false}
          terrifying = {false}
          abillities = {'Blaze, Solar power, Though claws, Drought'}
        />
        <Pokemon
          name = "Bulbasaur"
          weight = "6.9"
          awesome = {true}
          terrifying = {false}
          abilities = {"Overgrow, Chlorophyll"}
        />
         <Pokemon
          name = "Mewtwo"
          weight = "122"
          awesome = {true}
          terrifying = {true}
          abilities = {"Pressure, Unnerve, Steadfast, Insomnia"}
        />
         <Pokemon
          name = "Mega beedrill"
          weight = "65"
          awesome = {false}
          terrifying = {true}
          abilities = {"intimidate, Unnerve"}
        />
      </main>

      <header>
        <p>welcome to Codaisseur.</p>
      </header>
    </div>
  )
}

export default App