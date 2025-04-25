import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({ title: "", genre: "" });
  const [editingMovie, setEditingMovie] = useState(null);

  // Cargar las películas desde el localStorage al inicio
  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  // Guardar las películas en el localStorage cuando cambian
  useEffect(() => {
    if (movies.length > 0) {
      localStorage.setItem("movies", JSON.stringify(movies));
    }
  }, [movies]);

  const addMovie = (movie) => {
    const newMovie = { ...movie, id: crypto.randomUUID(), favorite: false };
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  const deleteMovie = (id) => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  const updateMovie = (updatedMovie) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === updatedMovie.id ? { ...movie, ...updatedMovie } : movie
      )
    );
  };

  const toggleFavorite = (id) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };

  // Filtrar películas según el título y el género
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    movie.genre.toLowerCase().includes(filter.genre.toLowerCase())
  );

  const favorites = movies.filter(movie => movie.favorite);

  return (
    <MovieContext.Provider
      value={{
        movies,
        addMovie,
        deleteMovie,
        updateMovie,
        toggleFavorite,
        filter,
        setFilter,
        editingMovie,
        setEditingMovie,
        filteredMovies,
        favorites,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}
