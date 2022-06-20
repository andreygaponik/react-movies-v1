import axios from "axios";
import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {
    axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`).then((response) => {
      this.setState({
        movies: response.data.Search,
        loading: false
      })
    }).catch((err) => {
      console.error(err);
      this.setState({ loading: false })
    });
  }

  handleSearch = (text, type = 'all') => {
    this.setState({ loading: true })
    axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}${type !== 'all' ? `&type=${type}` : ''}`).then((response) => {
      this.setState({
        movies: response.data.Search,
        loading: false
      })
    }).catch((err) => {
      console.error(err);
      this.setState({ loading: false })
    });

  }

  render() {
    return (
      <main className="content">
        <div className="container">
          <Search handleSearch={this.handleSearch} />
          {
            !this.state.loading
              ? <Movies movies={this.state.movies} />
              : <Preloader />
          }
        </div>
      </main>
    )
  }
}

export default Main;