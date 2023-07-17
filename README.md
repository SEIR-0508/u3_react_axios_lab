<img src="https://i.imgur.com/go18uJE.jpg">

## SEIR 0508

# Star Wars API -useEffect & React Router &ractice

---

## Intro
In this deliverable, you'll consume the [Star Wars API](https://swapi.dev/api/starships) and render its data. 


## Part 1 - Axios and useEffect
## Setup + Starting Instructions 

1. Create a new react app in this folder
1. Touch a .gitignore file and enter your /node_modules into it so that they are not pushed up to github
1. Create a components folder and touch a number of files: Header, Nav, Main, Home, and StarshipList.jsx. Nest Nav inside of Header, and nest Header and Main inside of App.
1. Import React-Router Dependencies (`npm i react-router-dom`)
1. Create a Nav bar with a link to a "/starship" route, as well as a "/" route for your Landing page.
1. In your Main.jsx, set up Routes to render a `<StarshipsList />` Component in a "/starships" route, as well as a landing page "/" that renders your Home component.  (You can start with boilerplate components to get started). 
1. Your Home component should load up when your react app first loads (localhost:3000/). It can have some Star Wars reference, or a meme, or it can just say "Welcome to our Page" if you're not into Star Wars or Memes.
1. Test your react-router pathing is working to display the correct component
1. Test out the SWAPI data in ThunderClient to see what it looks like and what types of data you'll be working with

## Primary App Goals
1. Obtain all of the starships from the API Endpoint: `https://swapi.dev/api/starships`) and display each ship inside your `<StarshipsList/>` component. 
1. Use `useEffect` to make the request and store it in a stately array (which you can call starShips).
1. Map and render all information from your API call to your /starships route

1. Add links on your navbar to /films, /planets, and /characters, adn the other routes that SWAPI provides
2. Create new components for each of these SWAPI routes, and set up routes for each of these in your Main.jsx file
3. In each of those routes, run a similar API call rendering and mapping data in each component for those endpoints


## Part II - Router Props

When you pull and map data into your `<StarshipsList/>` component,  add a Link to each data card to link to an individual route for that starship. The link should lead to `/starhipsships/<theSelectedShipsId>`, and display the ship's name (<theSelectedShipsId> will need to be edited to be the ship's ID, but you already knew that!)
1. Create a StarshipPage component, which is what will be rendered when you click on each Starship. It will need a Route created as well!
1. When a starship is clicked, `<StarshipPage>` component should be rendered. Pass into the StarshipPage the id parameter from the url. Take a look at the answers from this week's `React-Router` codealong and use it as a guide 
1. When the `<StarshipPage />` component loads, it should make a request to get the full details about the specified ship. Display that ship's name, model, manufacturer, and any other attributes you find interesting. (Hint: useEffect)
1. The StarshipPage should have a "Return to Starship List" link to go back to the List. Hint: you'll set the link to route back to your `StarshipsList` path. 
1. Using this syntax, get your Planets, Vehicles, Films, & People to render out the same way

your code may look something like this:
  
  Index Route (List)
  ```jsx
 //StarshipList.jsx 
  
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function StarshipsList(){

  //setting our state for data to be pulled
  const [starships, setStarships] = useState([])

  useEffect(()=>{
    const getStarships = async() => {
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      setStarships(response.data.results)
      console.log(response)
    }
    getStarships()
  },[])

  let navigate = useNavigate()

  const showShip = (key) => {
    navigate(`${key}`)
  }

  return(
    <div className="starship">
      <h2>List of Starships</h2>
      {
        starships.map((starship, key) => (
          <div key={key} onClick={()=>showShip(key)} className="card">
            <h3>{starship.name}</h3>
          </div>
        ))
      }
    </div>
  )
}
```

Show route (Display)
  Notice how we are using a Ternary / Conditional Statement in our Return, so that the computer knows what to do in the short time before the data loads
  
  ```jsx
  
 import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ShipDetails(){

  //setting up the individiual starship in state
  const [starship, setStarship] = useState()
  //setting up the param to pull to be the ship's ID
  let {id} = useParams()

  useEffect(()=>{
    const getStarship = async() => {
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      setStarship(response.data.results[id])
    }
    getStarship()
  },[])


  return starship ? (
    <div className="detail">
      <h2>Name: {starship.name}</h2>
      ... Lets put more Data here! ... 
      <Link to="/StarshipsList"> Return to starship list</Link>
    </div>
  ) : <h3>Finding starships...</h3>
}
  
```
  
  Using this template, can you create similar List and Show routes for our other SWAPI data?
  
  
  
 
## Stretch Goals
1. Add a `<404/>` component, that is rendered by `React-Router` if no matching path is found, or a bad address added manually in the browser.
1. On both the main list and the single ship view, render a "Loading..." message until the data has finished loading. This can be done with a conditional render that looks at the appropriate piece of state.
1. Enhance the `<StarshipPage>` component to render a `<PilotList>` component that lists the names of the pilots for that starship. This will require making a request for each pilot in the ship's pilots list. (Note that only the Millenium Falcon, TIE Advanced x1, and X-wing have pilots. For the ships with no pilots, show a No Pilots message.)
1.Use a guard operator to render a "Loading..." message until the data has finished loading. This can be done with a conditional render that looks at the appropriate piece of state.
1. Add some custom CSS styling to approximate a cool, sci-fi aesthetic. 


