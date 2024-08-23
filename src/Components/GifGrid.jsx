import { GifItem } from "./GifItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import PropTypes from "prop-types";
import "../Styles/Components_styles.css";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      <div className="gifGrid__container">
        {images.map(({ id, title, url }) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
