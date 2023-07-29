import "./styles/ButtonRandom.css";

const ButtonRandom = ({handleReloadButton}) => {
  return (
    <i className="bx bx-rotate-right" onClick={handleReloadButton}></i>
  )
}
export default ButtonRandom