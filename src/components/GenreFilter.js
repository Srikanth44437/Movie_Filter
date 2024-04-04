// GenreFilter.js
import React from "react";
import "../styles/genrefilter.scss";

const GenreFilter = ({ genres, onSelect }) => {
  return (
    <div className="genre">
      <div>
        <h2>Filter by Genre</h2>
      </div>
      <div className="genreOption">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => onSelect(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
