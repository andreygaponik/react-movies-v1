import axios from "axios";
import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (text, type = 'all') => {
    setLoading(true);
    axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}${type !== 'all' ? `&type=${type}` : ''}`).then((response) => {
      setMovies(response.data.Search);
      setLoading(false)
    }).catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`).then((response) => {
      setMovies(response.data.Search);
      setLoading(false)
    }).catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  return (
    <main className="content">
      <div className="container">
        <Search handleSearch={handleSearch} />
        {
          !loading
            ? <Movies movies={movies} />
            : <Preloader />
        }
      </div>
    </main>
  )
}

export default Main;