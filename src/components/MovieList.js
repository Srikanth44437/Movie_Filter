// MovieList.js
import React from "react";
import "../styles/movielist.scss";
const MovieList = ({ movies, selectedGenre }) => {
  return (
    <div className="movietable">
      <div>
        <h2>List of Movies</h2>
      </div>
      <div>
        <table id="mainTable">
          <thead>
            <tr className="tabletitle">
              <th>Title</th>
              <th>Genre</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(
              (movie, index) =>
                (!selectedGenre || movie.genre === selectedGenre) && (
                  <tr className="filterData" key={index}>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.year}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;
