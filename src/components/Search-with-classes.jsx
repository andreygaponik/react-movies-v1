import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      type: 'all'
    }
  }

  handleFilter = (event) => {
    this.setState(() => {
      return (
        { type: event.target.dataset.type }
      )
    }, () => this.props.handleSearch(this.state.search, this.state.type));
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(event) => this.setState({ search: event.target.value })}
            />
            <button
              onClick={() => { this.props.handleSearch(this.state.search, this.state.type) }}
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
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series only </span>
          </label>
        </div>
      </div>
    )
  }
}

export default Search;