import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import StarshipList from "./StarshipList";
import StarshipPage from "./StarshipPage";
import FilmList from "./FilmList";
import FilmPage from "./FilmPage";
import PlanetList from "./PlanetList";
import PlanetPage from "./PlanetPage";
import CharacterList from "./CharacterList";
import CharacterPage from "./CharacterPage";
import NotFound from "./NotFound";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/starships" element={<StarshipList />}></Route>
      <Route path="/starships/:id" element={<StarshipPage />}></Route>
      <Route path="/films" element={<FilmList />}></Route>
      <Route path="/films/:id" element={<FilmPage />}></Route>
      <Route path="/planets" element={<PlanetList />}></Route>
      <Route path="/planets/:id" element={<PlanetPage />}></Route>
      <Route path="/characters" element={<CharacterList />}></Route>
      <Route path="/characters/:id" element={<CharacterPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Main;
