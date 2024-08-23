import PropTypes from "prop-types";
import "../Styles/Components_styles.css";

export const GifItem = ({ title, url }) => {
  console.log(title, url);

  return (
    <div className="Card">
      <span className="title__card">{title}</span>
      <img className="img__card" src={url} alt={title} />
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
