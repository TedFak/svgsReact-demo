import { NavLink } from "react-router-dom";
import "./style.css";

const Artist = ({ artistName, img, index }) => {
  return (
    <NavLink to={`/artist/${index}`} className="artist__link">
      <li className="artist">
        <img src={img} className="artist__logo" alt="artist logo" />
        <p className="artist__name">{artistName}</p>
      </li>
    </NavLink>
  );
};

export default Artist;
