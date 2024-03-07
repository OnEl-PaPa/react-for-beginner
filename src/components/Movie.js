import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, cover_imeage, mouseOver }) {
  return (
    <div style={{ float: "left", width: "235px", marginRight: "4px" }}>
      <Link to={`/movie/${id}`}>
        <img src={cover_imeage} alt={title} id={id} onMouseOver={mouseOver} />
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cover_imeage: PropTypes.string.isRequired,
};

export default Movie;
