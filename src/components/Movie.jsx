const Movie = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        {
          props.Poster === 'N/A' ? <img src={`https://via.placeholder.com/300x450?text=No+image`} /> : <img src={props.Poster} />
        }

      </div>
      <div className="card-content">
        <span className="card-title">{props.Title}</span>
        <p>{props.Year} <span className="right">{props.Type}</span></p>
      </div>
    </div>
  )
}

export default Movie;