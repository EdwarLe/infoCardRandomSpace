import ButtonRandom from "./ButtonRandom";
import "./styles/SectionCard.css";

const SectionCard = ({ handleReloadButton, phrase }) => {
  return (
    <section className="containerInfo">
      <h2>INFOGALAX</h2>
      <div className="info">
        <p>{phrase && phrase.phrase}</p>
        <ButtonRandom handleReloadButton={handleReloadButton} />
      </div>
      <footer>
        <h4>Fuente: {phrase && phrase.author}</h4>
      </footer>
    </section>
  );
};
export default SectionCard;
