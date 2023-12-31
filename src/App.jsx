import { useState } from "react";
import "./App.css";
import SectionCard from "./components/SectionCard";
import phrases from "./db/spaceCuriosities.json";
import { getRandomElement } from "./utils/random";

const imgArray = ["imgBg1", "imgBg2", "imgBg3", "imgBg4"]
const planetsArray = ["planet1", "planet2", "planet3", "planet4"]


function App() {
  const [phrase, setPhrase] = useState(getRandomElement(phrases))
  const [img, setImg] = useState(getRandomElement(imgArray))
  const [planet, setPlanet] = useState(getRandomElement(planetsArray))

const handleReloadButton = () => {
  setPhrase(getRandomElement(phrases))
  setImg(getRandomElement(imgArray))
  setPlanet(getRandomElement(planetsArray))
}


  return (
    <main className={`imgBgMain ${img}`}>
      <SectionCard handleReloadButton={handleReloadButton} phrase={phrase} planet={planet}/>
    </main>
  );
}

export default App;
