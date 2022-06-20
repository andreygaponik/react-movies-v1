import React, { useState, useEffect } from "react";

const Search = (props) => {

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all')

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    props.handleSearch(search, event.target.dataset.type)
  }

  return (
    <div className="row">
      <div className="input-field">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            onClick={() => { props.handleSearch(search, type) }}
            className="btn waves-effect waves-light search-btn"
            type="submit"
            name="action">
            Submit
          </button>
        </form>
      </div>

      <div className="radio-field">
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series only </span>
        </label>
      </div>
    </div>
  )
}

export default Search;