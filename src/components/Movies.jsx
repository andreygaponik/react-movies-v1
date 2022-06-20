import Movie from "./Movie";

const Movies = (props) => {
  return (
    <>
      <div className="movies">
        {
          props.movies
            ? props.movies.map((movie) => {
              return <Movie key={movie.imdbID} {...movie} />
            })
            : <h4>Nothing found</h4>
        }
      </div>
    </>
  )
}

export default Movies;