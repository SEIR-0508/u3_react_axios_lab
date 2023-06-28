import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";

const FilmsList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}films`);
      setFilms(response.data.results);
      console.log(response);
    };
    getFilms();
  }, []);

  let arr = ["films", "created", "edited", "url"];
  let blank = "";
  return (
    <div className="grid">
      {films.map((film) => (
        <div key={film.name} className="starships">
          {Object.keys(film)
            .slice(0, 5)
            .map((value) => (
              <h3 key={value}>{!arr.includes(value) ? film[value] : null}</h3>
            ))}

          {/* <h3>Name: {starship.name} </h3>
          <h3>Model: {starship.model}</h3>
          <h3>Manufactured by {starship.manufacturer}</h3> */}
        </div>
      ))}
    </div>
  );
};

// const FilmsList = () => {
//   return <div>film</div>;
// };
export default FilmsList;
