import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import phrases from "./db/spaceCuriosities.json"
import "./App.css";
import { getRandomElement } from "./utils/random";
import SectionCard from "./components/SectionCard";

const imgArray = ["imgBg1", "imgBg2", "imgBg3", "imgBg4"]

function App() {
  const [phrase, setPhrase] = useState(getRandomElement(phrases))
  const [img, setImg] = useState(getRandomElement(imgArray))

const handleReloadButton = () => {
  setPhrase(getRandomElement(phrases))
  setImg(getRandomElement(imgArray))
}


  return (
    <main className={`imgBgMain ${img}`}>
      <SectionCard handleReloadButton={handleReloadButton} phrase={phrase} />
    </main>
  );
}

export default App;
