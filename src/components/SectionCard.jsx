import ButtonRandom from "./ButtonRandom";
import "./styles/SectionCard.css";


const SectionCard = ({ handleReloadButton, phrase, planet }) => {
  return (
    <section className="containerInfo">
      <div className={`planet ${planet}`}>
        </div>
      <h2>INFOGALAX</h2>
      <section className="info">
        <p>{phrase && phrase.phrase}</p>
        <ButtonRandom handleReloadButton={handleReloadButton} />
      </section>
      <footer>
        <h4>Fuente: {phrase && phrase.author}</h4>
      </footer>
    </section>
  );
};
export default SectionCard;
