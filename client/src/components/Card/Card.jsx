import { Link } from "react-router-dom";
import Style from "../Card/Card.module.css";

const Card = (props) => {
  return (
    <div className={Style.card}>
      <Link to={`/home/${props.id}`} className={Style.name}>
        <h1>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h1>
      </Link>
      <img src={props.image} alt={props.name} width="120px" height="120px" />
      <ul className={Style.types}>
        <li className={Style.type}>
          {props.Types?.map((type) => (
            <p>{type.name}</p>
          ))}
        </li>
      </ul>
    </div>
  );
};
export default Card;
